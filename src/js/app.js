/**
 * Databricks WAF Assessment Application
 * Main application logic with multi-assessment support
 */

class WAFApp {
    constructor() {
        this.currentPage = 'home';
        this.assessments = {}; // All assessments { id: assessmentObject }
        this.currentAssessmentId = null; // Currently active assessment ID
        this.currentPillarIndex = 0; // Current pillar (0-6)
        this.currentQuestionIndex = 0; // Current question within pillar
        this.pillarsData = this.initializePillarsData();
        // Note: init() is called explicitly after construction to properly await async operations
    }

    /**
     * Get unique principles for a pillar (stable order as they appear in questions)
     * @param {Object} pillar - Pillar object with questions
     * @returns {string[]} List of unique principle names
     */
    getPillarPrinciples(pillar) {
        const seen = new Set();
        const principles = [];
        if (!pillar?.questions) return principles;
        pillar.questions.forEach(q => {
            const p = q?.principle;
            if (!p) return;
            if (seen.has(p)) return;
            seen.add(p);
            principles.push(p);
        });
        return principles;
    }

    /**
     * Initialize pillars data structure
     * @returns {Array} Pillars configuration from real Excel data
     */
    initializePillarsData() {
        // Use real data from Excel - loaded from waf-data.js
        if (typeof WAF_PILLARS_DATA === 'undefined') {
            console.error('WAF_PILLARS_DATA not loaded! Make sure waf-data.js is loaded before app.js');
            return [];
        }

        // Check if category mapping is available
        if (typeof CATEGORY_MAPPING === 'undefined') {
            console.warn('CATEGORY_MAPPING not loaded! All questions will be shown.');
            return WAF_PILLARS_DATA;
        }

        return WAF_PILLARS_DATA;
    }

    /**
     * Get current pillars data (filtered or full)
     * @returns {Array} Pillars data to use
     */
    getCurrentPillarsData() {
        // Use filtered data if available (when inside an assessment)
        return this.filteredPillarsData || this.pillarsData;
    }

    /**
     * Get filtered pillars based on assessment categories
     * @param {Array} selectedCategories - Array of selected category names
     * @returns {Array} Filtered pillars with only relevant questions
     */
    getFilteredPillars(selectedCategories) {
        if (!selectedCategories || selectedCategories.length === 0) {
            // No categories selected, return all questions
            return this.pillarsData;
        }

        if (typeof CATEGORY_MAPPING === 'undefined') {
            console.warn('CATEGORY_MAPPING not loaded! Returning all questions.');
            return this.pillarsData;
        }

        // Filter pillars and questions
        const filteredPillars = this.pillarsData.map(pillar => {
            const filteredQuestions = pillar.questions.filter(question => {
                const questionCategories = CATEGORY_MAPPING[question.identifier] || [];

                // Check if question has at least one matching category
                const hasMatchingCategory = questionCategories.some(cat =>
                    selectedCategories.includes(cat)
                );

                return hasMatchingCategory;
            });

            return {
                ...pillar,
                questions: filteredQuestions
            };
        }).filter(pillar => pillar.questions.length > 0); // Remove pillars with no questions

        return filteredPillars;
    }

    /**
     * Initialize the application
     */
    async init() {
        console.log('Initializing Databricks WAF Assessment App...');
        
        // Initialize i18n system first
        if (typeof I18n !== 'undefined') {
            await I18n.init();
            I18n.renderLanguageSelector('language-selector-container');
        }
        
        this.loadSavedData();
        this.setupEventListeners();
        this.updateCopyrightYear();
        this.updateAssessmentDisplay();
        console.log('App initialized successfully');
    }

    /**
     * Get translated text
     * @param {string} key - Translation key
     * @param {Object} params - Interpolation parameters
     * @returns {string} Translated text
     */
    t(key, params = {}) {
        if (typeof I18n !== 'undefined') {
            const translation = I18n.t(key, params);
            // If translation is the key itself, try to make it more readable
            if (translation === key) {
                // Extract the last part of the key and make it readable
                const lastPart = key.split('.').pop();
                return lastPart.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            }
            return translation;
        }
        // Fallback: make key readable
        const lastPart = key.split('.').pop();
        return lastPart.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    }

    /**
     * Update copyright year dynamically
     */
    updateCopyrightYear() {
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            const currentYear = new Date().getFullYear();
            yearElement.textContent = currentYear;
        }
    }

    /**
     * Setup event listeners for navigation and interactions
     */
    setupEventListeners() {
        // Navigation buttons
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const page = e.target.dataset.page;
                this.navigateToPage(page);
            });
        });

        // Start assessment button
        const startAssessmentBtn = document.getElementById('start-assessment');
        if (startAssessmentBtn) {
            startAssessmentBtn.addEventListener('click', () => {
                this.showAssessmentSelector();
            });
        }

        // Assessment manager button
        const assessmentManagerBtn = document.getElementById('assessment-manager-btn');
        if (assessmentManagerBtn) {
            assessmentManagerBtn.addEventListener('click', () => {
                this.showAssessmentSelector();
            });
        }

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.page) {
                this.navigateToPage(e.state.page, false);
            }
        });

        // Handle before unload (warn user if assessment in progress)
        window.addEventListener('beforeunload', (e) => {
            // Skip confirmation if language is being changed intentionally
            if (window._wafLanguageChanging) {
                return;
            }
            if (this.hasUnsavedChanges()) {
                e.preventDefault();
                e.returnValue = '';
            }
        });
    }

    /**
     * Navigate to a specific page
     * @param {string} pageName - Name of the page to navigate to
     * @param {boolean} updateHistory - Whether to update browser history
     */
    navigateToPage(pageName, updateHistory = true) {
        // Clear filtered pillars when leaving assessment page
        if (this.currentPage === 'assessment' && pageName !== 'assessment') {
            this.filteredPillarsData = null;
        }

        // Hide all pages
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // Show selected page
        const selectedPage = document.getElementById(`${pageName}-page`);
        if (selectedPage) {
            selectedPage.classList.add('active');
        }

        // Update navigation buttons
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.page === pageName) {
                button.classList.add('active');
            }
        });

        // Update current page
        this.currentPage = pageName;

        // Update browser history (using relative paths to support subdirectory deployments)
        if (updateHistory) {
            const url = pageName === 'home' ? './' : `./?page=${pageName}`;
            history.pushState({ page: pageName }, '', url);
        }

        // Scroll to top
        window.scrollTo(0, 0);

        // Update container class for full-width on assessment page
        const mainContainer = document.getElementById('main-container');
        if (mainContainer) {
            if (pageName === 'assessment') {
                mainContainer.classList.remove('container');
                mainContainer.classList.add('container-fluid');
            } else {
                mainContainer.classList.remove('container-fluid');
                mainContainer.classList.add('container');
            }
        }

        // Initialize assessment interface if navigating to assessment page
        if (pageName === 'assessment') {
            this.initializeAssessmentInterface();
        }

        // Initialize results page if navigating to results
        if (pageName === 'results') {
            this.initializeResultsPage();
        }

        console.log(`Navigated to: ${pageName}`);
    }

    /**
     * Initialize assessment interface
     */
    initializeAssessmentInterface() {
        const assessment = this.getCurrentAssessment();
        const noAssessmentState = document.getElementById('no-assessment-state');
        const assessmentInterface = document.getElementById('assessment-interface');

        if (!assessment) {
            // Show no assessment state
            if (noAssessmentState) noAssessmentState.style.display = 'flex';
            if (assessmentInterface) assessmentInterface.style.display = 'none';
        } else {
            // Show assessment interface
            if (noAssessmentState) noAssessmentState.style.display = 'none';
            if (assessmentInterface) assessmentInterface.style.display = 'grid';

            // Initialize assessment data if not exists
            if (!assessment.data.pillars) {
                assessment.data.pillars = {};
            }

            // Apply category filter to get filtered pillars
            this.filteredPillarsData = this.getFilteredPillars(assessment.categories || []);

            console.log(`Assessment loaded: ${assessment.name}`);
            console.log(`Selected categories: ${assessment.categories ? assessment.categories.join(', ') : 'All'}`);
            console.log(`Total questions: ${this.filteredPillarsData.reduce((sum, p) => sum + p.questions.length, 0)}`);

            // Render assessment interface
            this.renderPillarsSidebar();
            this.renderCurrentQuestion();
            this.setupSidebarToggle();
        }
    }

    /**
     * Setup sidebar toggle functionality
     */
    setupSidebarToggle() {
        const toggleBtn = document.getElementById('sidebar-toggle');
        const sidebar = document.getElementById('assessment-sidebar');
        const assessmentInterface = document.querySelector('.assessment-interface');

        if (toggleBtn && sidebar && assessmentInterface) {
            // Create inner wrapper for hover expansion
            if (!sidebar.querySelector('.sidebar-inner')) {
                const inner = document.createElement('div');
                inner.className = 'sidebar-inner';

                // Move all children into the wrapper
                while (sidebar.firstChild) {
                    inner.appendChild(sidebar.firstChild);
                }

                sidebar.appendChild(inner);
            }

            toggleBtn.onclick = () => {
                sidebar.classList.toggle('collapsed');
                assessmentInterface.classList.toggle('sidebar-collapsed');
            };
        }
    }

    /**
     * Render pillars navigation sidebar
     */
    renderPillarsSidebar() {
        const nav = document.getElementById('pillars-nav');
        if (!nav) return;

        const pillarsData = this.getCurrentPillarsData();
        const currentPillar = pillarsData?.[this.currentPillarIndex];
        const currentQuestion = currentPillar?.questions?.[this.currentQuestionIndex];
        const activePrinciple = currentQuestion?.principle || null;
        const assessment = this.getCurrentAssessment();

        nav.innerHTML = pillarsData.map((pillar, index) => {
            const progress = this.calculatePillarProgress(index);
            const isActive = index === this.currentPillarIndex;
            const isCompleted = progress === 100;
            const isOpen = isActive; // single-open accordion: only the active pillar is expanded
            const panelId = `pillar-accordion-panel-${index}`;
            const headerId = `pillar-accordion-header-${index}`;
            const principles = this.getPillarPrinciples(pillar);
            const pillarData = assessment?.data?.pillars?.[pillar.id] || {};

            return `
                <div class="pillar-nav-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${isOpen ? 'is-open' : ''}">
                    <button
                        type="button"
                        class="pillar-accordion-header"
                        id="${headerId}"
                        aria-expanded="${isOpen ? 'true' : 'false'}"
                        aria-controls="${panelId}"
                        aria-current="${isActive ? 'page' : 'false'}"
                        onclick="wafApp.navigateToPillar(${index})"
                    >
                        <div class="pillar-nav-header">
                            <span class="pillar-nav-number">${index + 1}</span>
                            <span class="pillar-nav-name">${this.escapeHtml(pillar.name)}</span>
                        </div>
                        <div class="pillar-nav-progress">
                            <div class="pillar-nav-progress-bar">
                                <div class="pillar-nav-progress-fill" style="width: ${progress}%"></div>
                            </div>
                            <span class="pillar-nav-progress-text">${progress}%</span>
                        </div>
                        <span class="pillar-accordion-chevron" aria-hidden="true">▾</span>
                    </button>

                    <div
                        id="${panelId}"
                        class="pillar-accordion-panel ${isOpen ? 'expanded' : 'collapsed'}"
                        role="region"
                        aria-labelledby="${headerId}"
                        aria-hidden="${isOpen ? 'false' : 'true'}"
                    >
                        ${principles.map((principle) => {
                            const isPrincipleActive = isActive && activePrinciple && activePrinciple === principle;
                            const questionsForPrinciple = (pillar.questions || [])
                                .map((q, qi) => ({ q, qi }))
                                .filter(({ q }) => q?.principle === principle);
                            return `
                                <button
                                    type="button"
                                    class="principle-nav-item ${isPrincipleActive ? 'active' : ''}"
                                    tabindex="${isOpen ? '0' : '-1'}"
                                    onclick='wafApp.navigateToPrinciple(${index}, ${JSON.stringify(principle)})'
                                >
                                    <span class="principle-nav-name">${this.escapeHtml(principle)}</span>
                                    <span class="principle-nav-tags" aria-label="Questions">
                                        ${questionsForPrinciple.map(({ q, qi }) => {
                                            const status = (pillarData?.[q.id] && pillarData[q.id] !== '') ? pillarData[q.id] : 'answer-later';
                                            return `
                                                <button
                                                    type="button"
                                                    class="question-tag status-${this.escapeHtml(status)}"
                                                    tabindex="${isOpen ? '0' : '-1'}"
                                                    onclick="event.stopPropagation(); wafApp.navigateToQuestion(${index}, ${qi})"
                                                    aria-label="Go to question ${this.escapeHtml(q.identifier)}"
                                                >
                                                    ${this.escapeHtml(q.identifier)}
                                                </button>
                                            `;
                                        }).join('')}
                                    </span>
                                </button>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }

    /**
     * Navigate to the first question of a given principle inside a pillar
     * @param {number} pillarIndex - Pillar index
     * @param {string} principleName - Principle name
     */
    navigateToPrinciple(pillarIndex, principleName) {
        const pillarsData = this.getCurrentPillarsData();
        const pillar = pillarsData?.[pillarIndex];
        if (!pillar) return;

        this.currentPillarIndex = pillarIndex;

        const idx = pillar.questions.findIndex(q => q?.principle === principleName);
        this.currentQuestionIndex = idx >= 0 ? idx : 0;

        this.renderPillarsSidebar();
        this.renderCurrentQuestion();
        window.scrollTo(0, 0);
    }

    /**
     * Navigate to a specific question inside a pillar
     * @param {number} pillarIndex - Pillar index
     * @param {number} questionIndex - Question index within pillar
     */
    navigateToQuestion(pillarIndex, questionIndex) {
        const pillarsData = this.getCurrentPillarsData();
        const pillar = pillarsData?.[pillarIndex];
        if (!pillar) return;
        if (questionIndex < 0 || questionIndex >= (pillar.questions?.length || 0)) return;

        this.currentPillarIndex = pillarIndex;
        this.currentQuestionIndex = questionIndex;

        this.renderPillarsSidebar();
        this.renderCurrentQuestion();
        window.scrollTo(0, 0);
    }

    /**
     * Calculate progress for a specific pillar
     * @param {number} pillarIndex - Pillar index
     * @returns {number} Progress percentage (0-100)
     */
    calculatePillarProgress(pillarIndex) {
        const assessment = this.getCurrentAssessment();
        if (!assessment || !assessment.data.pillars) return 0;

        const pillarsData = this.getCurrentPillarsData();
        const pillar = pillarsData[pillarIndex];
        const pillarData = assessment.data.pillars[pillar.id] || {};

        const totalQuestions = pillar.questions.length;
        // Count questions with valid status (open, in-progress, completed, or ignore)
        // "answer-later" is not counted as answered
        const answeredQuestions = pillar.questions.filter(q => {
            const status = pillarData[q.id];
            return status && status !== '' && status !== 'answer-later';
        }).length;

        return Math.round((answeredQuestions / totalQuestions) * 100);
    }

    /**
     * Navigate to a specific pillar
     * @param {number} pillarIndex - Pillar index to navigate to
     */
    navigateToPillar(pillarIndex) {
        const pillarsData = this.getCurrentPillarsData();
        if (pillarIndex < 0 || pillarIndex >= pillarsData.length) return;

        this.currentPillarIndex = pillarIndex;
        this.currentQuestionIndex = 0;

        this.renderPillarsSidebar();
        this.renderCurrentQuestion();
    }

    /**
     * Navigate to next question
     */
    nextQuestion() {
        const pillarsData = this.getCurrentPillarsData();
        const currentPillar = pillarsData[this.currentPillarIndex];

        // Check if there's a next question in current pillar
        if (this.currentQuestionIndex < currentPillar.questions.length - 1) {
            this.currentQuestionIndex++;
        }
        // Move to next pillar
        else if (this.currentPillarIndex < pillarsData.length - 1) {
            this.currentPillarIndex++;
            this.currentQuestionIndex = 0;
        }
        // Already at the end - validate before finishing
        else {
            if (this.validateAllQuestionsAnswered()) {
                alert(this.t('messages.congratulations'));
                this.navigateToPage('results');
            }
            return;
        }

        this.renderPillarsSidebar();
        this.renderCurrentQuestion();
        window.scrollTo(0, 0);
    }

    /**
     * Validate that all questions have been answered
     * @returns {boolean} True if all questions answered, false otherwise
     */
    validateAllQuestionsAnswered() {
        const assessment = this.getCurrentAssessment();
        if (!assessment) return false;

        const pillarsData = this.getCurrentPillarsData();
        const unansweredQuestions = [];

        // Check each pillar and question
        pillarsData.forEach((pillar, pillarIndex) => {
            const pillarData = assessment.data.pillars[pillar.id] || {};

            pillar.questions.forEach((question, questionIndex) => {
                const status = pillarData[question.id];
                if (!status || status === '' || status === 'answer-later') {
                    unansweredQuestions.push({
                        pillar: pillar.name,
                        pillarIndex: pillarIndex,
                        questionIndex: questionIndex,
                        identifier: question.identifier,
                        title: question.title
                    });
                }
            });
        });

        if (unansweredQuestions.length > 0) {
            const firstUnanswered = unansweredQuestions[0];
            const message = this.t('messages.unansweredQuestions', {
                count: unansweredQuestions.length,
                identifier: firstUnanswered.identifier,
                title: firstUnanswered.title
            });

            if (confirm(message)) {
                this.currentPillarIndex = firstUnanswered.pillarIndex;
                this.currentQuestionIndex = firstUnanswered.questionIndex;
                this.renderPillarsSidebar();
                this.renderCurrentQuestion();
                window.scrollTo(0, 0);
            }
            return false;
        }

        return true;
    }

    /**
     * Navigate to previous question
     */
    previousQuestion() {
        const pillarsData = this.getCurrentPillarsData();

        // Check if there's a previous question in current pillar
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
        }
        // Move to previous pillar
        else if (this.currentPillarIndex > 0) {
            this.currentPillarIndex--;
            const previousPillar = pillarsData[this.currentPillarIndex];
            this.currentQuestionIndex = previousPillar.questions.length - 1;
        }
        // Already at the beginning
        else {
            return;
        }

        this.renderPillarsSidebar();
        this.renderCurrentQuestion();
        window.scrollTo(0, 0);
    }

    /**
     * Render current question
     */
    renderCurrentQuestion() {
        const pillarsData = this.getCurrentPillarsData();
        const currentPillar = pillarsData[this.currentPillarIndex];
        const currentQuestion = currentPillar.questions[this.currentQuestionIndex];
        const assessment = this.getCurrentAssessment();

        // Update breadcrumb
        const breadcrumbPillar = document.getElementById('breadcrumb-pillar');
        const breadcrumbQuestion = document.getElementById('breadcrumb-question');
        if (breadcrumbPillar) breadcrumbPillar.textContent = currentPillar.name;
        if (breadcrumbQuestion) breadcrumbQuestion.textContent = currentQuestion.identifier;

        // Update pillar info
        const pillarTitle = document.getElementById('current-pillar-title');
        const pillarDescription = document.getElementById('current-pillar-description');
        if (pillarTitle) pillarTitle.textContent = currentPillar.name;
        if (pillarDescription) pillarDescription.textContent = currentPillar.description;

        // Update pillar progress
        const pillarProgress = this.calculatePillarProgress(this.currentPillarIndex);
        this.updateCircularProgress(pillarProgress);

        const pillarProgressLabel = document.getElementById('pillar-progress-label');
        if (pillarProgressLabel) {
            const answered = Math.round((pillarProgress / 100) * currentPillar.questions.length);
            pillarProgressLabel.textContent = `${answered} of ${currentPillar.questions.length}`;
        }

        // Render question content
        const questionContent = document.getElementById('question-content');
        if (!questionContent) return;

        // Get saved status (can be null/undefined if not answered)
        const savedStatus = assessment?.data?.pillars?.[currentPillar.id]?.[currentQuestion.id] || null;
        const currentStatus = savedStatus || 'answer-later';

        // Build capabilities badge HTML
        const capabilitiesBadge = currentQuestion.capabilities ?
            `<span class="capabilities-badge">${this.escapeHtml(currentQuestion.capabilities)}</span>` : '';

        // Extract cloud providers from details
        const cloudProviders = this.extractCloudProviders(currentQuestion.details || '');
        const cloudBadges = cloudProviders.length > 0 ?
            cloudProviders.map(cloud => `<span class="cloud-badge cloud-${cloud.toLowerCase()}">${cloud}</span>`).join('') : '';

        questionContent.innerHTML = `
            <div class="question-compact-header">
                <div class="question-header-left">
                    <span class="question-identifier">${this.escapeHtml(currentQuestion.identifier)}</span>
                    <span class="question-principle-inline">${this.escapeHtml(currentQuestion.principle)}</span>
                </div>
                <div class="question-header-right">
                    ${capabilitiesBadge}
                    ${cloudBadges}
                </div>
            </div>

            <h3 class="question-title">${this.escapeHtml(currentQuestion.title)}</h3>

            <div class="question-details-compact expanded">
                <div class="details-content">${this.escapeHtml(currentQuestion.details || 'No details available')}</div>
            </div>

            <div class="question-status-row">
                <div class="status-label">${this.t('assessment.status')}: <span class="status-required">*</span></div>
                <div id="question-status"
                     class="status-button-group status-${currentStatus}"
                     role="radiogroup"
                     aria-label="${this.t('assessment.status')}">
                    <button type="button"
                            class="status-btn status-answer-later ${currentStatus === 'answer-later' ? 'is-selected' : ''}"
                            role="radio"
                            aria-checked="${currentStatus === 'answer-later' ? 'true' : 'false'}"
                            data-status="answer-later"
                            onclick="wafApp.saveQuestionStatus('${currentPillar.id}', '${currentQuestion.id}', 'answer-later')">
                        <span class="status-dot" aria-hidden="true"></span>
                        <span class="status-text">${this.t('status.answerLater')}</span>
                    </button>
                    <button type="button"
                            class="status-btn status-open ${currentStatus === 'open' ? 'is-selected' : ''}"
                            role="radio"
                            aria-checked="${currentStatus === 'open' ? 'true' : 'false'}"
                            data-status="open"
                            onclick="wafApp.saveQuestionStatus('${currentPillar.id}', '${currentQuestion.id}', 'open')">
                        <span class="status-dot" aria-hidden="true"></span>
                        <span class="status-text">${this.t('status.open')}</span>
                    </button>
                    <button type="button"
                            class="status-btn status-in-progress ${currentStatus === 'in-progress' ? 'is-selected' : ''}"
                            role="radio"
                            aria-checked="${currentStatus === 'in-progress' ? 'true' : 'false'}"
                            data-status="in-progress"
                            onclick="wafApp.saveQuestionStatus('${currentPillar.id}', '${currentQuestion.id}', 'in-progress')">
                        <span class="status-dot" aria-hidden="true"></span>
                        <span class="status-text">${this.t('status.inProgress')}</span>
                    </button>
                    <button type="button"
                            class="status-btn status-completed ${currentStatus === 'completed' ? 'is-selected' : ''}"
                            role="radio"
                            aria-checked="${currentStatus === 'completed' ? 'true' : 'false'}"
                            data-status="completed"
                            onclick="wafApp.saveQuestionStatus('${currentPillar.id}', '${currentQuestion.id}', 'completed')">
                        <span class="status-dot" aria-hidden="true"></span>
                        <span class="status-text">${this.t('status.completed')}</span>
                    </button>
                    <button type="button"
                            class="status-btn status-ignore ${currentStatus === 'ignore' ? 'is-selected' : ''}"
                            role="radio"
                            aria-checked="${currentStatus === 'ignore' ? 'true' : 'false'}"
                            data-status="ignore"
                            onclick="wafApp.saveQuestionStatus('${currentPillar.id}', '${currentQuestion.id}', 'ignore')">
                        <span class="status-dot" aria-hidden="true"></span>
                        <span class="status-text">${this.t('status.ignore')}</span>
                    </button>
                </div>
            </div>
        `;

        // Add Databricks Guidance section if available
        if (currentQuestion.databricksGuidance) {
            const guidanceHtml = this.renderDatabricksGuidance(
                currentQuestion.databricksGuidance,
                assessment?.cloudProvider || null
            );
            questionContent.innerHTML += guidanceHtml;
        }

        // Update question counter
        const totalQuestions = pillarsData.reduce((sum, pillar) => sum + pillar.questions.length, 0);
        let currentQuestionNumber = 0;
        for (let i = 0; i < this.currentPillarIndex; i++) {
            currentQuestionNumber += pillarsData[i].questions.length;
        }
        currentQuestionNumber += this.currentQuestionIndex + 1;

        const questionCounter = document.getElementById('question-counter');
        if (questionCounter) {
            questionCounter.textContent = this.t('assessment.questionCounter', { current: currentQuestionNumber, total: totalQuestions });
        }

        // Update navigation buttons
        const btnPrevious = document.getElementById('btn-previous');
        const btnNext = document.getElementById('btn-next');

        if (btnPrevious) {
            btnPrevious.disabled = (this.currentPillarIndex === 0 && this.currentQuestionIndex === 0);
        }

        const isLastQuestion = (
            this.currentPillarIndex === pillarsData.length - 1 &&
            this.currentQuestionIndex === currentPillar.questions.length - 1
        );

        if (btnNext) {
            btnNext.innerHTML = isLastQuestion ? `<span>${this.t('assessment.finishAssessment')}</span>` : `<span>${this.t('assessment.next')}</span>`;
        }
    }

    /**
     * Render Databricks Guidance section
     * @param {Object} guidance - Guidance object
     * @param {string|null} cloudProvider - Cloud provider (aws, azure, gcp, or null)
     * @returns {string} HTML string
     */
    renderDatabricksGuidance(guidance, cloudProvider) {
        const guidanceId = `guidance-${Date.now()}`;
        
        let html = `
            <div class="databricks-guidance-container">
                <button class="guidance-toggle-btn collapsed" 
                        onclick="wafApp.toggleGuidance('${guidanceId}')"
                        aria-expanded="false"
                        aria-controls="${guidanceId}">
                    <span class="btn-icon">💡</span>
                    <span class="btn-text">${this.t('assessment.helpMeWithThis')}</span>
                    <span class="toggle-arrow">▼</span>
                </button>
                
                <div id="${guidanceId}" class="guidance-content collapsed" role="region" aria-hidden="true">
                    ${this.renderGuidanceContext(guidance.context)}
                    ${this.renderCloudSpecific(guidance.cloudSpecific, cloudProvider)}
                    ${this.renderDecisionFramework(guidance.decisionFramework)}
                    ${this.renderValidationChecklist(guidance.validationChecklist)}
                    ${this.renderAdditionalResources(guidance.additionalResources)}
                </div>
            </div>
        `;
        
        return html;
    }

    /**
     * Toggle guidance section expand/collapse
     * @param {string} guidanceId - Guidance section ID
     */
    toggleGuidance(guidanceId) {
        const content = document.getElementById(guidanceId);
        const button = content?.previousElementSibling;
        
        if (!content || !button) return;
        
        const isCollapsed = content.classList.contains('collapsed');
        
        if (isCollapsed) {
            content.classList.remove('collapsed');
            button.classList.remove('collapsed');
            button.setAttribute('aria-expanded', 'true');
            content.setAttribute('aria-hidden', 'false');
        } else {
            content.classList.add('collapsed');
            button.classList.add('collapsed');
            button.setAttribute('aria-expanded', 'false');
            content.setAttribute('aria-hidden', 'true');
        }
    }

    /**
     * Render guidance context section
     * @param {string} context - Context text
     * @returns {string} HTML string
     */
    renderGuidanceContext(context) {
        if (!context) return '';
        return `
            <div class="guidance-section guidance-context">
                <h5 class="guidance-section-title">
                    <span class="section-icon">📌</span>
                    ${this.t('assessment.guidanceContext')}
                </h5>
                <p class="guidance-text">${this.escapeHtml(context)}</p>
            </div>
        `;
    }

    /**
     * Render cloud-specific guidance section
     * @param {Object} cloudSpecific - Cloud-specific info object
     * @param {string|null} cloudProvider - Selected cloud provider
     * @returns {string} HTML string
     */
    renderCloudSpecific(cloudSpecific, cloudProvider) {
        if (!cloudSpecific) return '';
        
        // If cloudProvider defined and info available, show cloud-specific info
        if (cloudProvider && cloudSpecific[cloudProvider]) {
            const info = cloudSpecific[cloudProvider];
            return `
                <div class="guidance-section guidance-cloud">
                    <h5 class="guidance-section-title">
                        <span class="section-icon">☁️</span>
                        ${this.t('assessment.guidanceCloudSpecific')} ${cloudProvider.toUpperCase()}
                        <span class="cloud-badge">${this.t('assessment.definedInAssessment')}</span>
                    </h5>
                    <div class="cloud-info-card">
                        <div class="cloud-concept">
                            <strong>${this.t('assessment.concept')}:</strong> 
                            ${this.escapeHtml(info.concept)}
                        </div>
                        ${info.keyPoints ? `
                            <div class="cloud-keypoints">
                                <strong>${this.t('assessment.keyPoints')}:</strong>
                                <ul>
                                    ${info.keyPoints.map(p => `<li>${this.escapeHtml(p)}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        ${info.documentation ? `
                            <a href="${info.documentation}" target="_blank" class="btn-doc">
                                📚 ${this.t('assessment.documentation')} →
                            </a>
                        ` : ''}
                    </div>
                </div>
            `;
        }
        
        // If cloudProvider not defined, suggest setting it
        if (!cloudProvider) {
            return `
                <div class="guidance-section guidance-suggestion">
                    <p class="suggestion-text">
                        <span class="info-icon">ℹ️</span>
                        ${this.t('assessment.cloudProviderSuggestion')}
                    </p>
                    <button class="btn btn-sm btn-secondary" 
                            onclick="wafApp.showEditAssessmentModal('${this.currentAssessmentId}')">
                        ⚙️ ${this.t('assessment.editAssessment')}
                    </button>
                </div>
            `;
        }
        
        return '';
    }

    /**
     * Render decision framework section
     * @param {Object} framework - Decision framework object
     * @returns {string} HTML string
     */
    renderDecisionFramework(framework) {
        if (!framework) return '';
        
        return `
            <div class="guidance-section guidance-decision">
                <h5 class="guidance-section-title">
                    <span class="section-icon">🎯</span>
                    ${framework.title || this.t('assessment.decisionFramework')}
                </h5>
                ${framework.useCustomerManaged ? `
                    <div class="decision-group decision-yes">
                        <h6>${this.t('assessment.whenToUseCustomer')}</h6>
                        <ul>
                            ${framework.useCustomerManaged.map(item => 
                                `<li><span class="check-icon">✅</span> ${this.escapeHtml(item)}</li>`
                            ).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${framework.useDefaultManaged ? `
                    <div class="decision-group decision-neutral">
                        <h6>${this.t('assessment.whenToUseDefault')}</h6>
                        <ul>
                            ${framework.useDefaultManaged.map(item => 
                                `<li><span class="neutral-icon">⚪</span> ${this.escapeHtml(item)}</li>`
                            ).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `;
    }

    /**
     * Render validation checklist section
     * @param {Array} checklist - Checklist array
     * @returns {string} HTML string
     */
    renderValidationChecklist(checklist) {
        if (!checklist || checklist.length === 0) return '';
        
        return `
            <div class="guidance-section guidance-checklist">
                <h5 class="guidance-section-title">
                    <span class="section-icon">✅</span>
                    ${this.t('assessment.validationChecklist')}
                </h5>
                <div class="checklist-accordion">
                    ${checklist.map((category, index) => `
                        <div class="checklist-category" data-category-index="${index}">
                            <button class="checklist-category-toggle" 
                                    onclick="this.parentElement.classList.toggle('expanded')"
                                    type="button">
                                <span class="toggle-icon">▶</span>
                                <span class="category-name">📂 ${this.escapeHtml(category.category)}</span>
                                <span class="question-count">(${category.questions.length})</span>
                            </button>
                            <div class="checklist-questions">
                                ${category.questions.map(question => `
                                    <div class="checklist-question">
                                        <span class="question-icon">•</span>
                                        <span class="question-text">${this.escapeHtml(question)}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    /**
     * Render additional resources section
     * @param {Array} resources - Resources array
     * @returns {string} HTML string
     */
    renderAdditionalResources(resources) {
        if (!resources || resources.length === 0) return '';
        
        return `
            <div class="guidance-section guidance-resources">
                <h5 class="guidance-section-title">
                    <span class="section-icon">📚</span>
                    ${this.t('assessment.additionalResources')}
                </h5>
                <ul class="resources-list">
                    ${resources.map(resource => `
                        <li>
                            <a href="${resource.url}" target="_blank" rel="noopener noreferrer">
                                ${this.escapeHtml(resource.title)} →
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    /**
     * Extract cloud providers from details text
     * @param {string} details - Details text
     * @returns {Array} Array of cloud provider names
     */
    extractCloudProviders(details) {
        const providers = [];
        if (details.includes('AWS')) providers.push('AWS');
        if (details.includes('Azure') || details.includes('AZURE')) providers.push('Azure');
        if (details.includes('GCP')) providers.push('GCP');
        return providers;
    }

    /**
     * Save question status
     * @param {string} pillarId - Pillar ID
     * @param {string} questionId - Question ID
     * @param {string} status - Status value (answer-later, open, in-progress, completed, ignore)
     *
     * IMPORTANT: This method ONLY saves answers, it NEVER deletes them.
     * All answers are preserved even when categories change.
     */
    saveQuestionStatus(pillarId, questionId, status) {
        const assessment = this.getCurrentAssessment();
        if (!assessment) return;

        // Don't save empty values (but allow "answer-later")
        if (!status || status === '') {
            console.warn(this.t('messages.cannotSaveEmpty'));
            return;
        }

        // Initialize pillar data if not exists
        if (!assessment.data.pillars[pillarId]) {
            assessment.data.pillars[pillarId] = {};
        }

        // Save status (including "answer-later")
        // NOTE: Answers are NEVER deleted, even when categories change
        assessment.data.pillars[pillarId][questionId] = status;

        // Mark as modified and save
        assessment.modified = true;
        this.saveData();

        // Update status selector UI state (button group)
        this.updateQuestionStatusUI(status);

        // Update progress
        this.renderPillarsSidebar();

        console.log(`Saved status for ${questionId}: ${status}`);
    }

    /**
     * Sync the status button group UI with a given status
     * @param {string} status - Status value (answer-later, open, in-progress, completed, ignore)
     */
    updateQuestionStatusUI(status) {
        const statusGroup = document.getElementById('question-status');
        if (!statusGroup) return;

        statusGroup.className = `status-button-group status-${status}`;

        const buttons = statusGroup.querySelectorAll('.status-btn');
        buttons.forEach(btn => {
            const btnStatus = btn.getAttribute('data-status');
            const isSelected = btnStatus === status;
            btn.classList.toggle('is-selected', isSelected);
            btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');
        });
    }

    /**
     * Get score for a status
     * @param {string} status - Question status
     * @returns {number} Score value
     */
    getStatusScore(status) {
        const scoreMap = {
            'ignore': 0,
            'open': 1,
            'in-progress': 2,
            'completed': 3,
            'answer-later': 0
        };
        return scoreMap[status] || 0;
    }

    /**
     * Get assessment results filtered by selected categories
     * @param {string} assessmentId - Assessment ID
     * @returns {Object} Results object with filtered data
     */
    getAssessmentResults(assessmentId) {
        const assessment = this.assessments[assessmentId];
        if (!assessment) return null;

        // Get filtered pillars based on assessment categories
        const filteredPillars = this.getFilteredPillars(assessment.categories || []);

        // Calculate statistics
        const results = {
            assessmentId: assessment.id,
            assessmentName: assessment.name,
            categories: assessment.categories || [],
            createdAt: assessment.createdAt,
            updatedAt: assessment.updatedAt,
            pillars: []
        };

        let totalQuestions = 0;
        let answeredQuestions = 0;
        let openCount = 0;
        let inProgressCount = 0;
        let completedCount = 0;
        let ignoreCount = 0;
        let answerLaterCount = 0;
        let totalScore = 0;
        let maxPossibleScore = 0;

        filteredPillars.forEach(pillar => {
            const pillarData = assessment.data.pillars[pillar.id] || {};
            const pillarStats = {
                id: pillar.id,
                name: pillar.name,
                description: pillar.description,
                totalQuestions: pillar.questions.length,
                answeredQuestions: 0,
                open: 0,
                inProgress: 0,
                completed: 0,
                ignore: 0,
                answerLater: 0,
                score: 0,
                maxScore: 0,
                questions: []
            };

            pillar.questions.forEach(question => {
                const status = pillarData[question.id] || 'answer-later';
                const questionScore = this.getStatusScore(status);

                // Calculate scores
                pillarStats.score += questionScore;
                pillarStats.maxScore += 3; // Max score per question is 3 (completed)
                totalScore += questionScore;
                maxPossibleScore += 3;

                // Count by status
                if (status === 'open') {
                    pillarStats.open++;
                    openCount++;
                    pillarStats.answeredQuestions++;
                    answeredQuestions++;
                } else if (status === 'in-progress') {
                    pillarStats.inProgress++;
                    inProgressCount++;
                    pillarStats.answeredQuestions++;
                    answeredQuestions++;
                } else if (status === 'completed') {
                    pillarStats.completed++;
                    completedCount++;
                    pillarStats.answeredQuestions++;
                    answeredQuestions++;
                } else if (status === 'ignore') {
                    pillarStats.ignore++;
                    ignoreCount++;
                    pillarStats.answeredQuestions++;
                    answeredQuestions++;
                } else {
                    pillarStats.answerLater++;
                    answerLaterCount++;
                }

                pillarStats.questions.push({
                    id: question.id,
                    identifier: question.identifier,
                    principle: question.principle,
                    title: question.title,
                    status: status,
                    score: questionScore
                });

                totalQuestions++;
            });

            // Calculate pillar score percentage
            pillarStats.scorePercentage = pillarStats.maxScore > 0
                ? Math.round((pillarStats.score / pillarStats.maxScore) * 100)
                : 0;

            results.pillars.push(pillarStats);
        });

        // Overall statistics
        const overallScorePercentage = maxPossibleScore > 0
            ? Math.round((totalScore / maxPossibleScore) * 100)
            : 0;

        results.overall = {
            totalQuestions,
            answeredQuestions,
            answerLaterCount,
            completionPercentage: totalQuestions > 0 ? Math.round((answeredQuestions / totalQuestions) * 100) : 0,
            totalScore,
            maxPossibleScore,
            scorePercentage: overallScorePercentage,
            statusBreakdown: {
                open: openCount,
                inProgress: inProgressCount,
                completed: completedCount,
                ignore: ignoreCount,
                answerLater: answerLaterCount
            }
        };

        return results;
    }

    /**
     * Get results grouped by Principle within each Pillar
     * @param {Object} results - Results object from getAssessmentResults
     * @returns {Object} Grouped data by pillar and principle
     */
    getResultsByPrinciple(results) {
        const groupedData = {};

        results.pillars.forEach(pillar => {
            groupedData[pillar.name] = {};

            pillar.questions.forEach(question => {
                const principle = question.principle;
                
                if (!groupedData[pillar.name][principle]) {
                    groupedData[pillar.name][principle] = {
                        score: 0,
                        maxScore: 0,
                        percentage: 0,
                        questionCount: 0
                    };
                }

                groupedData[pillar.name][principle].score += question.score;
                groupedData[pillar.name][principle].maxScore += 3; // Max score per question
                groupedData[pillar.name][principle].questionCount += 1;
            });

            // Calculate percentages
            Object.keys(groupedData[pillar.name]).forEach(principle => {
                const data = groupedData[pillar.name][principle];
                data.percentage = data.maxScore > 0 
                    ? Math.round((data.score / data.maxScore) * 100) 
                    : 0;
            });
        });

        return groupedData;
    }


    /**
     * Initialize results page
     */
    initializeResultsPage() {
        const resultsPage = document.getElementById('results-page');
        if (!resultsPage) return;

        const assessment = this.getCurrentAssessment();

        if (!assessment) {
            resultsPage.innerHTML = `
                <div class="no-results-state">
                    <h2>${this.t('results.noAssessmentTitle')}</h2>
                    <p>${this.t('results.noAssessmentText')}</p>
                    <button class="btn btn-primary" onclick="wafApp.showAssessmentSelector()">
                        ${this.t('results.selectAssessment')}
                    </button>
                </div>
            `;
            return;
        }

        // Get results filtered by categories
        const results = this.getAssessmentResults(assessment.id);

        // Render results with new dashboard structure
        resultsPage.innerHTML = `
            <div class="dashboard-container">
                <!-- Dashboard Header -->
                <div class="dashboard-header">
                    <div class="dashboard-header-content">
                        <div class="dashboard-title-section">
                            <h2 class="dashboard-title">${this.t('results.title')} ${this.escapeHtml(results.assessmentName)}</h2>
                            <div class="dashboard-metadata">
                                <span class="metadata-item">
                                    <span class="metadata-icon">📅</span>
                                    <span class="metadata-text">${this.t('results.created')} ${new Date(results.createdAt).toLocaleDateString()}</span>
                                </span>
                                <span class="metadata-item">
                                    <span class="metadata-icon">🔄</span>
                                    <span class="metadata-text">${this.t('results.updated')} ${new Date(results.updatedAt).toLocaleDateString()}</span>
                                </span>
                            </div>
                        </div>
                        ${results.categories.length > 0 ? `
                            <div class="dashboard-categories">
                                <span class="categories-label">${this.t('results.categories')}</span>
                                <div class="categories-tags">
                                    ${results.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <!-- Main Visualization Section with KPIs -->
                <div class="dashboard-section">
                    <div class="section-header">
                        <h3 class="section-title">${this.t('results.overallProgress')}</h3>
                    </div>
                    <div class="dashboard-overview-grid">
                        <!-- Radar Chart -->
                        <div class="dashboard-card dashboard-chart-card-compact">
                            <div class="chart-header-compact">
                                <h4 class="chart-title-compact">${this.t('results.scoreByPillar')}</h4>
                            </div>
                            <div class="chart-container-compact">
                                <canvas id="pillar-radar-chart"></canvas>
                            </div>
                        </div>
                        
                        <!-- KPI Cards -->
                        <div class="dashboard-kpi-stack">
                            <div class="dashboard-card kpi-card kpi-card-primary">
                                <div class="kpi-icon">🎯</div>
                                <div class="kpi-content">
                                    <div class="kpi-value">${results.overall.scorePercentage}%</div>
                                    <div class="kpi-label">${this.t('results.overallScore')}</div>
                                    <div class="kpi-sublabel">${results.overall.totalScore}/${results.overall.maxPossibleScore} ${this.t('results.points')}</div>
                                </div>
                            </div>
                            <div class="dashboard-card kpi-card kpi-card-success">
                                <div class="kpi-icon">✓</div>
                                <div class="kpi-content">
                                    <div class="kpi-value">${results.overall.completionPercentage}%</div>
                                    <div class="kpi-label">${this.t('results.completionRate')}</div>
                                    <div class="kpi-sublabel">${results.overall.answeredQuestions}/${results.overall.totalQuestions} ${this.t('results.questions')}</div>
                                </div>
                            </div>
                            <div class="dashboard-card kpi-card kpi-card-warning">
                                <div class="kpi-icon">⚡</div>
                                <div class="kpi-content">
                                    <div class="kpi-value">${results.overall.statusBreakdown.inProgress}</div>
                                    <div class="kpi-label">${this.t('results.inProgressLabel')}</div>
                                    <div class="kpi-sublabel">${results.overall.statusBreakdown.completed} ${this.t('results.completedLabel')}</div>
                                </div>
                            </div>
                            <div class="dashboard-card kpi-card kpi-card-info">
                                <div class="kpi-icon">📋</div>
                                <div class="kpi-content">
                                    <div class="kpi-value">${results.overall.statusBreakdown.open}</div>
                                    <div class="kpi-label">${this.t('results.openItems')}</div>
                                    <div class="kpi-sublabel">${results.overall.statusBreakdown.ignore} ${this.t('results.ignored')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pillars Detail Section -->
                <div class="dashboard-section">
                    <div class="section-header">
                        <h3 class="section-title">${this.t('results.resultsByPillar')}</h3>
                    </div>
                    <div class="dashboard-pillars-grid">
                        ${results.pillars.map((pillar, index) => `
                            <div class="dashboard-card pillar-card">
                                <div class="pillar-card-header">
                                    <div class="pillar-number">${index + 1}</div>
                                    <div class="pillar-header-content">
                                        <h4 class="pillar-title">${this.escapeHtml(pillar.name)}</h4>
                                        <div class="pillar-progress-text">
                                            ${pillar.answeredQuestions}/${pillar.totalQuestions} ${this.t('results.answered')} 
                                            (${Math.round((pillar.answeredQuestions / pillar.totalQuestions) * 100)}%)
                                        </div>
                                    </div>
                                </div>
                                <div class="pillar-card-body">
                                    <div class="pillar-gauge-section">
                                        <canvas id="pillar-gauge-${index}" class="pillar-gauge"></canvas>
                                    </div>
                                    <div class="pillar-details-section">
                                        <div class="pillar-score-display">
                                            <div class="score-percentage">${pillar.scorePercentage}%</div>
                                            <div class="score-details">${pillar.score}/${pillar.maxScore} ${this.t('results.points')}</div>
                                        </div>
                                        <div class="pillar-status-badges">
                                            <span class="status-badge status-open">
                                                <span class="badge-label">${this.t('status.open')}</span>
                                                <span class="badge-value">${pillar.open}</span>
                                            </span>
                                            <span class="status-badge status-in-progress">
                                                <span class="badge-label">${this.t('status.inProgress')}</span>
                                                <span class="badge-value">${pillar.inProgress}</span>
                                            </span>
                                            <span class="status-badge status-completed">
                                                <span class="badge-label">${this.t('status.completed')}</span>
                                                <span class="badge-value">${pillar.completed}</span>
                                            </span>
                                            <span class="status-badge status-ignore">
                                                <span class="badge-label">${this.t('status.ignore')}</span>
                                                <span class="badge-value">${pillar.ignore}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                ${this.renderAnalysisByPillarSection(results)}

                <!-- Actions Section -->
                <div class="dashboard-section">
                    <div class="dashboard-actions">
                        <button class="btn btn-secondary" onclick="wafApp.exportAssessment('${assessment.id}')">
                            ${this.t('results.exportData')}
                        </button>
                        <button class="btn btn-primary" onclick="wafApp.navigateToPage('assessment')">
                            ${this.t('results.continueAssessment')}
                        </button>
                    </div>
                </div>
            </div>
        `;

        console.log('Results page initialized for:', results.assessmentName);
        console.log('Filtered by categories:', results.categories);

        // Render charts after DOM is updated
        setTimeout(() => {
            this.renderPillarRadarChart(results.pillars);
            this.renderPillarGauges(results.pillars);
        }, 100);
    }

    /**
     * Render the Analysis by Pillar section with grouped data
     * @param {Object} results - Results object from getAssessmentResults
     * @returns {string} HTML string for the analysis section
     */
    renderAnalysisByPillarSection(results) {
        const byPrinciple = this.getResultsByPrinciple(results);

        let html = `
            <!-- Analysis by Pillar Section -->
            <div class="dashboard-section analysis-by-pillar-section">
                <div class="section-header">
                    <h3 class="section-title">${this.t('results.analysisByPillar')}</h3>
                    <p class="section-subtitle">${this.t('results.byPrinciple')}</p>
                </div>
                <div class="analysis-single-column">
        `;

        // Iterate through each pillar
        Object.keys(byPrinciple).forEach((pillarName, pillarIndex) => {
            const items = byPrinciple[pillarName];
            
            // Calculate totals for this pillar
            let totalScore = 0;
            let totalMaxScore = 0;
            let itemCount = 0;
            
            Object.values(items).forEach(item => {
                totalScore += item.score;
                totalMaxScore += item.maxScore;
                itemCount++;
            });
            
            const pillarPercentage = totalMaxScore > 0 
                ? Math.round((totalScore / totalMaxScore) * 100) 
                : 0;
            
            // Sort items by percentage (descending)
            const sortedItems = Object.entries(items).sort((a, b) => b[1].percentage - a[1].percentage);

            html += `
                <div class="pillar-analysis-card" data-accordion="principle-pillar-${pillarIndex}">
                    <div class="pillar-analysis-header" onclick="wafApp.toggleAnalysisAccordion('principle', ${pillarIndex})">
                        <div class="pillar-header-left">
                            <div class="pillar-number">${pillarIndex + 1}</div>
                            <div class="pillar-header-content">
                                <h5 class="pillar-analysis-name">${this.escapeHtml(pillarName)}</h5>
                                <div class="pillar-summary">
                                    <span class="pillar-summary-score">${pillarPercentage}%</span>
                                    <span class="pillar-summary-details">${totalScore}/${totalMaxScore} ${this.t('results.points')}</span>
                                    <span class="pillar-summary-count">${itemCount} ${itemCount === 1 ? 'item' : 'items'}</span>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-toggle">
                            <svg class="accordion-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="pillar-analysis-items collapsed">
            `;

            sortedItems.forEach(([itemName, data]) => {
                html += `
                    <div class="principle-item">
                        <div class="item-header">
                            <span class="item-name">${this.escapeHtml(itemName)}</span>
                            <span class="item-percentage">${data.percentage}%</span>
                        </div>
                        <div class="percentage-bar-container">
                            <div class="percentage-bar-fill" style="width: ${data.percentage}%"></div>
                        </div>
                        <div class="item-meta">
                            <span class="item-score">${data.score}/${data.maxScore} ${this.t('results.points')}</span>
                            <span class="item-count">${data.questionCount} ${data.questionCount === 1 ? this.t('results.question') : this.t('results.questions')}</span>
                        </div>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;

        return html;
    }

    /**
     * Toggle accordion state for analysis by pillar cards
     * @param {string} columnType - Type of column (principle or best-practice)
     * @param {number} pillarIndex - Index of the pillar to toggle
     */
    toggleAnalysisAccordion(columnType, pillarIndex) {
        const card = document.querySelector(`[data-accordion="${columnType}-pillar-${pillarIndex}"]`);
        if (!card) return;

        const itemsContainer = card.querySelector('.pillar-analysis-items');
        const header = card.querySelector('.pillar-analysis-header');
        
        if (itemsContainer.classList.contains('collapsed')) {
            // Expand
            itemsContainer.classList.remove('collapsed');
            itemsContainer.classList.add('expanded');
            header.classList.add('active');
        } else {
            // Collapse
            itemsContainer.classList.remove('expanded');
            itemsContainer.classList.add('collapsed');
            header.classList.remove('active');
        }
    }

    /**
     * Render gauge charts for each pillar
     * @param {Array} pillars - Array of pillar results
     */
    renderPillarGauges(pillars) {
        pillars.forEach((pillar, index) => {
            const canvas = document.getElementById(`pillar-gauge-${index}`);
            if (!canvas) return;

            // Create small radial gauge for pillar
            new RadialGauge({
                renderTo: canvas,
                width: 150,
                height: 150,
                units: "%",
                title: false,
                value: pillar.scorePercentage,
                minValue: 0,
                maxValue: 100,
                majorTicks: ["0", "25", "50", "75", "100"],
                minorTicks: 0,
                strokeTicks: true,
                highlights: [
                    { from: 0, to: 33, color: "rgba(239, 68, 68, .75)" },
                    { from: 33, to: 66, color: "rgba(249, 115, 22, .75)" },
                    { from: 66, to: 100, color: "rgba(16, 185, 129, .75)" }
                ],
                colorPlate: "#fff",
                colorMajorTicks: "#6B7280",
                colorMinorTicks: "#9CA3AF",
                colorTitle: "#1F2937",
                colorUnits: "#9CA3AF",
                colorNumbers: "#6B7280",
                colorNeedle: "#FF3621",
                colorNeedleEnd: "#FF3621",
                valueBox: true,
                valueBoxStroke: 3,
                valueBoxWidth: 0,
                valueTextShadow: false,
                colorValueBoxRect: "#fff",
                colorValueBoxRectEnd: "#fff",
                colorValueBoxBackground: "#fff",
                colorValueText: "#1F2937",
                valueInt: 0,
                valueDec: 0,
                animationRule: "linear",
                animationDuration: 1200,
                fontValueSize: 22,
                fontUnitsSize: 12,
                borders: false,
                borderShadowWidth: 0,
                needleType: "arrow",
                needleWidth: 2,
                needleCircleSize: 5,
                needleCircleOuter: true,
                needleCircleInner: false,
                animateOnInit: true
            }).draw();
        });
    }

    /**
     * Render pillar radar chart
     * @param {Array} pillars - Array of pillar results
     */
    renderPillarRadarChart(pillars) {
        const canvas = document.getElementById('pillar-radar-chart');
        if (!canvas) return;

        // Convert percentages to 0-10 scale
        const labels = pillars.map(p => p.name);
        const data = pillars.map(p => (p.scorePercentage / 100) * 10);

        new Chart(canvas, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Pillar Score',
                    data: data,
                    fill: true,
                    backgroundColor: 'rgba(255, 54, 33, 0.2)',
                    borderColor: '#FF3621',
                    pointBackgroundColor: '#FF3621',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#FF3621',
                    borderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    r: {
                        min: 0,
                        max: 10,
                        ticks: {
                            stepSize: 2,
                            callback: function(value) {
                                return value;
                            },
                            font: {
                                size: 12
                            },
                            color: '#6B7280'
                        },
                        grid: {
                            color: 'rgba(107, 114, 128, 0.2)'
                        },
                        angleLines: {
                            color: 'rgba(107, 114, 128, 0.2)'
                        },
                        pointLabels: {
                            font: {
                                size: 12,
                                weight: '600'
                            },
                            color: '#1F2937'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const percentage = Math.round((context.parsed.r / 10) * 100);
                                return `Score: ${context.parsed.r.toFixed(1)}/10 (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    /**
     * Update circular progress indicator
     * @param {number} percentage - Progress percentage (0-100)
     */
    updateCircularProgress(percentage) {
        const circle = document.getElementById('pillar-progress-circle');
        const percentageText = document.getElementById('pillar-progress-percentage');

        if (circle) {
            const radius = 20;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percentage / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        }

        if (percentageText) {
            percentageText.textContent = `${percentage}%`;
        }
    }

    /**
     * Check if there are unsaved changes
     * @returns {boolean}
     */
    hasUnsavedChanges() {
        // Check if current assessment has unsaved data
        if (this.currentAssessmentId && this.assessments[this.currentAssessmentId]) {
            const assessment = this.assessments[this.currentAssessmentId];
            return assessment.modified === true;
        }
        return false;
    }

    /**
     * Load saved data from localStorage
     */
    loadSavedData() {
        try {
            const savedData = localStorage.getItem('waf-assessments');
            if (savedData) {
                const data = JSON.parse(savedData);
                this.assessments = data.assessments || {};
                this.currentAssessmentId = data.currentAssessmentId || null;
                console.log('Loaded saved assessment data:', Object.keys(this.assessments).length, 'assessments');
            }
        } catch (error) {
            console.error('Error loading saved data:', error);
            this.assessments = {};
            this.currentAssessmentId = null;
        }
    }

    /**
     * Save data to localStorage
     */
    saveData() {
        try {
            const dataToSave = {
                assessments: this.assessments,
                currentAssessmentId: this.currentAssessmentId,
                lastSaved: new Date().toISOString()
            };
            localStorage.setItem('waf-assessments', JSON.stringify(dataToSave));
            console.log('Assessment data saved');
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error saving data. Your browser storage might be full.');
        }
    }

    /**
     * Update assessment display in header
     */
    updateAssessmentDisplay() {
        const displayElement = document.getElementById('current-assessment-display');
        if (!displayElement) return;

        if (this.currentAssessmentId && this.assessments[this.currentAssessmentId]) {
            const assessment = this.assessments[this.currentAssessmentId];
            displayElement.innerHTML = `
                <span class="assessment-label">${this.t('header.assessmentLabel')}</span>
                <span class="assessment-name">${this.escapeHtml(assessment.name)}</span>
            `;
            displayElement.classList.remove('no-assessment');
        } else {
            displayElement.innerHTML = `
                <span class="assessment-label">${this.t('header.noAssessment')}</span>
            `;
            displayElement.classList.add('no-assessment');
        }
    }

    /**
     * Escape HTML to prevent XSS
     * @param {string} text - Text to escape
     * @returns {string} Escaped text
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Generate unique ID for assessment
     * @returns {string} Unique ID
     */
    generateAssessmentId() {
        return `assessment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Show assessment selector modal
     */
    showAssessmentSelector() {
        const modal = this.createAssessmentSelectorModal();
        document.body.appendChild(modal);

        // Trigger animation
        setTimeout(() => modal.classList.add('show'), 10);
    }

    /**
     * Create assessment selector modal
     * @returns {HTMLElement} Modal element
     */
    createAssessmentSelectorModal() {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.id = 'assessment-selector-modal';

        const assessmentList = Object.values(this.assessments)
            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${this.t('modal.assessmentManager')}</h2>
                    <button class="modal-close" onclick="wafApp.closeModal('assessment-selector-modal')">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="assessment-actions">
                        <button class="btn btn-primary" onclick="wafApp.showCreateAssessmentModal()">
                            <span>${this.t('modal.newAssessment')}</span>
                        </button>
                        <button class="btn btn-secondary" onclick="wafApp.showImportAssessmentModal()">
                            <span>${this.t('modal.importAssessment')}</span>
                        </button>
                    </div>

                    ${assessmentList.length > 0 ? `
                        <div class="assessments-list">
                            <h3>${this.t('modal.existingAssessments')}</h3>
                            ${assessmentList.map(assessment => `
                                <div class="assessment-item ${assessment.id === this.currentAssessmentId ? 'active' : ''}">
                                    <div class="assessment-info">
                                        <div class="assessment-item-header">
                                            <div class="assessment-item-name">${this.escapeHtml(assessment.name)}</div>
                                            ${assessment.id === this.currentAssessmentId ? `<span class="badge-active">${this.t('modal.active')}</span>` : ''}
                                        </div>
                                        ${assessment.categories && assessment.categories.length > 0 ? `
                                            <div class="assessment-categories">
                                                ${assessment.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                                            </div>
                                        ` : ''}
                                        <div class="assessment-item-meta">
                                            <span>${new Date(assessment.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    <div class="assessment-actions-inline">
                                        ${assessment.id !== this.currentAssessmentId ?
                                            `<button class="btn-icon" onclick="wafApp.loadAssessment('${assessment.id}')" title="${this.t('modal.load')}">
                                                <span>📂</span>
                                            </button>` : ''
                                        }
                                        <button class="btn-icon" onclick="wafApp.showEditAssessmentModal('${assessment.id}')" title="${this.t('ui.edit')}">
                                            <span>✏️</span>
                                        </button>
                                        <button class="btn-icon" onclick="wafApp.exportAssessment('${assessment.id}')" title="${this.t('modal.export')}">
                                            <span>↓</span>
                                        </button>
                                        <button class="btn-icon btn-danger" onclick="wafApp.deleteAssessment('${assessment.id}')" title="${this.t('ui.delete')}">
                                            <span>🗑</span>
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <div class="empty-state">
                            <p>${this.t('modal.noAssessments')}</p>
                        </div>
                    `}
                </div>
            </div>
        `;

        return modal;
    }

    /**
     * Get available categories
     * @returns {Array} Available categories
     */
    getAvailableCategories() {
        return [
            'ETL & DS tools',
            'BI Tools',
            'Orchestration',
            'Ingest & Transform',
            'Advanced Analytics, ML & Gen AI',
            'Data Warehouse',
            'Collaboration',
            'AI Engine',
            'Data & AI Governance',
            'Cloud Platform',
            'Security'
        ];
    }

    /**
     * Show create assessment modal
     */
    showCreateAssessmentModal() {
        this.closeModal('assessment-selector-modal');

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.id = 'create-assessment-modal';

        const categories = this.getAvailableCategories();

        modal.innerHTML = `
            <div class="modal-content modal-medium">
                <div class="modal-header">
                    <h2>${this.t('modal.createTitle')}</h2>
                    <button class="modal-close" onclick="wafApp.closeModal('create-assessment-modal')">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="create-assessment-form" onsubmit="wafApp.handleCreateAssessment(event)">
                        <div class="form-group">
                            <label for="assessment-name">${this.t('modal.assessmentName')} *</label>
                            <input
                                type="text"
                                id="assessment-name"
                                name="name"
                                required
                                placeholder="${this.t('modal.assessmentNamePlaceholder')}"
                                maxlength="100"
                                autocomplete="off"
                            >
                        </div>
                        <div class="form-group">
                            <label for="assessment-description">${this.t('modal.description')}</label>
                            <textarea
                                id="assessment-description"
                                name="description"
                                rows="2"
                                placeholder="${this.t('modal.descriptionPlaceholder')}"
                                maxlength="500"
                            ></textarea>
                        </div>
                        <div class="form-group">
                            <label>${this.t('modal.categoriesToAssess')} *</label>
                            <div class="categories-grid">
                                ${categories.map(category => `
                                    <label class="category-checkbox">
                                        <input
                                            type="checkbox"
                                            name="category"
                                            value="${category}"
                                            checked
                                        >
                                        <span class="category-label">${category}</span>
                                    </label>
                                `).join('')}
                            </div>
                            <small>${this.t('modal.selectAtLeastOne')}</small>
                        </div>
                        <div class="form-group">
                            <label for="cloud-provider">${this.t('modal.cloudProvider')}</label>
                            <select id="cloud-provider" name="cloudProvider" class="form-select">
                                <option value="">${this.t('modal.cloudProviderNone')}</option>
                                <option value="aws">Amazon Web Services (AWS)</option>
                                <option value="azure">Microsoft Azure</option>
                                <option value="gcp">Google Cloud Platform (GCP)</option>
                            </select>
                            <small class="form-hint">${this.t('modal.cloudProviderHint')}</small>
                        </div>
                        <div class="form-group">
                            <label class="category-checkbox" style="display: flex; align-items: center; cursor: pointer;">
                                <input
                                    type="checkbox"
                                    name="generateDemoData"
                                    id="generate-demo-data"
                                    style="margin-right: 8px;"
                                >
                                <span>${this.t('modal.generateDemoData')}</span>
                            </label>
                            <small style="margin-left: 24px;">${this.t('modal.generateDemoDataHelp')}</small>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" onclick="wafApp.closeModal('create-assessment-modal')">
                                ${this.t('ui.cancel')}
                            </button>
                            <button type="submit" class="btn btn-primary">
                                ${this.t('modal.createAssessment')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        setTimeout(() => {
            modal.classList.add('show');
            document.getElementById('assessment-name').focus();
        }, 10);
    }

    /**
     * Generate random demo data for assessment
     * @param {Object} assessment - Assessment object to populate with demo data
     * @param {Array} categories - Selected categories
     */
    generateDemoData(assessment, categories) {
        // Get filtered pillars based on selected categories
        const filteredPillars = this.getFilteredPillars(categories);
        
        console.log('Generating demo data for assessment:', assessment.name);
        console.log('Total questions to generate:', filteredPillars.reduce((sum, p) => sum + p.questions.length, 0));
        
        // Generate random probabilities within specified ranges
        // Open: 5% to 20%
        // In Progress: 15% to 30%
        // Completed: 60% to 80%
        // Ignored: 0% to 5%
        const openProb = 5 + Math.random() * (20 - 5);
        const inProgressProb = 15 + Math.random() * (30 - 15);
        const completedProb = 60 + Math.random() * (80 - 60);
        const ignoredProb = 0 + Math.random() * (5 - 0);
        
        // Normalize probabilities to ensure they add up to 100%
        const total = openProb + inProgressProb + completedProb + ignoredProb;
        const openNormalized = (openProb / total) * 100;
        const inProgressNormalized = (inProgressProb / total) * 100;
        const completedNormalized = (completedProb / total) * 100;
        const ignoredNormalized = (ignoredProb / total) * 100;
        
        console.log('Demo data probabilities (normalized):');
        console.log(`  Open: ${openNormalized.toFixed(1)}%`);
        console.log(`  In Progress: ${inProgressNormalized.toFixed(1)}%`);
        console.log(`  Completed: ${completedNormalized.toFixed(1)}%`);
        console.log(`  Ignored: ${ignoredNormalized.toFixed(1)}%`);
        
        // Function to get random status based on probabilities
        const getRandomStatus = () => {
            const rand = Math.random() * 100;
            
            if (rand < openNormalized) {
                return 'open';
            } else if (rand < openNormalized + inProgressNormalized) {
                return 'in-progress';
            } else if (rand < openNormalized + inProgressNormalized + completedNormalized) {
                return 'completed';
            } else {
                return 'ignore';
            }
        };
        
        // Generate responses for all questions in filtered pillars
        filteredPillars.forEach(pillar => {
            if (!assessment.data.pillars[pillar.id]) {
                assessment.data.pillars[pillar.id] = {};
            }
            
            pillar.questions.forEach(question => {
                const status = getRandomStatus();
                assessment.data.pillars[pillar.id][question.id] = status;
            });
        });
        
        console.log('Demo data generation complete');
    }

    /**
     * Handle create assessment form submission
     * @param {Event} event - Form submit event
     */
    handleCreateAssessment(event) {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value.trim();
        const description = form.description.value.trim();
        const generateDemo = form.generateDemoData?.checked || false;

        // Get selected categories
        const categoryCheckboxes = form.querySelectorAll('input[name="category"]:checked');
        const categories = Array.from(categoryCheckboxes).map(cb => cb.value);

        if (!name) {
            alert(this.t('messages.enterName'));
            return;
        }

        if (categories.length === 0) {
            alert(this.t('messages.selectCategory'));
            return;
        }

        const assessmentId = this.generateAssessmentId();
        const now = new Date().toISOString();

        const newAssessment = {
            id: assessmentId,
            name: name,
            description: description,
            categories: categories,
            cloudProvider: form.cloudProvider?.value || null,  // NEW: cloud provider field (optional)
            createdAt: now,
            updatedAt: now,
            data: {
                // Assessment responses will be stored here
                pillars: {},
                metadata: {}
            },
            modified: false
        };

        // Generate demo data if requested
        if (generateDemo) {
            this.generateDemoData(newAssessment, categories);
            console.log('Demo data generated for assessment:', name);
        }

        this.assessments[assessmentId] = newAssessment;
        this.currentAssessmentId = assessmentId;
        this.saveData();
        this.updateAssessmentDisplay();

        this.closeModal('create-assessment-modal');
        this.navigateToPage('assessment');

        console.log('Created new assessment:', name, 'with categories:', categories, '- Demo data:', generateDemo);
    }

    /**
     * Show edit assessment modal
     * @param {string} assessmentId - Assessment ID to edit
     */
    showEditAssessmentModal(assessmentId) {
        const assessment = this.assessments[assessmentId];
        if (!assessment) {
            alert(this.t('messages.assessmentNotFound'));
            return;
        }

        this.closeModal('assessment-selector-modal');

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.id = 'edit-assessment-modal';

        const categories = this.getAvailableCategories();
        const selectedCategories = assessment.categories || [];

        modal.innerHTML = `
            <div class="modal-content modal-medium">
                <div class="modal-header">
                    <h2>${this.t('modal.editTitle')}</h2>
                    <button class="modal-close" onclick="wafApp.closeModal('edit-assessment-modal')">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="edit-assessment-form" onsubmit="wafApp.handleUpdateAssessment(event, '${assessmentId}')">
                        <div class="form-group">
                            <label for="edit-assessment-name">${this.t('modal.assessmentName')} *</label>
                            <input
                                type="text"
                                id="edit-assessment-name"
                                name="name"
                                required
                                placeholder="${this.t('modal.assessmentNamePlaceholder')}"
                                maxlength="100"
                                autocomplete="off"
                                value="${this.escapeHtml(assessment.name)}"
                            >
                        </div>
                        <div class="form-group">
                            <label for="edit-assessment-description">${this.t('modal.description')}</label>
                            <textarea
                                id="edit-assessment-description"
                                name="description"
                                rows="2"
                                placeholder="${this.t('modal.descriptionPlaceholder')}"
                                maxlength="500"
                            >${this.escapeHtml(assessment.description || '')}</textarea>
                        </div>
                        <div class="form-group">
                            <label>${this.t('modal.categoriesToAssess')} *</label>
                            <div class="categories-grid">
                                ${categories.map(category => `
                                    <label class="category-checkbox">
                                        <input
                                            type="checkbox"
                                            name="category"
                                            value="${category}"
                                            ${selectedCategories.includes(category) ? 'checked' : ''}
                                        >
                                        <span class="category-label">${category}</span>
                                    </label>
                                `).join('')}
                            </div>
                            <small>${this.t('modal.selectAtLeastOne')}</small>
                        </div>
                        <div class="form-group">
                            <label for="edit-cloud-provider">${this.t('modal.cloudProvider')}</label>
                            <select id="edit-cloud-provider" name="cloudProvider" class="form-select">
                                <option value="" ${!assessment.cloudProvider ? 'selected' : ''}>${this.t('modal.cloudProviderNone')}</option>
                                <option value="aws" ${assessment.cloudProvider === 'aws' ? 'selected' : ''}>Amazon Web Services (AWS)</option>
                                <option value="azure" ${assessment.cloudProvider === 'azure' ? 'selected' : ''}>Microsoft Azure</option>
                                <option value="gcp" ${assessment.cloudProvider === 'gcp' ? 'selected' : ''}>Google Cloud Platform (GCP)</option>
                            </select>
                            <small class="form-hint">${this.t('modal.cloudProviderHint')}</small>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" onclick="wafApp.closeModal('edit-assessment-modal')">
                                ${this.t('ui.cancel')}
                            </button>
                            <button type="submit" class="btn btn-primary">
                                ${this.t('modal.saveChanges')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        setTimeout(() => {
            modal.classList.add('show');
            document.getElementById('edit-assessment-name').focus();
        }, 10);
    }

    /**
     * Handle update assessment form submission
     * @param {Event} event - Form submit event
     * @param {string} assessmentId - Assessment ID to update
     */
    handleUpdateAssessment(event, assessmentId) {
        event.preventDefault();

        const assessment = this.assessments[assessmentId];
        if (!assessment) {
            alert(this.t('messages.assessmentNotFound'));
            return;
        }

        const form = event.target;
        const name = form.name.value.trim();
        const description = form.description.value.trim();

        // Get selected categories
        const categoryCheckboxes = form.querySelectorAll('input[name="category"]:checked');
        const categories = Array.from(categoryCheckboxes).map(cb => cb.value);

        if (!name) {
            alert(this.t('messages.enterName'));
            return;
        }

        if (categories.length === 0) {
            alert(this.t('messages.selectCategory'));
            return;
        }

        // Check if categories changed
        const categoriesChanged = JSON.stringify(assessment.categories) !== JSON.stringify(categories);

        // Update assessment (IMPORTANT: Never delete answers, only update metadata)
        assessment.name = name;
        assessment.description = description;
        assessment.categories = categories;
        assessment.cloudProvider = form.cloudProvider?.value || null;  // NEW: update cloud provider field (optional)
        assessment.updatedAt = new Date().toISOString();
        assessment.modified = true;

        this.saveData();
        this.updateAssessmentDisplay();

        this.closeModal('edit-assessment-modal');
        this.showAssessmentSelector();

        // If this is the current assessment and categories changed, reload the interface
        if (this.currentAssessmentId === assessmentId && categoriesChanged) {
            console.log('Categories changed for current assessment - reloading interface...');

            // Store current position
            const currentPillarId = this.getCurrentPillarsData()[this.currentPillarIndex]?.id;
            const currentQuestionId = this.getCurrentPillarsData()[this.currentPillarIndex]?.questions[this.currentQuestionIndex]?.id;

            // Reload filtered data
            this.filteredPillarsData = this.getFilteredPillars(assessment.categories);

            // Try to restore position, or reset to start
            this.restorePosition(currentPillarId, currentQuestionId);

            // Re-render interface
            this.renderPillarsSidebar();
            this.renderCurrentQuestion();

            console.log(`✓ Reloaded with ${this.filteredPillarsData.reduce((sum, p) => sum + p.questions.length, 0)} filtered questions`);
        }

        console.log('Updated assessment:', name, 'with categories:', categories);
    }

    /**
     * Try to restore position after category change
     * @param {string} pillarId - Previous pillar ID
     * @param {string} questionId - Previous question ID
     */
    restorePosition(pillarId, questionId) {
        const pillarsData = this.getCurrentPillarsData();

        // Try to find the same pillar
        const pillarIndex = pillarsData.findIndex(p => p.id === pillarId);
        if (pillarIndex !== -1) {
            this.currentPillarIndex = pillarIndex;

            // Try to find the same question
            const questionIndex = pillarsData[pillarIndex].questions.findIndex(q => q.id === questionId);
            if (questionIndex !== -1) {
                this.currentQuestionIndex = questionIndex;
                return; // Successfully restored position
            }
        }

        // If position cannot be restored, reset to start
        this.currentPillarIndex = 0;
        this.currentQuestionIndex = 0;
    }

    /**
     * Load an existing assessment
     * @param {string} assessmentId - Assessment ID to load
     */
    loadAssessment(assessmentId) {
        if (!this.assessments[assessmentId]) {
            alert('Assessment not found');
            return;
        }

        this.currentAssessmentId = assessmentId;
        this.saveData();
        this.updateAssessmentDisplay();
        this.closeModal('assessment-selector-modal');
        this.navigateToPage('assessment');

        console.log('Loaded assessment:', this.assessments[assessmentId].name);
    }

    /**
     * Delete an assessment
     * @param {string} assessmentId - Assessment ID to delete
     */
    deleteAssessment(assessmentId) {
        if (!this.assessments[assessmentId]) {
            return;
        }

        const assessment = this.assessments[assessmentId];
        const confirmMessage = this.t('messages.confirmDelete', { name: assessment.name });

        if (!confirm(confirmMessage)) {
            return;
        }

        delete this.assessments[assessmentId];

        // If deleted assessment was active, clear current
        if (this.currentAssessmentId === assessmentId) {
            this.currentAssessmentId = null;
            this.updateAssessmentDisplay();
        }

        this.saveData();

        // Refresh the modal
        this.closeModal('assessment-selector-modal');
        this.showAssessmentSelector();

        console.log('Deleted assessment:', assessment.name);
    }

    /**
     * Export a specific assessment
     * @param {string} assessmentId - Assessment ID to export
     */
    exportAssessment(assessmentId) {
        if (!this.assessments[assessmentId]) {
            alert('Assessment not found');
            return;
        }

        const assessment = this.assessments[assessmentId];
        const dataStr = JSON.stringify(assessment, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);

        const fileName = assessment.name
            .replace(/[^a-z0-9]/gi, '-')
            .toLowerCase()
            .substring(0, 50);

        const dateStr = new Date().toISOString().split('T')[0];

        const link = document.createElement('a');
        link.href = url;
        link.download = `waf-${fileName}-${dateStr}.json`;
        link.click();

        URL.revokeObjectURL(url);
        console.log('Exported assessment:', assessment.name);
    }

    /**
     * Show import assessment modal
     */
    showImportAssessmentModal() {
        this.closeModal('assessment-selector-modal');

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.id = 'import-assessment-modal';

        modal.innerHTML = `
            <div class="modal-content modal-small">
                <div class="modal-header">
                    <h2>${this.t('modal.importTitle')}</h2>
                    <button class="modal-close" onclick="wafApp.closeModal('import-assessment-modal')">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="import-instructions">
                        <p>${this.t('modal.importInstructions')}</p>
                    </div>
                    <form id="import-assessment-form" onsubmit="wafApp.handleImportAssessment(event)">
                        <div class="form-group">
                            <label for="import-file">${this.t('modal.assessmentFile')} *</label>
                            <input
                                type="file"
                                id="import-file"
                                name="file"
                                accept=".json,application/json"
                                required
                            >
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" onclick="wafApp.closeModal('import-assessment-modal')">
                                ${this.t('ui.cancel')}
                            </button>
                            <button type="submit" class="btn btn-primary">
                                ${this.t('modal.importBtn')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('show'), 10);
    }

    /**
     * Handle import assessment
     * @param {Event} event - Form submit event
     */
    async handleImportAssessment(event) {
        event.preventDefault();

        const fileInput = document.getElementById('import-file');
        const file = fileInput.files[0];

        if (!file) {
            alert('Please select a file');
            return;
        }

        try {
            const text = await file.text();
            const importedAssessment = JSON.parse(text);

            // Validate assessment structure
            if (!importedAssessment.id || !importedAssessment.name) {
                throw new Error('Invalid assessment file format');
            }

            // Generate new ID to avoid conflicts
            const newId = this.generateAssessmentId();
            const now = new Date().toISOString();

            const assessment = {
                ...importedAssessment,
                id: newId,
                importedAt: now,
                updatedAt: now
            };

            this.assessments[newId] = assessment;
            this.currentAssessmentId = newId;
            this.saveData();
            this.updateAssessmentDisplay();

            this.closeModal('import-assessment-modal');
            alert(this.t('messages.assessmentImported', { name: assessment.name }));
            this.showAssessmentSelector();

            console.log('Imported assessment:', assessment.name);
        } catch (error) {
            console.error('Error importing assessment:', error);
            alert(this.t('messages.importError'));
        }
    }

    /**
     * Close modal
     * @param {string} modalId - Modal ID to close
     */
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        }
    }

    /**
     * Get current assessment
     * @returns {Object|null} Current assessment object or null
     */
    getCurrentAssessment() {
        if (this.currentAssessmentId && this.assessments[this.currentAssessmentId]) {
            return this.assessments[this.currentAssessmentId];
        }
        return null;
    }

    /**
     * Update current assessment data
     * @param {Object} data - Data to update
     */
    updateCurrentAssessment(data) {
        const assessment = this.getCurrentAssessment();
        if (!assessment) {
            console.error('No active assessment');
            return;
        }

        assessment.data = { ...assessment.data, ...data };
        assessment.updatedAt = new Date().toISOString();
        assessment.modified = true;
        this.saveData();
    }
}

// Initialize the application when DOM is ready and WAF data is loaded
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Wait for WAF data to be loaded (promise created in index.html)
        if (window.wafDataLoaded) {
            await window.wafDataLoaded;
        } else {
            // Fallback: check if data is already available
            if (typeof WAF_PILLARS_DATA === 'undefined') {
                throw new Error('WAF_PILLARS_DATA not available');
            }
        }
        
        window.wafApp = new WAFApp();
        await window.wafApp.init();

        // Handle initial page based on URL query parameters
        const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get('page');
        const action = urlParams.get('action');

        if (page) {
            window.wafApp.navigateToPage(page, false);
        } else if (action === 'new') {
            window.wafApp.showCreateAssessmentModal();
        }
    } catch (error) {
        console.error('Failed to initialize WAF application:', error);
        // Show user-friendly error message
        const container = document.getElementById('main-container');
        if (container) {
            container.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #dc3545;">
                    <h2>Failed to Load Application</h2>
                    <p>There was an error loading the assessment data. Please try refreshing the page.</p>
                    <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; cursor: pointer;">
                        Reload Page
                    </button>
                </div>
            `;
        }
    }
});

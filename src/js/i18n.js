/**
 * Internationalization (i18n) Module
 * Handles language switching and translations for the WAF Assessment Tool
 */

const I18n = (function() {
    // Available languages
    const LANGUAGES = {
        'en': { name: 'English', flag: '🇺🇸', nativeName: 'English' },
        'es': { name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
        'pt-BR': { name: 'Portuguese (Brazil)', flag: '🇧🇷', nativeName: 'Português (Brasil)' }
    };

    // Storage key for language preference
    const STORAGE_KEY = 'waf-language';

    // Default language
    const DEFAULT_LANGUAGE = 'en';

    // Current language
    let currentLanguage = DEFAULT_LANGUAGE;

    // Translations cache
    let translations = {};

    // WAF Data cache per language
    let wafDataCache = {};

    /**
     * Initialize the i18n module
     */
    async function init() {
        // Load saved language preference
        const savedLanguage = localStorage.getItem(STORAGE_KEY);
        if (savedLanguage && LANGUAGES[savedLanguage]) {
            currentLanguage = savedLanguage;
        }

        // Load translations for current language
        await loadTranslations(currentLanguage);

        // Update HTML lang attribute
        document.documentElement.lang = currentLanguage === 'pt-BR' ? 'pt-BR' : currentLanguage;

        // Apply translations to static content
        applyTranslations();

        console.log(`I18n initialized with language: ${currentLanguage}`);
    }

    /**
     * Load translations for a specific language
     * @param {string} lang - Language code
     */
    async function loadTranslations(lang) {
        if (translations[lang]) {
            return translations[lang];
        }

        try {
            const response = await fetch(`src/js/i18n/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load translations for ${lang}`);
            }
            translations[lang] = await response.json();
            return translations[lang];
        } catch (error) {
            console.error(`Error loading translations for ${lang}:`, error);
            // Fallback to English if available
            if (lang !== 'en' && translations['en']) {
                return translations['en'];
            }
            return {};
        }
    }

    /**
     * Get translation for a key
     * @param {string} key - Translation key (dot notation supported)
     * @param {Object} params - Optional parameters for interpolation
     * @returns {string} Translated string
     */
    function t(key, params = {}) {
        const langTranslations = translations[currentLanguage] || translations['en'] || {};
        
        // Support dot notation (e.g., 'nav.home')
        const keys = key.split('.');
        let value = langTranslations;
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // Key not found, return the key itself
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        if (typeof value !== 'string') {
            console.warn(`Translation value is not a string: ${key}`);
            return key;
        }

        // Interpolate parameters
        let result = value;
        for (const [paramKey, paramValue] of Object.entries(params)) {
            result = result.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), paramValue);
        }

        return result;
    }

    /**
     * Apply translations to all elements with data-i18n attribute
     */
    function applyTranslations() {
        // Translate elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = t(key);
            if (translation !== key) {
                element.textContent = translation;
            }
        });

        // Translate elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = t(key);
            if (translation !== key) {
                element.placeholder = translation;
            }
        });

        // Translate elements with data-i18n-title attribute
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            const translation = t(key);
            if (translation !== key) {
                element.title = translation;
            }
        });

        // Translate elements with data-i18n-html attribute (for HTML content)
        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            const translation = t(key);
            if (translation !== key) {
                element.innerHTML = translation;
            }
        });
    }

    /**
     * Change the current language
     * @param {string} lang - Language code
     */
    async function setLanguage(lang) {
        if (!LANGUAGES[lang]) {
            console.error(`Language not supported: ${lang}`);
            return;
        }

        if (lang === currentLanguage) {
            return;
        }

        // Save preference
        localStorage.setItem(STORAGE_KEY, lang);
        currentLanguage = lang;

        // Reload the page to apply all translations
        // This ensures WAF data is also reloaded with the correct language
        window.location.reload();
    }

    /**
     * Get current language code
     * @returns {string} Current language code
     */
    function getCurrentLanguage() {
        return currentLanguage;
    }

    /**
     * Get all available languages
     * @returns {Object} Languages object
     */
    function getAvailableLanguages() {
        return { ...LANGUAGES };
    }

    /**
     * Get language info
     * @param {string} lang - Language code
     * @returns {Object} Language info
     */
    function getLanguageInfo(lang) {
        return LANGUAGES[lang] || null;
    }

    /**
     * Create and render the language selector
     * @param {string} containerId - ID of the container element
     */
    function renderLanguageSelector(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Language selector container not found: ${containerId}`);
            return;
        }

        const currentLang = LANGUAGES[currentLanguage];
        
        container.innerHTML = `
            <div class="language-selector">
                <button class="language-selector-btn" id="language-selector-btn" aria-label="${t('ui.selectLanguage')}" aria-expanded="false">
                    <span class="language-flag">${currentLang.flag}</span>
                    <span class="language-name">${currentLang.nativeName}</span>
                    <span class="language-arrow">▼</span>
                </button>
                <div class="language-dropdown" id="language-dropdown">
                    ${Object.entries(LANGUAGES).map(([code, lang]) => `
                        <button class="language-option ${code === currentLanguage ? 'active' : ''}" 
                                data-lang="${code}"
                                aria-label="${lang.name}">
                            <span class="language-flag">${lang.flag}</span>
                            <span class="language-name">${lang.nativeName}</span>
                            ${code === currentLanguage ? '<span class="language-check">✓</span>' : ''}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        // Setup event listeners
        const btn = document.getElementById('language-selector-btn');
        const dropdown = document.getElementById('language-dropdown');

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdown.classList.toggle('show');
            btn.setAttribute('aria-expanded', isOpen);
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!container.contains(e.target)) {
                dropdown.classList.remove('show');
                btn.setAttribute('aria-expanded', 'false');
            }
        });

        // Handle language selection
        dropdown.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                setLanguage(lang);
            });
        });
    }

    /**
     * Get the appropriate WAF data file path for the current language
     * @returns {string} Path to WAF data file
     */
    function getWafDataPath() {
        if (currentLanguage === 'en') {
            return 'src/js/waf-data.js';
        }
        return `src/js/waf-data-${currentLanguage}.js`;
    }

    /**
     * Check if translations are loaded
     * @returns {boolean}
     */
    function isLoaded() {
        return Object.keys(translations).length > 0;
    }

    // Public API
    return {
        init,
        t,
        setLanguage,
        getCurrentLanguage,
        getAvailableLanguages,
        getLanguageInfo,
        renderLanguageSelector,
        applyTranslations,
        getWafDataPath,
        isLoaded,
        LANGUAGES
    };
})();

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.I18n = I18n;
}


/**
 * PWA Service Worker Registration and Management
 */

class PWAManager {
    constructor() {
        this.serviceWorkerRegistration = null;
        this.init();
    }

    /**
     * Initialize PWA features
     */
    async init() {
        if ('serviceWorker' in navigator) {
            await this.registerServiceWorker();
            this.setupInstallPrompt();
            this.checkForUpdates();
        } else {
            console.log('Service Worker not supported in this browser');
        }
    }

    /**
     * Register the service worker
     */
    async registerServiceWorker() {
        try {
            // Use relative path for service worker to support deployment in subdirectories
            const swUrl = './service-worker.js';
            // Calculate base path from current location (supports subdirectory deployment)
            const currentPath = window.location.pathname;
            // Remove filename if present (e.g., index.html) to get directory
            const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
            const scope = basePath;
            
            try {
                const response = await fetch(swUrl, { method: 'HEAD', cache: 'no-cache' });
                if (!response.ok) {
                    console.warn('Service Worker file not found, skipping registration');
                    return;
                }
            } catch (fetchError) {
                // If HEAD fails, try GET as fallback
                try {
                    const response = await fetch(swUrl, { method: 'GET', cache: 'no-cache' });
                    if (!response.ok) {
                        console.warn('Service Worker file not found, skipping registration');
                        return;
                    }
                } catch (getError) {
                    console.warn('Service Worker file not accessible, skipping registration');
                    return;
                }
            }

            this.serviceWorkerRegistration = await navigator.serviceWorker.register(swUrl, {
                scope: scope
            });

            console.log('Service Worker registered successfully:', this.serviceWorkerRegistration);

            // Handle service worker updates
            this.serviceWorkerRegistration.addEventListener('updatefound', () => {
                const newWorker = this.serviceWorkerRegistration.installing;
                console.log('Service Worker update found');

                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        this.showUpdateNotification();
                    }
                });
            });
        } catch (error) {
            // Check if error is due to missing service worker file (404)
            const errorMessage = error.message || error.toString();
            const is404Error = errorMessage.includes('404') || 
                              errorMessage.includes('bad HTTP response code') ||
                              (error.name === 'TypeError' && errorMessage.includes('Failed to register'));
            
            if (is404Error) {
                // Service worker file not found - this is expected in some deployment scenarios
                console.warn('Service Worker file not found, continuing without offline support');
            } else {
                // Other registration errors should be logged
                console.error('Service Worker registration failed:', error);
            }
        }
    }

    /**
     * Setup install prompt for PWA
     */
    setupInstallPrompt() {
        let deferredPrompt;

        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();

            // Stash the event so it can be triggered later
            deferredPrompt = e;

            // Show install button/banner
            this.showInstallPromotion(deferredPrompt);
        });

        window.addEventListener('appinstalled', () => {
            console.log('PWA installed successfully');
            deferredPrompt = null;
            this.hideInstallPromotion();
        });
    }

    /**
     * Show install promotion UI
     * @param {Event} deferredPrompt - The beforeinstallprompt event
     */
    showInstallPromotion(deferredPrompt) {
        // Create install banner
        const banner = document.createElement('div');
        banner.id = 'install-banner';
        banner.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #1C3E5A 0%, #FF3621 100%);
            color: white;
            padding: 1rem;
            text-align: center;
            z-index: 1000;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
            animation: slideUp 0.3s ease;
        `;

        banner.innerHTML = `
            <div style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                <div style="flex: 1; text-align: left;">
                    <strong>Install Databricks WAF Assessment</strong>
                    <p style="margin: 0.25rem 0 0; font-size: 0.9rem; opacity: 0.9;">Access the assessment tool anytime, even offline!</p>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <button id="install-btn" style="background: white; color: #FF3621; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">
                        Install
                    </button>
                    <button id="dismiss-install-btn" style="background: transparent; color: white; border: 1px solid white; padding: 0.75rem 1rem; border-radius: 8px; cursor: pointer;">
                        Not now
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        // Add slide up animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideUp {
                from {
                    transform: translateY(100%);
                }
                to {
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);

        // Handle install button click
        document.getElementById('install-btn').addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User response to install prompt: ${outcome}`);
                deferredPrompt = null;
            }
            this.hideInstallPromotion();
        });

        // Handle dismiss button click
        document.getElementById('dismiss-install-btn').addEventListener('click', () => {
            this.hideInstallPromotion();
        });
    }

    /**
     * Hide install promotion UI
     */
    hideInstallPromotion() {
        const banner = document.getElementById('install-banner');
        if (banner) {
            banner.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => banner.remove(), 300);
        }
    }

    /**
     * Show update notification
     */
    showUpdateNotification() {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #FF3621;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 1000;
            max-width: 300px;
        `;

        notification.innerHTML = `
            <strong>Update Available</strong>
            <p style="margin: 0.5rem 0;">A new version is available.</p>
            <button id="update-btn" style="background: white; color: #FF3621; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-weight: 600; margin-right: 0.5rem;">
                Update Now
            </button>
            <button id="dismiss-update-btn" style="background: transparent; color: white; border: 1px solid white; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">
                Later
            </button>
        `;

        document.body.appendChild(notification);

        document.getElementById('update-btn').addEventListener('click', () => {
            if (this.serviceWorkerRegistration && this.serviceWorkerRegistration.waiting) {
                this.serviceWorkerRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
            }
            window.location.reload();
        });

        document.getElementById('dismiss-update-btn').addEventListener('click', () => {
            notification.remove();
        });
    }

    /**
     * Check for service worker updates periodically
     */
    checkForUpdates() {
        if (this.serviceWorkerRegistration) {
            // Check for updates every hour
            setInterval(() => {
                this.serviceWorkerRegistration.update();
            }, 60 * 60 * 1000);
        }
    }

    /**
     * Check if app is running as installed PWA
     * @returns {boolean}
     */
    isInstalled() {
        return window.matchMedia('(display-mode: standalone)').matches ||
               window.navigator.standalone === true;
    }
}

// Initialize PWA Manager
document.addEventListener('DOMContentLoaded', () => {
    window.pwaManager = new PWAManager();

    if (window.pwaManager.isInstalled()) {
        console.log('Running as installed PWA');
    }
});

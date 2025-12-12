const CACHE_NAME = 'databricks-waf-v0.3.1';
const OFFLINE_URL = '/index.html';

// Core files to cache for offline use (must exist).
const CORE_FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/src/css/main.css',
    '/src/js/category-mapping.js',
    '/src/js/app.js',
    '/src/js/pwa.js',
    '/src/js/i18n.js',
    '/src/js/libs/chart.umd.js',
    '/src/js/libs/gauge.min.js',
    '/manifest.json',
    '/src/assets/images/waf-implementation-cycle.png',
    '/src/assets/images/lakehouse-architecture-pillars.png',
    '/src/assets/icons/logo-waf.png',
    '/src/assets/icons/icon-72x72.png',
    '/src/assets/icons/icon-96x96.png',
    '/src/assets/icons/icon-128x128.png',
    '/src/assets/icons/icon-144x144.png',
    '/src/assets/icons/icon-152x152.png',
    '/src/assets/icons/icon-192x192.png',
    '/src/assets/icons/icon-384x384.png',
    '/src/assets/icons/icon-512x512.png'
];

// Optional files (best-effort). These may be hosted externally or not exist in all deployments.
const OPTIONAL_FILES_TO_CACHE = [
    // i18n JSONs (can be provided externally; do not fail SW install if missing)
    '/src/js/i18n/en.json',
    '/src/js/i18n/es.json',
    '/src/js/i18n/pt-BR.json',
    '/src/js/i18n/fr.json',
    '/src/js/i18n/it.json',

    // Legacy/alternate WAF data bundles (not present in all builds)
    '/src/js/waf-data.js',
    '/src/js/waf-data-es.js',
    '/src/js/waf-data-pt-BR.js',

    // WAF data JSONs (helpful for offline, even if the app requests versioned URLs)
    '/src/data/waf-data.json',
    '/src/data/waf-data-es.json',
    '/src/data/waf-data-pt-BR.json',
    '/src/data/waf-data-fr.json'
];

// Install event - cache files
self.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Install');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[ServiceWorker] Caching app shell');
                return cache.addAll(CORE_FILES_TO_CACHE).then(async () => {
                    const results = await Promise.allSettled(
                        OPTIONAL_FILES_TO_CACHE.map((url) => cache.add(url))
                    );
                    const failed = results.filter((r) => r.status === 'rejected').length;
                    if (failed) {
                        console.warn(`[ServiceWorker] Optional precache failures: ${failed}/${OPTIONAL_FILES_TO_CACHE.length}`);
                    }
                });
            })
            .then(() => {
                return self.skipWaiting();
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activate');
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    console.log('[ServiceWorker] Fetch', event.request.url);

    // Skip cross-origin requests
    if (event.request.url.startsWith(self.location.origin)) {
        // Always fetch from network if URL has query string (versioned files)
        const url = new URL(event.request.url);
        if (url.search) {
            console.log('[ServiceWorker] Bypassing cache for versioned file:', url.pathname);
            event.respondWith(fetch(event.request));
            return;
        }

        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }

                    // Clone the request
                    const fetchRequest = event.request.clone();

                    return fetch(fetchRequest).then((response) => {
                        // Check if valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }).catch(() => {
                        // If both cache and network fail, show offline page
                        return caches.match(OFFLINE_URL);
                    });
                })
        );
    }
});

// Message event - handle messages from the application
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

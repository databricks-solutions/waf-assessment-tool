const CACHE_NAME = 'databricks-waf-v0.2.0';
const OFFLINE_URL = '/index.html';

// Files to cache for offline use
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/src/css/main.css',
    '/src/js/waf-data.js',
    '/src/js/category-mapping.js',
    '/src/js/app.js',
    '/src/js/pwa.js',
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

// Install event - cache files
self.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Install');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[ServiceWorker] Caching app shell');
                return cache.addAll(FILES_TO_CACHE);
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

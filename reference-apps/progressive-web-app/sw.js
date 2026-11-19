const cacheName = 'optiview-player-pwa-web-ui';
const filesToCache = [
    './',
    'index.html',
    'js/main.js',
    'css/style.css',
    'manifest.json',
    '../../node_modules/theoplayer/THEOplayer.chromeless.js',
    '../../node_modules/theoplayer/iframe.html',
    '../../node_modules/theoplayer/THEOplayer.transmux.js',
    '../../node_modules/theoplayer/THEOplayer.transmux.wasm',
    '../../node_modules/@theoplayer/web-ui/dist/THEOplayerUI.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Delete caches from earlier versions of the app */
self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(keys.filter(function(key) { return key !== cacheName; }).map(function(key) { return caches.delete(key); }));
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
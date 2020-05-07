var cacheName = 'theo-pwa';
var filesToCache = [
    './',
    'index.html',
    'js/main.js',
    'css/style.css',
    'manifest.json',
    'theoplayer/THEOplayer.js',
    'theoplayer/ui.css',
    'theoplayer/theoplayer.d.js',
    'theoplayer/theoplayer.e.js',
    'theoplayer/theoplayer.p.js',
    'theoplayer/iframe.html'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
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
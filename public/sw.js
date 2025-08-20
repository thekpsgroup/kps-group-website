
// Service Worker for KPS Multi-Site
const CACHE_NAME = 'kps-multi-site-v1';
const urlsToCache = [
  '/',
  '/globals.css',
  '/brands/kps/logo-transparent.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

const CACHE_NAME = 'huji-maze-v5';
const APP_SHELL = [
  './huji-maze.html',
  './huji-maze.webmanifest',
  './maze-icon.svg',
  './maze-icon-192.png',
  './maze-icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const request = event.request;
  const acceptsHtml = request.headers.get('accept')?.includes('text/html');

  if (acceptsHtml) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  event.respondWith(caches.match(request).then((cached) => cached || fetch(request)));
});

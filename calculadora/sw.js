self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('pwa-assets').then(cache => 
      {
        return cache.addAll([
          './index.html',
          './og-image.webp',
          './favicon-super-calculadora-con-almacenamiento.svg',
          './jquery_2.1.3_jquery.min.js',
          './favicon.svg',
          './jquery_2.1.3_jquery.min.js'
        ])
      })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

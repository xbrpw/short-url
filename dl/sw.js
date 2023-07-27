self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('pwa-assets').then(cache => 
        {
          return cache.addAll([        
            './index.html',
            './w3.css',      
            './jquery.min.js',
            './preloader.js',            
            './script.js',
            './image.webp',
            './favicon.svg'
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
  
  
  
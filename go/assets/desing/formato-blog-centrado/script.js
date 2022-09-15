var user = {
  hasIntersectionObserver: ('IntersectionObserver' in window),
  prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
}


var viewportWatch = {
  observer: null,
  config: {
    root: null,
    rootMargin: '0% 0% -20%',
    threshold: 0
  },
  documentReadyClass: 'has-intersection-observer',
  intersectionClass: '-has-intersected',
  entryIdentifier: '[data-view="on-scroll"]',
  entries: function() {
    return document.querySelectorAll(viewportWatch.entryIdentifier);
  },

  addDocumentReadyClass: function() {
    document.querySelector('html').classList.add(viewportWatch.documentReadyClass);
  },

  addIntersectionClass: function(entry) {
    entry.target.classList.add(viewportWatch.intersectionClass);
  },

  createObserver: function() {
    viewportWatch.observer = new IntersectionObserver(viewportWatch.intersectionHandler, viewportWatch.config);
  },

  addObserver: function() {
    viewportWatch.entries().forEach(entry => {
      viewportWatch.observer.observe(entry);
    });
  },

  removeObserver: function(entry) {
    viewportWatch.observer.unobserve(entry.target);
  },

  intersectionHandler: function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        viewportWatch.addIntersectionClass(entry);
        viewportWatch.removeObserver(entry);
      }
    });
  },

  initialise: function() {
    viewportWatch.addDocumentReadyClass();
    viewportWatch.createObserver();
    viewportWatch.addObserver();
  }
};


if (user.hasIntersectionObserver && !user.prefersReducedMotion) {
  viewportWatch.initialise();
}
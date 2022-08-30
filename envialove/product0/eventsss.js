var container = document.querySelector('.article-container');
var msnry = new Masonry( container, {
  // options
  itemSelector: '.article-brick',
  gutter: 9,
  isResizeBound: false
});
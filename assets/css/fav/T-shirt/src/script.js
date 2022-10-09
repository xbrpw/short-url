// click on t-shirt to change pattern.
// to change the picture manually, replace the value in html 45deg with your own.

document.body.addEventListener('click', function(e) {
  e.target.update && e.target.update();
});
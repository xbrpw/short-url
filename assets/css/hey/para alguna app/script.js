/*
found this function here 
http://stackoverflow.com/a/26831113
*/

function inViewport($el) {
    var H = $(window).height(),
        r = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? H-t : (b<H?b:H));  
}

$(window).on("scroll resize", function(){
  var window_offset = inViewport($('.hero')); 
  $(".hero-overlay").height(window_offset);
});








// this script is by Gianluca Pirrera
// http://pirrera.ch/
// source > https://codepen.io/pirrera/details/rayoLW/
// just added "-(10)" on line 41 to hide the nav item underline

;(function(document, window, index) {
  'use strict';

  var elSelector = '.header',
  element = document.querySelector(elSelector);

  if (!element) return true;

  var elHeight = 0,
  elTop = 0,
  dHeight = 0,
  wHeight = 0,
  wScrollCurrent = 0,
  wScrollBefore = 0,
  wScrollDiff = 0;

  window.addEventListener('scroll', function() {
    elHeight = element.offsetHeight;
    dHeight = document.body.offsetHeight;
    wHeight = window.innerHeight;
    wScrollCurrent = window.pageYOffset;
    wScrollDiff = wScrollBefore - wScrollCurrent;
    elTop = parseInt(window.getComputedStyle(element).getPropertyValue('top')) + wScrollDiff;

    if (wScrollCurrent <= 0)
    element.style.top = 'px';

    else if (wScrollDiff > 0)
    element.style.top = (elTop > 0 ? 0 : elTop) + 'px';

    else if (wScrollDiff < 0) {
      if (wScrollCurrent + wHeight >= dHeight - elHeight)
      element.style.top = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + 'px';

      else
      element.style.top = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + 'px';
    }

    wScrollBefore = wScrollCurrent;
  });

}(document, window, 0));
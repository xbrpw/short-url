$('.arrow').on('click', function() {
  var target = $(this).parent().parent().next();
  $('html, body').stop().animate({
    'scrollTop': target.offset().top
  }, 600, 'swing');
});

$('.back-to-top').on('click', function() {
  $('html, body').stop().animate({
    'scrollTop': 0
  }, 900, 'linear');
});
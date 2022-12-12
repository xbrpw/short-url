$( ".open" ).click(function() {
  $(".front").addClass('flipt');
  $(".back").addClass('unflipt');
  $("body").addClass('overlay');
});

$( ".close" ).click(function() {
  $(".front").removeClass('flipt');
  $(".back").removeClass('unflipt');
  $("body").removeClass('overlay');
});
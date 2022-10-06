$('#dektop').click(function() {
   $('div').removeAttr('class');
  $('div').addClass('dektop');
  $('html').css("background","#9b59b6");
});

$('#tablet').click(function() {
   $('div').removeAttr('class');
  $('div').addClass('tablet');
  $('html').css("background","#3498db");
});

$('#mobile').click(function() {
   $('div').removeAttr('class');
  $('div').addClass('mobile');
  $('html').css("background","#1abc9c");
});
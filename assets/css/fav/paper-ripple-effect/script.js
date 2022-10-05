$(document).ready(function() {
   $(".paper").mousedown(function(e) {
      var ripple = $(this).find(".ripple");
      ripple.removeClass("animate");
      var x = parseInt(e.pageX - $(this).offset().left) - (ripple.width() / 2);
      var y = parseInt(e.pageY - $(this).offset().top) - (ripple.height() / 2);
      ripple.css({
         top: y,
         left: x
      }).addClass("animate");
   });
});
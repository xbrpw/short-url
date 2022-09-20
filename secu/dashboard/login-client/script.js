$(".fs-modal-trigger").click(function() {
 
  
  $('.fs-modal').removeClass('fs-reverse').addClass("fs-activate");


});
$(".fs-modal .fs-close").click(function() {
 
 
  $('.fs-modal').addClass('fs-reverse');
  
  setTimeout(function(){
    $('.fs-modal').removeClass('fs-activate');
  },450);

});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    // escape key maps to keycode `27`
   $('.fs-modal').addClass('fs-reverse');
  
  setTimeout(function(){
    $('.fs-modal').removeClass('fs-activate');
  },850);
    //$(".global-cta").removeClass("active");
  }
});
var $trigger = $('.mobile-accordion-multiplesteps a');

$trigger.on('click', function(){

  // if already active
  if( $(this).hasClass('active') ) {
    $(this).removeClass('active').next('ul').slideUp();
    $(this).parent('li').siblings('li').slideDown();
  } else {
    
    // if inactive
    if( $(this).siblings('ul').length ) {
      $(this).addClass('active').next('ul').slideDown();
      $(this).parent('li').siblings('li').slideUp();
    }
    
  }
  
});
var $sheet = $('.mdl-sheet');

if($sheet.length > 0) {
  $('html').on('click', function() {
    $sheet.removeClass('mdl-sheet--opened')  
  });
  
  $sheet.on('click', function(event) {
    event.stopPropagation();
    
    $sheet.addClass('mdl-sheet--opened');
  });
}
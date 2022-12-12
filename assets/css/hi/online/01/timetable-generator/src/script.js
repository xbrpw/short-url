(function(){
    $('ul.day-picker li').on('click', function(){
        $(this).toggleClass('day-selected');
    });
  
    $('ul.color-picker li').on('click', function(){
        $('.color-selected').removeClass('color-selected');
        $(this).addClass('color-selected');
    });
}(jQuery));
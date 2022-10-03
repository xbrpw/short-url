$(document).ready(function(){
    
    // Function for nav bar
    // It sets the size of the hovered link and the links around it
    // It also moves the white-bar around.
    $('.bar-button').hover(function(){
        $('.bar-button').css('width', '16.66666%');
        $(this).css('width', '33.33333%');
        if($(this).hasClass('one')) {$('.white-bar').css('left', '0%')}
        else if($(this).hasClass('two')) {$('.white-bar').css('left', '16.66666%')}
        else if($(this).hasClass('three')) {$('.white-bar').css('left', '33.33333%')}
        else if($(this).hasClass('four')) {$('.white-bar').css('left', '50%')}
        else if($(this).hasClass('five')) {$('.white-bar').css('left', '66.666666%')};
    }, function(){
        $('.white-bar').css('left', '-33.333333%');
        $('.bar-button').css('width', '20%');
    });
    
});
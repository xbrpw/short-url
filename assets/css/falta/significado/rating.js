$(document).ready(function() {
    $('[data-toggle="tooltip "]').tooltip();
});

$(document).ready(function() {
    $('.toast').toast('show');
});

$(document).ready(function() {
    $('[data-toggle="popover "]').popover();
});


$('.ui.rating').rating({
    initialRating: 3,
    maxRating: 5
});

$(document).ready(function() {
    $('.toast').toast('show');
});

$(document).ready(function() {
    $('.toast').toast({
        autohide: false
    });
    $('.toast').toast('show');
});
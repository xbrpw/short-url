$(document).ready(function() {
    $(window).on('load scroll resize', function() {

        var docHeight = $(document).height();
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var completion = windowPos / (docHeight - windowHeight);

        if (docHeight <= windowHeight) {
            $('#progress').width(windowWidth);
        } else {
            $('#progress').width(completion * windowWidth);
        }

    });
});
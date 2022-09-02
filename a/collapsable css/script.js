$('[data-target]').on('click', function(e) {
    e.preventDefault();
    var target_selector = $(this).data('target');
    var target_element = $(target_selector);

    if (target_element.css('paddingTop') == '0px')
        target_element.css({paddingTop: '1px'});

    if (target_element.css('paddingBottom') == '0px')
        target_element.css({paddingBottom: '1px'});

    target_element.slideToggle(500);
});
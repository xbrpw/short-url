function checkWindowSize() {
    if ( jQuery(window).width() >= 1200 ) {
        $('.truncate').succinct({
            size: 400
        });  
    }
    else if ( jQuery(window).width() >= 992 ) {
        $('.truncate').succinct({
            size: 200
        }); 
    }
    else if ( jQuery(window).width() >= 768 ) {
        $('.truncate').succinct({
            size: 80
        }); 
    }
    else if ( jQuery(window).width() >= 480 ) {
        $('.truncate').succinct({
            size: 120
        }); 
    }
    else if ( jQuery(window).width() >= 320 ) {
        $('.truncate').succinct({
            size: 80
        }); 
    }
    else {
        $('.truncate').succinct({
            size: 55
        }); 
    }  
}

jQuery(document).ready(function(){
    jQuery(window).resize(checkWindowSize);
    checkWindowSize();
});
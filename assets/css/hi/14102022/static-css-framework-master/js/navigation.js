/*
$(document).ready(function() {
	var globalHeader = $('.global__header').outerHeight() + 30;

	$('a[href*=#]').bind('click', function(e) {
		e.preventDefault();	
		var target = $(this).attr("href");
		var	offsetTop = target === "#" ? 0 : $(target).offset().top - globalHeader;

		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 200);

		return false;
	});
});

$(window).scroll(function() {
	var scrollDistance = $(window).scrollTop() + 40;
	$('.global__section').each(function(i) {
		if ($(this).position().top <= scrollDistance) {
			$('.global__nav li a.is-active').removeClass('is-active');
			$('.global__nav li a').eq(i).addClass('is-active');
		}
	});
}).scroll();*/
/*

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('is-active');
        })
        $(this).addClass('is-active');

        var globalHeader = $('.global__header').outerHeight() + 30;
		var target = $(this).attr("href");
		var	offsetTop = target === "#" ? 0 : $(target).offset().top - globalHeader;

		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 200, 'swing', function () {
            //window.location.hash = target;
            $(document).on("scroll", onScroll);
        });

      	/*
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 200, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
        
    });
});
*/
/*
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navigation a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navigation ul li a').removeClass("is-active");
            currLink.addClass("is-active");
        }
        else{
            currLink.removeClass("is-active");
        }
    });
}
*/



/*

$(document).ready(function() {
    
    var globalHeader = $('.navbar').outerHeight() + 30;

    var globalMain = $('.glmain').css('padding-top', globalHeader);

    
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); 
        var target = $(this).attr("href");
        var offsetTop = target === "#" ? 0 : $(target).offset().top - globalHeader;

        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 200);

        return false;
    });
    
    $(window).bind('scroll', function(){

        var currentTop = $(window).scrollTop() + globalHeader;

        console.log(currentTop);
        var elems = $('.scrollspy');        
        elems.each(function(index){
            var elemTop   = $(this).offset().top;
            var elemBottom    = elemTop + $(this).height();

            console.log(elemTop);
            
            if(currentTop >= elemTop && currentTop <= elemBottom){
                var id      = $(this).attr('id');
                var navElem = $('a[href="#' + id+ '"]');
                navElem.parent().addClass('active').siblings().removeClass( 'active' );
            }


        });           
    });
});*/







$(document).ready(function() {
    
    var globalHeader = $('.global__header').outerHeight(),
        globalHeaderPlus = $('.global__header').outerHeight() + 30;

    var globalMain = $('.global__main').css('margin-top', globalHeader);

    
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); 
        var target = $(this).attr("href");
        var offsetTop = target === "#" ? 0 : $(target).offset().top - globalHeaderPlus;

        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 200);

        return false;
    });
    
    $(window).bind('scroll', function(){

        var currentTop = $(window).scrollTop() + globalHeaderPlus + 10;

        var elems = $('.global__section');        
        elems.each(function(index){
            var elemTop   = $(this).offset().top;
            var elemBottom    = elemTop + $(this).height();
            
            if(currentTop >= elemTop && currentTop <= elemBottom){
                var id      = $(this).attr('id');
                var navElem = $('a[href="#' + id+ '"]');
                navElem.parent().addClass('is-active').siblings().removeClass('is-active');
            }


        });           
    });
    

    var thumb = $('.thumbnail');

    thumb.each(function(index) {
        console.log(index);
    });

});







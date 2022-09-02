//target the entire page, and listen for touch events
$("html, body").on("touchstart touchmove", function(e) {
	//prevent native touch activity like scrolling
	e.preventDefault();
});

var $carousel = $(".carousel").flickity({
	//autoPlay: 3000,
	//pauseAutoPlayOnHover: false,
	//freeScroll: true,
	wrapAround: true,
	prevNextButtons: true,
	 lazyLoad: true,
	bgLazyLoad: 1
	// selectedAttraction: 0.3,
	//friction: 0.6
});

$carousel.on( 'lazyLoad.flickity', function( event, cellElement ) {
  var img = event.originalEvent.target;
  //console.log( event.originalEvent.type, img.src );
});

$carousel.on( 'bgLazyLoad.flickity', function( event, cellElement ) {
  var img = event.originalEvent.target;
  //console.log( event.originalEvent.type, img.src );
});

//  var $carousel = $('.carousel').flickity();
//  var flkty = $carousel.data('flickity');

//  $carousel.on( 'settle.flickity', function() {
//    console.log( 'Flickity settled at ' + flkty.selectedIndex );
//  });

// external js: flickity.pkgd.js

var $carousel = $('.carousel').flickity({
  initialIndex: 1
});
var $logger = $('.logger');

$carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
  // dismiss if cell was not clicked
  if ( !cellElement ) {
    return;
  }
  // change cell background with .is-clicked
  $carousel.find('.is-clicked').removeClass('is-clicked');
  $( cellElement ).addClass('is-clicked');
  //$logger.text( 'Cell ' + ( cellIndex + 1 )  + ' clicked' );
	  console.log( 'Cell ' + ( cellIndex + 1 )  + ' clicked' );


});
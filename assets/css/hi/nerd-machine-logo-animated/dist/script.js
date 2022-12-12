// Needs refactoring so it isn't so redundant.


// -------------------------------------
// TADA
// -------------------------------------
$('#tada').click(function() {
	$(".head").attr("class", "head is-ready");

	$(".head").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {
			$(".head").attr("class", "head");
		});
});



// ------------------------------------
// COOL DUDE - SUNNIES SHIMMER
// ------------------------------------
$('#cool').click(function() {
	
	if ( $('body').hasClass('noir') ) {
		$(".shine1").attr("class", "shine1 noir cool-dude");
		$(".shine2").attr("class", "shine2 noir cool-dude");
	} else {
		$(".shine1").attr("class", "shine1 cool-dude");
		$(".shine2").attr("class", "shine2 cool-dude");
	}
	
	$(".shine1").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {
			$(".shine1").attr("class", "shine1");
		});

	$(".shine2").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {
			$(".shine2").attr("class", "shine2");
		});
});



// ------------------------------------
// DISCO
// ------------------------------------
$('#disco').click(function() {
	$(".head").attr("class", "head disco");
	$(".glasses").attr("class", "glasses disco");
	$(".face1").attr("class", "face1 disco");
	$(".face2").attr("class", "face2 disco");
	
	$('#nodisco').fadeIn();
	
	$('#noir').fadeOut();
});

$('#nodisco').click(function() {

	$('.disco-msg').addClass('show');

	
	setTimeout(function() {
	
		$('.disco-msg__text').html('<h1>Oh alright then, just for you.</h1>');
		
		setTimeout(function() {
			$('.disco-msg').removeClass('show');

			$(".head").attr("class", "head");
			$(".glasses").attr("class", "glasses");
			$(".face1").attr("class", "face1");
			$(".face2").attr("class", "face2");
			
			$('.disco-msg__text').html("<h1>I'm sorry, Disco is forever!</h1>");
			
			$('#nodisco').fadeOut();
			$('#noir').fadeIn();

		}, 2000);
	}, 2000);
});

// ------------------------------------
// NIOR
// ------------------------------------
$('#noir').click(function() {
	$(".shine1").attr("class", "shine1 noir");
	$(".shine2").attr("class", "shine2 noir");
	$(".face1").attr("class", "face1 noir");
	$(".face2").attr("class", "face2 noir");
	$(".glasses").attr("class", "glasses noir");
	$(".outerring").attr("class", "outerring noir");
	$("body").attr("class", "noir");
	
	$('#disco').fadeOut();
	
	setTimeout(function() {
		$('.noir-msg').addClass('show');
		setTimeout(function() {
			$('.noir-msg').removeClass('show');

			$(".shine1").attr("class", "shine1");
			$(".shine2").attr("class", "shine2");
			$(".face1").attr("class", "face1");
			$(".face2").attr("class", "face2");
			$(".glasses").attr("class", "glasses");
			$(".outerring").attr("class", "outerring");
			$("body").attr("class", "");
			
			$('#disco').fadeIn();

		}, 2000);
	}, 3000);
});
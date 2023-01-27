var myAnimation = new hoverEffect({
	parent: document.querySelector(".canvas-container"),
	// intensity: 0.3,
	intensity1: 0.4,
	intensity2: 0.4,
	image1: "https://robindelaporte.fr/codepen/surf1.jpg",
	image2: "https://robindelaporte.fr/codepen/surf2.jpg",
	image3: "https://robindelaporte.fr/codepen/surf1.jpg",
	image4: "https://robindelaporte.fr/codepen/surf2.jpg",
	displacementImage: "https://robindelaporte.fr/codepen/12.jpg",
	angle1: -1,
	angle2: -1
});

var tl = new TimelineMax();
var playTimeline = function(){
	//tl.restart();
	tl.to(document.querySelector('.canvas-container'), 0.4, {
			webkitFilter: 'blur(2px)',
			filter: 'blur(2px)'
	});
	tl.to(document.querySelector('.canvas-container'), 0.4, {
			webkitFilter: 'blur(0px)',
			filter: 'blur(0px)'
	});
};

var one = document.querySelector(".one");
var two = document.querySelector(".two");

document.querySelector(".canvas-container").addEventListener('mouseenter', function(){
	playTimeline();
	TweenMax.to(one, 1.1, {x: '-100%', ease: Expo.easeOut});
	TweenMax.to(two, 1.1, {x: '0%', ease: Expo.easeOut});
})

document.querySelector(".canvas-container").addEventListener('mouseleave', function(){
	playTimeline();
	TweenMax.to(one, 1.1, {x: '0%', ease: Expo.easeOut});
	TweenMax.to(two, 1.1, {x: '100%', ease: Expo.easeOut});
})

var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

prev.addEventListener('click', myAnimation.previous);
next.addEventListener('click', myAnimation.next);
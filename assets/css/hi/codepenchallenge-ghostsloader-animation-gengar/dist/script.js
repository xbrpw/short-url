const tl = gsap.timeline({
	repeatRefresh: true,
	repeat: -1
});

tl.to(".gengar", {
	y: -50,
	ease: "sine.inOut",
	duration: 0.4,
	stagger: {
		each: 0.03,
		from: "start",
		repeat: 1,
		yoyo: true
	}
});

// slides

var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("myLoader");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1;
	}
	x[myIndex - 1].style.display = "block";
	setTimeout(carousel, 800);
}
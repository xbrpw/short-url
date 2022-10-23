const tl = gsap.timeline({
	repeatRefresh: true,
	repeat: -1
});

tl.to(".pumpkin", {
	y: -40,
	ease: "sine.inOut",
	duration: 0.4,
	stagger: {
		each: 0.03,
		from: "start",
		repeat: 1,
		yoyo: true
	}
});

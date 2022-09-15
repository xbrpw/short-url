let mm = gsap.matchMedia();

mm.add("(prefers-color-scheme: dark)", (context) => {
	gsap.to(".light", {
		opacity: 0,
		duration: 2,
		ease:
			"rough({ strength: 2, points: 50, template: none.out, taper: out, randomize: true, clamp: false })"
	});
});

mm.add("(prefers-color-scheme: light)", (context) => {
	const tl = gsap.timeline();

	tl.from("#bulb", {
		drawSVG: 0,
		duration: 4
	});

	tl.from("line.light", {
		drawSVG: 0,
		stagger: 0.1,
		duration: 1
	});
});
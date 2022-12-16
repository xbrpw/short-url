var splitText = new SplitText('h1', {type: 'chars'});

var tl = gsap.timeline();


tl
	.from(splitText.chars, {duration: .5, opacity: 0, stagger: .125,  ease: 'power1. In'})
	.to(splitText.chars, {duration: .25, opacity: 0, stagger: .125,  ease: 'power3. inOut'}, '+=3');
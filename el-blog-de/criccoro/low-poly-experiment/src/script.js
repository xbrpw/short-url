let select = s => document.querySelector(s),
  	selectAll = s => document.querySelectorAll(s),
		mainSVG = select('.mainSVG'),
		liquid = select("#liquid"),
		pointArray = [],
		pointValueXArray = [],
		pointValueYArray = [],
		liquidWidth = 300,
		numPoints = 30,
		dripOffset = 0.0258,
		rippleDuration = 4.6,
		rippleAmount = '+=8',
		startValX = 250,
		startValY = 400,
		colorArray = ['#E6098B', '#FFBE0B', '#FB5607', '#8338EC', '#3A86FF', '#51E5FF', '#04A777', '#F75C03', '#F71735'],
		allBubbles = gsap.utils.toArray('#bubbleGroup rect')

gsap.set(mainSVG, {
	visibility: 'visible'
})
gsap.set('.darkLiquid', {
	scaleX: -1,
	transformOrigin: '50% 50%'
})
for(let i = 0; i < numPoints; i++) {
	let p =	liquid.points.appendItem(mainSVG.createSVGPoint());
	pointArray.push(p);
	pointValueXArray.push( (i < numPoints - 2) ? startValX : ( i == numPoints - 2 ) ? 600 : 200 );
	startValX += ( liquidWidth / (numPoints-2) );	
	pointValueYArray.push( (i < numPoints - 2) ? startValY : 800 )
}

gsap.set(pointArray, {
	x: gsap.utils.wrap(pointValueXArray),
	y: gsap.utils.wrap(pointValueYArray)
})

gsap.set('#level', {
	transformOrigin: '50% 100%'
})
gsap.set('#bubbleGroup rect, #droplet', {
	transformOrigin: '50% 50%'
})
gsap.fromTo(allBubbles, {
	x: 'random(0, 200)',
	y: 'random(0, 120)',
	scale:'random(0.5, 3)',
	rotation: 'random(20, 180)',
	opacity: 1
}, {
	duration: 1,
	rotation: 'random(180, 360)',
	repeatRefresh: true,
	stagger: {
		each: 0.52,
		repeat: -1
	},
	scale: 0.1,
	y: '-=30',
	opacity: 0.1,
}).seek(100)

const makeDrip = () => {

	let currentColor = gsap.utils.random(colorArray);
	gsap.to(':root', {'--main-color': currentColor});
	
	let tl = gsap.timeline({
		defaults: {
			ease: CustomWiggle.create('', {type: 'easeOut', wiggles: gsap.utils.random(9, 12)})
		}
	});

	tl.fromTo('#pipette1', {
		x: 600,
		opacity: 0
	}, {
		duration: 1,
		x: 376,
		opacity: 1,
		ease: 'expo.inOut'
	})
.fromTo('#pipette1', {
		rotation: -95,
		transformOrigin: '50% 100%'
	}, {
		rotation: 0,
		transformOrigin: '50% 100%',
		duration: 1.5,
		ease: 'elastic(1.5, 0.83)'
	}, 0)
		.addLabel('pipetteReady')
		.fromTo('#drip', {
		scale: 0
	}, {
		duration: 1,
		scale: 1,
		transformOrigin: '50% 0%',
		ease: 'elastic(1, 0.8)'
	})
	.to('#level', {
		duration: 1,
		scaleY: 0.5,
		ease: 'elastic(1, 0.8)'
	},'pipetteReady')
		.fromTo('#drip', {
			x: 399,
			y: 155
		}, {
			x: 399,
			y: 430,
			duration: 0.38,
			ease: 'power1.in'
	})
		.addLabel('splash')
		.to('.poly', {
			fill:currentColor,
		ease: 'sine'
	}, 'splash')
		.to('#bubbleGroup', {
			stroke:currentColor,
			ease: 'sine'
	}, 'splash')
	.to(pointArray, {
		duration: gsap.utils.random(3, 5),
		y: (i) => {
			return rippleAmount
		},
		stagger: {
			each: dripOffset,
			from: 'center'
		},
	}, 'splash')	
	.to('#bubbleGroup', {
		duration: 4,
		y: '+=random(5, 10)',
		ease: 'wiggle({type:easeOut, wiggles:10})'
	}, 'splash')
	.to('#droplet', {
		duration: 0.23,
		y: 'random(-30, -60, 1)',
		rotation: 'random(20, 290)',
		ease: 'power1',
	}, 'splash')	
.to('#droplet', {
		duration: 0.23,
		y:0,
		rotation: '+=30',
		ease: 'power1.in',
	}, 'splash+=0.23')	
	.fromTo('#droplet', {
		scale: 1
	}, {
		duration: 0.23,
		scale: 0,
		transformOrigin: '50% 100%',
		ease: 'expo.in'	
	}, 'splash+=0.23')	
	.to('#level', {
		duration: 1,
		scaleY: 1,
		ease: 'expo.in'
	}, 'splash')	
	.to('#pipette1', {
		duration: 1,
		rotation: 23,
		x: 100,
		opacity: 0,
		ease: 'expo.in'
	}, 'splash')	
	
	gsap.delayedCall(4, makeDrip);
}

makeDrip()

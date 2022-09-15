console.clear();

const { gsap } = window;

Splitting();

const button = document.querySelector("button");

button.addEventListener("click", send);

function send() {
	gsap.set(button, {
		pointerEvents: "none",
	});

	let buttonTl = gsap.timeline({ ease: "Power4.in" });
	buttonTl
		.to(".icon.send", {
		duration: 0.25,
		opacity: 0,
		translateX: "100%",
		translateY: "-100%",
	})
		.to(button, {
		duration: 0.35,
		scale: 0.9,
	})
		.to(".inner", {
		duration: 0.4,
		delay: -0.3,
		width: "150%",
		height: "150%",
		left: "50%",
		borderRadius: "0.5rem",
	})
		.to(".send-text", {
		duration: 0.4,
		delay: -0.4,
		translateX: "150%",
	})
		.to("body", {
		duration: 0.25,
		delay: -0.1,
		backgroundColor: "#fff",
	})
		.call(sending);
}

function sending() {
	let c = 0;
	let repeat = 2;

	let sendingTl = gsap.timeline({ repeat });
	sendingTl
		.to(".sending-text .char", {
		duration: 0.35,
		stagger: -0.05,
		left: "70%",
	})
		.to(".sending-text.__1 .char", {
		delay: 0.3,
		duration: 0.35,
		stagger: -0.05,
		left: "140%",
	})
		.to(".sending-text.__2 .char", {
		delay: -0.3,
		duration: 0.35,
		stagger: -0.05,
		left: "140%",
	})
		.to(".sending-text.__2 .char", {
		delay: 0.3,
		duration: 0.35,
		stagger: -0.05,
		left: "210%",
	})
		.call(() => {
		if (c == repeat) delivered();
		c++;
	});
}

function delivered() {
	let deliveredTl = gsap.timeline();
	deliveredTl
		.to(".inner", {
		duration: 0.3,
		width: "28px",
		height: "28px",
		left: "18%",
		borderRadius: "50%",
	})
		.fromTo(
		".delivered-text",
		{
			opacity: 0,
			translateY: "15%",
		},
		{
			duration: 0.3,
			opacity: 1,
			translateY: "0%",
		}
	)
		.to(".checkmark__check", {
		duration: 0.25,
		strokeDashoffset: 0,
	})
		.to("body", {
		duration: 0.25,
		delay: -0.55,
		backgroundColor: "rgb(255, 115, 72)",
	})
		.call(() => {
		setTimeout(() => {
			reset();
		}, 1000);
	});
}

function reset() {
	let resetTl = gsap.timeline();

	resetTl
		.to(".delivered-text", {
		duration: 0.25,
		opacity: 0,
		translateY: "-10%",
	})
		.fromTo(
		".send-text",
		{
			opacity: 0,
			translateY: "10%",
			left: "52%",
			translateX: "0%",
		},
		{
			delay: -0.1,
			duration: 0.25,
			opacity: 1,
			translateY: "-50%",
		}
	)
		.to(
		".checkmark__check",
		{
			duration: 0.25,
			strokeDashoffset: 48,
		},
		"-=.25"
	)
		.fromTo(
		".icon.send",
		{
			opacity: 0,
			translateX: "-100%",
			translateY: "100%",
		},
		{
			duration: 0.25,
			opacity: 1,
			translateX: "0%",
			translateY: "0%",
		}
	)
		.to(button, {
		duration: 0.5,
		scale: 1,
		ease: "bounce.out",
	})
		.set(".sending-text .char", {
		left: "0",
	})
		.set(button, {
		pointerEvents: "all",
	});
}

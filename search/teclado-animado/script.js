console.clear();

const { gsap } = window;

class SVGElement {
	constructor(element) {
		this.element = element;
	}
	set(attributeName, value) {
		this.element.setAttribute(attributeName, value);
	}

	style(property, value) {
		this.element.style[property] = value;
	}
}

class App {
	constructor(word) {
		this.svg = this.selectSVG("svg");
		this.text = document.getElementById("text");
		this.offscreenText = document.getElementById("offscreen-text");
		this.input = document.getElementById("input");
		this.input.value = "";
		this.button = document.getElementById("btn");
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.textSize = 0;
		this.textCenter = 0;
		this.letters = [];
		this.prompt = word.split("");
		this.runPrompt = true;
		this.colorPalettes = [
			{
				background: "#00121a",
				palettes: ["#00F3FE", "#006FFE", "#693DFE", "#FFFDFF"]
			},
			{
				background: "#264653",
				palettes: ["#2a9d8f", "#f4a261", "#e76f51", "#FFFDFF"]
			},
			{
				background: "#1d3557",
				palettes: ["#e63946", "#457b9d", "#a8dadc", "#FFFDFF"]
			},
			{
				background: "#000000",
				palettes: ["#14213d", "#fca311", "#e5e5e5", "#ffffff"]
			},
			{
				background: "#3d405b",
				palettes: ["#e07a5f", "#81b29a", "#f2cc8f", "#FFFDFF"]
			},
			{
				background: "#9b5de5",
				palettes: ["#00bbf9", "#00f5d4", "#fee440", "#FFFDFF"]
			},
			{
				background: "#22223b",
				palettes: ["#4a4e69", "#9a8c98", "#c9ada7", "#f2e9e4"]
			},
			{
				background: "#114b5f",
				palettes: ["#1a936f", "#88d498", "#c6dabf", "#f3e9d2"]
			}
		];
		this.letterStaggerCount = 4;
	}

	init() {
		this.selectRandomPallete();
		this.resizePage();
		window.addEventListener("resize", this.resizePage.bind(this));
		this.input.addEventListener("keyup", this.keyup.bind(this));
		this.button.addEventListener("click", this.selectRandomPallete.bind(this));
		this.input.focus();
		this.addPrompt(0);
	}

	selectSVG(id) {
		const el = document.getElementById(id);
		return new SVGElement(el);
	}

	addLetter(char, i, n) {
		const letterEl = document.createElement("span");
		const oLetter = document.createElement("span");
		oLetter.innerHTML = char;
		this.offscreenText.appendChild(oLetter);
		this.letters[i] = { offScreen: oLetter, onScreen: letterEl, char: char };
		for (let j = 0; j < n; j++) {
			const span = document.createElement("span");
			span.innerHTML = char;
			letterEl.appendChild(span);
			text.appendChild(letterEl);
			span.style.color = this.colors[j % this.colors.length];
		}
		this.animateLetterIn(letterEl, () => {
			this.addDecor(oLetter);
		});
	}

	addLetters(value) {
		value.forEach((char, i) => {
			if (this.letters[i] && this.letters[i].char !== char) {
				this.letters[i].onScreen.innerHTML = char;
				this.letters[i].offScreen.innerHTML = char;
				this.letters[i].char = char;
			}
			if (this.letters[i] === undefined) {
				this.addLetter(char, i, this.letterStaggerCount);
			}
		});
	}

	addDecor(letter) {
		setTimeout(() => {
			const x = letter.offsetLeft + letter.offsetWidth / 2;
			const y = this.textCenter + this.textSize * 0.5;
			for (var i = 0; i < 24; i++) {
				let rand = Math.random();
				let color = this.colors[Math.floor(Math.random() * this.colors.length)];
				let svgDefaults = {
					parentSVG: this.svg,
					color,
					position: {
						x,
						y
					},
					textSize: this.textSize
				};
				if (rand < 0.3)
					new SVGShape({
						type: "circle",
						...svgDefaults
					});
				else if (rand > 0.3 && rand <= 0.6)
					new SVGShape({
						type: "triangle",
						...svgDefaults
					});
				else
					new SVGShape({
						type: "rect",
						...svgDefaults
					});
			}
		}, 100);
	}

	removeLetters(value) {
		for (let i = this.letters.length - 1; i >= 0; i--) {
			const letter = this.letters[i];
			if (value[i] === undefined) this.animateLetterOut(letter, i);
		}
	}

	resizePage() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.svg.set("height", this.height);
		this.svg.set("width", this.width);
		this.svg.set("viewBox", `0 0 ${this.width} ${this.height}`);
		this.resizeLetters();
	}

	resizeLetters() {
		this.textSize = this.width / (this.letters.length + 2);
		if (this.textSize > 100) this.textSize = 100;
		this.text.style.fontSize = `${this.textSize}px`;
		this.text.style.height = `${this.textSize}px`;
		this.text.style.lineHeight = `${this.textSize}px`;
		this.offscreenText.style.fontSize = `${this.textSize}px`;
		const textRect = text.getBoundingClientRect();
		this.textCenter = textRect.top + textRect.height / 2;
		this.positionLetters();
	}

	positionLetters() {
		this.letters.forEach((letter) => {
			gsap.to(letter.onScreen, 0.1, {
				x: letter.offScreen.offsetLeft + "px",
				ease: Power3.easeInOut
			});
			letter.shift = true;
		});
	}

	animateLetterIn(letter, callback) {
		const randomRotationDirection = Math.random() < 0.5 ? "-" : "+";
		let tl = gsap.timeline({
			ease: "elastic.inOut",
			defaults: {
				stagger: -0.0125
			}
		});
		const childs = letter.querySelectorAll("span");
		gsap.set(childs, { translateY: "100%" });
		tl.to(childs, {
			keyframes: [
				{
					duration: 0.07,
					translateY: "120%",
					rotation: 0
				},
				{
					duration: 0.1,
					translateY: "-180%",
					rotation: randomRotationDirection + 60
				},
				{
					duration: 0.1,
					translateY: "-200%",
					rotation: randomRotationDirection + 120
				},
				{
					duration: 0.06,
					translateY: "-200%",
					rotation: randomRotationDirection + 240
				},
				{
					duration: 0.06,
					translateY: "-200%",
					rotation: randomRotationDirection + 300,
					onComplete: callback
				},
				{
					duration: 0.1,
					translateY: "10%",
					rotation: randomRotationDirection + 360
				},
				{
					duration: 0.05,
					translateY: "0%",
					rotation: randomRotationDirection + 360
				},
				{
					duration: 0,
					rotation: 0
				}
			]
		});
	}

	animateLetterOut(letter, i) {
		gsap.to(letter.onScreen.querySelectorAll("span"), 0.45, {
			translateY: "150%",
			rotation: -60 + Math.random() * 100,
			opacity: 0,
			scale: 0,
			ease: Power2.easeOut,
			stagger: 0.015,
			onComplete: () => {
				this.offscreenText.removeChild(letter.offScreen);
				this.text.removeChild(letter.onScreen);
				this.positionLetters();
			}
		});
		this.letters.splice(i, 1);
	}

	selectRandomPallete() {
		this.colorPalettesIndex = Math.floor(
			Math.random() * this.colorPalettes.length
		);
		this.colors = this.colorPalettes[this.colorPalettesIndex].palettes;
		document.documentElement.style.setProperty(
			"--bg",
			this.colorPalettes[this.colorPalettesIndex].background
		);
		this.changeTextPallete();
	}

	changeTextPallete() {
		if (this.letters.length != 0) {
			for (let i = 0; i < this.letters.length; i++) {
				const childs = [...this.letters[i].onScreen.children];
				childs.forEach((child, index) => {
					child.style.color = this.colors[index % this.colors.length];
				});
			}
		}
	}

	onInputChange() {
		const value =
			this.input.value === "" ? [] : this.input.value.toUpperCase().split("");
		this.addLetters(value);
		this.removeLetters(value);
		this.resizeLetters();
	}

	keyup() {
		if (this.runPrompt) {
			this.input.value = "";
			this.runPrompt = false;
		}
		this.onInputChange();
	}

	addPrompt(i) {
		setTimeout(() => {
			if (this.runPrompt && this.prompt[i]) {
				this.input.value = this.input.value + this.prompt[i];
				this.onInputChange();
				this.addPrompt(i + 1);
			}
		}, 150);
	}
}

class SVGShape {
	constructor(options) {
		this.parentSVG = options.parentSVG;
		this.type = options.type;
		this.svgType = this.returnSvgType(this.type);
		this.textSize = options.textSize;
		this.size = options.textSize * 0.05;
		this.position = options.position;
		this.color = options.color;
		this.addShape();
	}

	createSVG(type) {
		const el = document.createElementNS("http://www.w3.org/2000/svg", type);
		return new SVGElement(el);
	}

	returnSvgType(type) {
		if (type === "rect") return "rect";
		if (type === "triangle") return "polygon";
		if (type === "circle") return "circle";
	}

	createShape() {
		const svg = this.createSVG(this.svgType);
		if (this.type === "triangle") {
			svg.set("points", `0,0 ${this.size * 2},0 ${this.size},${this.size * 2}`);
			svg.style("fill", this.color);
		} else if (this.type === "circle") {
			svg.set("r", this.size);
			svg.style("fill", this.color);
		} else if (this.type === "rect") {
			svg.set("height", this.size);
			svg.set("width", this.size);
			svg.style("fill", this.color);
		}
		return svg;
	}

	addShape() {
		const randomRatio = Math.random();
		const initialRadius = this.textSize * 0.15;
		const finalRadius = initialRadius + this.textSize * 0.6;
		const scale = 0.3 + Math.random() * 0.6;
		const offset = this.size * scale;
		const initialPosition = {
			x:
				this.position.x + initialRadius * Math.cos(-Math.PI * randomRatio) - offset,
			y:
				this.position.y + initialRadius * Math.sin(-Math.PI * randomRatio) - offset
		};
		const finalPosition = {
			x: this.position.x + finalRadius * Math.cos(-Math.PI * randomRatio) - offset,
			y: this.position.y + finalRadius * Math.sin(-Math.PI * randomRatio) - offset
		};
		this.shape = this.createShape();
		this.parentSVG.element.appendChild(this.shape.element);
		gsap.fromTo(
			this.shape.element,
			0.2 + Math.random() * 0.3,
			{
				rotation: Math.random() * 360,
				scale,
				x: initialPosition.x,
				y: initialPosition.y,
				opacity: 1
			},
			{
				x: finalPosition.x,
				y: finalPosition.y,
				opacity: 0,
				ease: Power1.easeInOut,
				onComplete: () => {
					this.parentSVG.element.removeChild(this.shape.element);
				}
			}
		);
	}
}

const app = new App("¡hola hola hola! Nada por aquí...por el momento.");
app.init();
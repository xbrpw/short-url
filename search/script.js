window.addEventListener("DOMContentLoaded",() => {
	const input = new TypingFireworks("#text");
});
class TypingFireworks {
	constructor(qs) {
		this.input = document.querySelector(qs);
		this.particles = 20;
		this.value = "";

		if (this.input)
			this.input.addEventListener("input",this.fireworks.bind(this));
	}
	fireworks() {
		const { selectionStart, value } = this.input;
		const { length } = value;
		const { top, left, height } = this.input.getBoundingClientRect();
		const charDiff = value.length - this.value.length;
		const charDiffAbs = Math.abs(charDiff);
		let caretPos = selectionStart || 0;

		// move caret forward for every deleted character
		if (charDiff < 0)
			caretPos += charDiffAbs;

		// generate particles for each new or removed character
		for (let c = 0; c < charDiffAbs; ++c) {
			const hue = this.random(0,359,true);

			for (let p = 0; p < this.particles; ++p) {
				// create the particle
				const el = document.createElement("div");
				const color = `hsl(${hue},90%,55%)`;
				const x = `calc(${left}px + ${caretPos - c - 0.5}ch)`;
				const y = `${top + height / 2}px`;
				const angle = this.random(0,359,true);
				const isRing = p === 0;
				const d = isRing ? this.random(3,5) : this.random(2,4);

				// place it
				el.classList.add("particle");

				if (isRing) {
					el.classList.add("particle--ring");
					el.style.color = color;
					el.style.width = `${d}em`;
					el.style.height = `${d}em`;
				} else {
					el.style.backgroundColor = color;
				}

				el.style.top = y;
				el.style.left = x;
				document.body.appendChild(el);

				// animate it
				const center = "translate(-50%,-50%)";
				const ringKeyframes = [
					{
						opacity: 1,
						transform: `${center} scale(0)`
					},
					{
						opacity: 0,
						transform: `${center} scale(1)`
					}
				];
				const dotKeyframes = [
					{
						transform: `${center} rotate(${angle}deg) translateY(0) scale(1)`
					},
					{
						transform: `${center} rotate(${angle}deg) translateY(${d}em) scale(0)`
					}
				];
				const movement = el.animate(
					isRing ? ringKeyframes : dotKeyframes,
					{
						duration: isRing ? 600 : 900,
						easing: "cubic-bezier(0,0,0.13,1)"
					}
				);

				movement.onfinish = () => { el.remove(); };
			}
		}

		this.value = value;
	}
	random(min,max,round = false) {
		const percent = crypto.getRandomValues(new Uint32Array(1))[0] / 2**32;
		const relativeValue = (max - min) * percent;
		return min + (round === true ? Math.round(relativeValue) : +relativeValue.toFixed(2));
	}
}
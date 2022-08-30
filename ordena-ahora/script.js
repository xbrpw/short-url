document.addEventListener("DOMContentLoaded",() => {
	let toyForm = new ToyForm();
});

class ToyForm {
	constructor() {
		let form = document.forms[0];

		this.screen = form.querySelector(".screen-value");

		form.addEventListener("change",this.calcPrice.bind(this));
		form.addEventListener("reset",this.updatePrice.bind(this,0));
		form.reset();
	}
	calcPrice(e) {
		let inputs = document.querySelectorAll("[name='size'],[name='toppings']"),
			items = [
				{
					name: "small",
					price: 10
				},
				{
					name: "medium",
					price: 15
				},
				{
					name: "large",
					price: 20
				},
				{
					name: "ham",
					price: 0.5
				},
				{
					name: "pepperoni",
					price: 0.5
				},
				{
					name: "bacon",
					price: 0.5
				}
			],
			totalPrice = 0;

		// remove the target’s `pristine` class, which prevents the CSS animation on load
		if (e && e.target.classList.contains("pristine"))
			e.target.removeAttribute("class");

		// calculate the price
		inputs.forEach(i => {
			if (i.checked) {
				let selectedItem = items.find(I => I.name == i.value);

				if (selectedItem)
					totalPrice += selectedItem.price;
			}
		});
		this.updatePrice(totalPrice);
	}
	updatePrice(value) {
		let fadeInClass = "fade-in",
			screenCL = this.screen.classList;

		this.screen.textContent = value < 1e5 ? value.toFixed(2) : "Overflow";

		// replay CSS animation
		screenCL.remove(fadeInClass);
		void this.screen.offsetWidth;
		setTimeout(() => {
			screenCL.add(fadeInClass);
		},0);
	}
}
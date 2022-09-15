// If CSS Custom Properties or Variables are supported
if (window.CSS && CSS.supports("color", "var(--primary)")) {
	const radios = document.querySelectorAll('input[type="radio"]');

	const toggleColorMode = function toggleColorMode(e) {
		//console.log(e.currentTarget.value);
		// Switch to Light Mode
		if (e.currentTarget.value === "on") {
			// Sets the custom html attribute
			document.documentElement.setAttribute("color-mode", "dark");
			// Sets the user's preference in local storage
			localStorage.setItem("color-mode", "dark");
			return;
		}
		/* Switch to Light Mode */
		document.documentElement.setAttribute("color-mode", "light");
		localStorage.setItem("color-mode", "light");
	};

	radios.forEach(function (radio) {
		radio.addEventListener("click", toggleColorMode);
	});
} else {
	//hide the switcher
	const switcherContainer = document.querySelectorAll(".head-widgets")[0];
	switcherContainer.style.display = "none";
}
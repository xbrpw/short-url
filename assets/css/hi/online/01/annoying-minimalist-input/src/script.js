let input = document.getElementById("input");
let error = document.getElementById("error");
function annoy(inputtxt) {
	var letters = /^[A-Za-z]+$/;
	if (inputtxt.value.match(letters)) {
		inputtxt.value = "";
		error.innerHTML = "Please insert numbers only";
	} else {
		inputtxt.value = "";
		error.innerHTML = "Please insert characters only";
	}
	var numbers = /^[0-9]+$/;
	if (inputtxt.value.match(numbers)) {
		inputtxt.value = "";
		error.innerHTML = "Please insert characters only";
	}
}

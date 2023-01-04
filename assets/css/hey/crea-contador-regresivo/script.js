const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");
const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");

const completeEl = document.getElementById("complete");
const completeElInfo = document.getElementById("complete-info");
const completeBtn = document.getElementById("complete-button");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;
let savedCountdown;

const second = 1000; // one second (1000)
const minute = second * 60; // minutes (60)
const hour = minute * 60;
const day = hour * 24;

// set date input min with todays date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Populate Countdown / Complete ui

function updateDOM() {
	countdownActive = setInterval(() => {
		const now = new Date().getTime(); // Get todays date in millisecods
		const distance = countdownValue - now; // Subtract entered date value from today

		const days = Math.floor(distance / day);
		const hours = Math.floor((distance % day) / hour); // remainder from distance devided by day and devide that by hour
		const minutes = Math.floor((distance % hour) / minute);
		const seconds = Math.floor((distance % minute) / second);

		//  Hide input
		inputContainer.hidden = true;

		//    if the countdown has ended and show complete
		if (distance <= 0) {
			countdownEl.hidden = true;
			clearInterval(countdownActive);
			completeElInfo.textContent = `${countdownTitle} - ${countdownDate}`;
			completeEl.hidden = false;
		} else {
			// show countdown in progress
			// Populate countdown
			countdownElTitle.textContent = `${countdownTitle}`;
			timeElements[0].textContent = `${days}`;
			timeElements[1].textContent = `${hours}`;
			timeElements[2].textContent = `${minutes}`;
			timeElements[3].textContent = `${seconds}`;
			completeEl.hidden = true;
			countdownEl.hidden = false;
		}
	}, second);
}

// Takes values from form input
function updateCountdown(e) {
	e.preventDefault();
	countdownTitle = e.srcElement[0].value;
	countdownDate = e.srcElement[1].value;
	savedCountdown = {
		title: countdownTitle,
		date: countdownDate
	};
	localStorage.setItem("countdown", JSON.stringify(savedCountdown));
	// check for validate
	if (countdownDate === "" || countdownTitle === "") {
		alert("Formato incompleto");
	} else {
		//   Get Number version of current date, update DOM
		countdownValue = new Date(countdownDate).getTime();
		updateDOM();
	}
}

// reset all values
function reset() {
	// hide countdown, show input
	inputContainer.hidden = false;
	completeEl.hidden = true;
	countdownEl.hidden = true;
	// stop the countdown
	clearInterval(countdownActive);
	//   reset values
	countdownDate = "";
	countdownTitle = "";
	localStorage.removeItem("countdown");
}

function restorePreviousCountdown() {
	// if local storage is available set countdown
	if (localStorage.getItem("countdown")) {
		inputContainer.hidden = true;
		savedCountdown = JSON.parse(localStorage.getItem("countdown"));
		countdownTitle = savedCountdown.title;
		countdownDate = savedCountdown.date;
		countdownValue = new Date(countdownDate).getTime();
		updateDOM();
	}
}

// event listener
countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
completeBtn.addEventListener("click", reset);

//  on load check local storage
restorePreviousCountdown();
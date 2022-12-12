//#cpc-click-button#codepenchallenge

let root = document.documentElement;
let mover = document.querySelector(".mover");
let link = document.querySelector(".btn");

root.addEventListener("mousemove", (e) => {
	root.style.setProperty("--mouse-x", e.clientX + "px");
	root.style.setProperty("--mouse-y", e.clientY + "px");
});

link.addEventListener("click", function (event) {
	event.preventDefault();
	let svg =
		`<svg class="svg" fill="none" viewBox="0 0 140 160" xmlns="http://www.w3.org/2000/svg"> <path d="M70.5 82.5V45.5" id="Line1"></path> <path d="M61.5 90.5L24.5 90.5" id="Line2"></path> <path d="M70.5 100.5V137.5" id="Line3"></path> <path d="M79.5 90.5L116.5 90.5" id="Line4"></path> <path d="M64.8786 85.9999L38.7157 59.8369" id="Line5"></path> <path d="M76 85.8788L102.163 59.7158" id="Line6"></path> <path d="M64 97.1211L37.837 123.284" id="Line7"></path> <path d="M76.1213 97L102.284 123.163" id="Line8"></path> <!-- /- (1..@snowFew).each do --> <g> <g> <g class="svg_obj"> <path d="M14.6324 5.25L20.9832 16.25C21.5606 17.25 20.8389 18.5 19.6842 18.5H6.98249C5.82778 18.5 5.10609 17.25 5.68344 16.25L12.0343 5.25C12.6116 4.25 14.055 4.25 14.6324 5.25Z" fill="none" stroke-linecap="square" stroke-linejoin="round" stroke-width="3" stroke="#7f71fe"></path> </g> <animateMotion begin="0s" dur="1.5s" repeatCount="1"> <mpath xlink:href="#Line` +
		Math.floor(Math.random() * 8 + 1) +
		`"></mpath> </animateMotion> </g> </g> <g> <g> <g class="svg_obj"> <circle cx="12" cy="11" r="6.5" stroke-width="3" stroke="#1A3AF8"></circle> </g> <animateMotion begin="0s" dur="1.5s" repeatCount="1"> <mpath xlink:href="#Line` +
		Math.floor(Math.random() * 8 + 1) +
		`"></mpath> </animateMotion> </g> </g> <g> <g> <g class="svg_obj"> <path d="M17.2394 3L7.6162 18.2116M5 5.51355L20.2116 15.1367" stroke="#47cf73" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </g> <animateMotion begin="0s" dur="1.5s" repeatCount="1"> <mpath xlink:href="#Line` +
		Math.floor(Math.random() * 8 + 1) +
		`"></mpath> </animateMotion> </g> </g> </svg>`;

	let x = event.offsetX == undefined ? event.layerX : event.offsetX,
		y = event.offsetY == undefined ? event.layerY : event.offsetY;

	let span = document.createElement("span");
	span.className = "mouse";
	span.innerHTML = svg;
	s = span.style;
	s.top = y + "px";
	s.left = x + "px";
	this.appendChild(span);

	setTimeout(function () {
		span.remove();
	}, 1400);

	mover.classList.add("active");
	setTimeout(function () {
		mover.classList.remove("active");
	}, 250);
});

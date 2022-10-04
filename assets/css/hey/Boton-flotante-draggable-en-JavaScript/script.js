function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}
dragElement(document.getElementById("floating-menu-container"));

function dragElement(elmnt) {
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	let LOGO = document.getElementById("floating-menu-logo");
	elmnt.onmousedown = dragMouseDown;

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = elmnt.offsetTop - pos2 + "px";
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
		LOGO.style.pointerEvents = "none";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
		LOGO.style.pointerEvents = "auto";
	}
}

function floatingMenuClickToggle() {
	let MENU = document.getElementById("floating-menu-container");
	let INFO = document.getElementById("floating-menu-content-wrapper");
	let LOGO = document.getElementById("floating-menu-logo");
	let INFOTXT = document.getElementById("floating-menu-info-txt");
	if (INFO.style.display === "none") {
		INFO.style.display = "block";
		insertAfter(LOGO, INFOTXT);
	} else {
		INFO.style.display = "none";
		LOGO.style.display = "block";
		insertAfter(LOGO, INFO);
		LOGO.style.display = "block";
	}
}
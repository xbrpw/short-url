function randomNumber(max, min) {
	return Math.floor(Math.random() * max) + min;
}

function setProp(p, n) {
	document.body.style.setProperty(p, n);
}

function getProp(name) {
	return document.body.style.getPropertyValue(name);
}

/*colors*/
setProp("--pri", randomNumber(359, 1));
setProp("--sec", parseInt(getProp("--pri")) + 90);
setProp("--ter", parseInt(getProp("--pri")) + 180);
setProp("--qua", parseInt(getProp("--pri")) + 270);

/*saturation*/
setProp("--sat", randomNumber(30, 30) + "%");

/*poster size*/
setProp("--wid", randomNumber(25, 60) + "vmin");
setProp("--hei", randomNumber(25, 60) + "vmin");

/*planets x*/
var p3x, p4x;
setProp("--p-two-x", randomNumber(25, 3) + "%");
if (getProp("--p-two-x").slice(0, -1) < 14) {
	p3x = randomNumber(25, 30);
} else {
	p3x = randomNumber(20, 40);
}
setProp("--p-three-x", p3x + "%");
if (getProp("--p-three-x").slice(0, -1) < 50) {
	p4x = randomNumber(30, 60);
} else {
	p4x = randomNumber(7, 70);
}
setProp("--p-four-x", p4x + "%");

/*planets y*/
var p3y, p4y;
setProp("--p-two-y", randomNumber(32, 2) + "%");
if (getProp("--p-two-y").slice(0, -1) < 16) {
	p3y = randomNumber(15, 20);
} else {
	p3y = randomNumber(11, 2);
}
setProp("--p-three-y", p3y + "%");
if (getProp("--p-three-y").slice(0, -1) < 16) {
	p4y = randomNumber(15, 20);
} else {
	p4y = randomNumber(11, 2);
}
setProp("--p-four-y", p4y + "%");

/*planet one*/
setProp("--p-one-y", randomNumber(25, 50) + "%");

/*planet two*/
setProp("--p-two-s", randomNumber(8, 7) + "vmin");

/*planet three*/
setProp("--p-three-s", randomNumber(9, 5) + "vmin");

/*planet four*/
setProp("--p-four-s", randomNumber(9, 3) + "vmin");

/*craters*/
setProp("--crs", randomNumber(12, 8) + "vmin");
setProp("--cax", randomNumber(13, 22) + "%");
setProp("--cay", randomNumber(10, 3) + "%");
setProp("--cbx", randomNumber(11, 41) + "%");
setProp("--cby", randomNumber(12, 1) + "%");
setProp("--ccx", randomNumber(17, 56) + "%");
setProp("--ccy", randomNumber(10, 3) + "%");

/*moon size*/
setProp("--mos", randomNumber(5, 5) + "%");

/*moon track*/
setProp("--mot", randomNumber(15, 5));

/*moon speed*/
setProp("--spe", randomNumber(15, 30) + "s");

/*star size*/
setProp("--st1", "0." + randomNumber(2, 0) + "%");
setProp("--st2", "0." + randomNumber(3, 0) + "%");
setProp("--st3", "0." + randomNumber(4, 0) + "%");

/*star position*/
setProp("--s1x", randomNumber(95, 4) + "%");
setProp("--s1y", randomNumber(35, 1) + "%");
setProp("--s2x", randomNumber(95, 4) + "%");
setProp("--s2y", randomNumber(25, 1) + "%");
setProp("--s3x", randomNumber(95, 4) + "%");
setProp("--s3y", randomNumber(35, 1) + "%");
setProp("--s4x", randomNumber(95, 4) + "%");
setProp("--s4y", randomNumber(25, 1) + "%");
setProp("--s5x", randomNumber(95, 4) + "%");
setProp("--s5y", randomNumber(35, 1) + "%");
setProp("--s6x", randomNumber(95, 4) + "%");
setProp("--s6y", randomNumber(25, 1) + "%");
setProp("--s7x", randomNumber(95, 4) + "%");
setProp("--s7y", randomNumber(35, 1) + "%");
setProp("--s8x", randomNumber(95, 4) + "%");
setProp("--s8y", randomNumber(25, 1) + "%");
setProp("--s9x", randomNumber(95, 4) + "%");
setProp("--s9y", randomNumber(35, 1) + "%");
setProp("--s10x", randomNumber(95, 4) + "%");
setProp("--s10y", randomNumber(25, 1) + "%");
setProp("--s11x", randomNumber(95, 4) + "%");
setProp("--s11y", randomNumber(35, 1) + "%");
setProp("--s12x", randomNumber(95, 4) + "%");
setProp("--s12y", randomNumber(25, 1) + "%");
setProp("--s13x", randomNumber(95, 4) + "%");
setProp("--s13y", randomNumber(35, 1) + "%");
setProp("--s14x", randomNumber(95, 4) + "%");
setProp("--s14y", randomNumber(25, 1) + "%");
setProp("--s15x", randomNumber(95, 4) + "%");
setProp("--s15y", randomNumber(35, 1) + "%");

/*ring*/
setProp("--p-ring-d", Math.ceil((Math.random() - 0.5) * 2) < 1 ? -1 : 1); // ring degress

/*target*/
var setTarget = document.querySelectorAll(".random");

/*ring target*/
var setRing = randomNumber(3, 0);
setTarget[setRing].innerHTML += '<div class="ring"></div>';

/*crater target*/
var setCrater = randomNumber(2, 1);
setTarget[setCrater].innerHTML += '<div class="crater"></div>';

/*

var planets   = new Array( 0,1,2,3 );

planets.sort(function() { return 0.5 - Math.random();})


*/

var varNormal = document.getElementById('work-normal')
varNormal.style.visibility = 'hidden';

var varFaster = document.getElementById("btn-faster");
var varHarder = document.getElementById("btn-harder");
var varScooter = document.getElementById("btn-scooter");
var varBody = document.getElementById("body");

varNormal.onclick=function(){
	varFaster.classList.remove("selected");
	varHarder.classList.remove("selected");
	varScooter.classList.remove("selected");
	varBody.classList.add ("shake-little");
	varBody.classList.remove ("shake", "shake-hard", "shake-crazy");
	varNormal.style.visibility = 'hidden';
}

varFaster.onclick=function(){
	this.classList.add("selected");
	varHarder.classList.remove("selected");
	varScooter.classList.remove("selected");
	varBody.classList.add ("shake");
	varBody.classList.remove ("shake-little", "shake-hard", "shake-crazy");
	varNormal.style.visibility = 'visible';
}

varHarder.onclick=function(){
	this.classList.add("selected");
	varFaster.classList.remove("selected");
	varScooter.classList.remove("selected");
	varBody.classList.add ("shake-hard");
	varBody.classList.remove ("shake-little", "shake", "shake-crazy");
	varNormal.style.visibility = 'visible';
}

varScooter.onclick=function(){
	this.classList.add("selected");
	varFaster.classList.remove("selected");
	varHarder.classList.remove("selected");
	varBody.classList.add ("shake-crazy");
	varBody.classList.remove ("shake-little", "shake", "shake-hard");
	varNormal.style.visibility = 'visible';
}
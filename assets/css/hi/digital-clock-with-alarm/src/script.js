/*Designed and coded by Abhilash Narayan */
function AmazeTime(almbtnobj) {
	this.date,this.day,this.dt,this.month, this.year,this.hour,this.minute,this.second = null;
	this.almHour, this.almMinute, almMeridiem = null;
	this.meridiem = "AM";
	this.almBtn = almbtnobj;
	this.almBtn = this.setAlarm;
}

AmazeTime.prototype.initializeTime = function() {
	this.dt = new Date();
	this.day = this.getDayInWords(this.dt.getDay());
	this.date = this.dt.getDate();
	this.month = this.getMonthInShort(this.dt.getMonth());
	this.year = this.dt.getFullYear();
	this.hour = this.setHour(this.dt.getHours());
	this.minute = this.doubleDigit(this.dt.getMinutes());
	this.second = this.doubleDigit(this.dt.getSeconds());
	this.meridiem = this.setMeridiem(this.dt.getHours());
}

AmazeTime.prototype.setHour = function(hr) {	
	if(hr > 12) {
		hr = hr - 12;
	}
	if(hr === 0) {
		hr = 12;
	}
	return this.doubleDigit(hr);
}

AmazeTime.prototype.doubleDigit = function(val) {
	if(val < 10) {
		val = "0" + val;
	}
	return val;
}

AmazeTime.prototype.setMeridiem = function(hr) {
	if(hr > 12) {
		hr = hr - 12;
		return "PM";
	} else {
		return "AM";
	}
}

AmazeTime.prototype.getMonthInShort = function(value) {
	var Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	return Months[value];
}

AmazeTime.prototype.getDayInWords = function(value) {
	var Weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	return Weekdays[value];
}

AmazeTime.prototype.setClock = function() {
	var clockDiv = document.getElementById("clock");
	var dayDiv = document.getElementById("day");
	var dateDiv = document.getElementById("date");
	var self = this;
	dayDiv.innerText = this.day;
	dateDiv.innerText = this.date + " " + this.month + " " + this.year;
	clockDiv.innerHTML = "<span id='currentHr'>" + this.hour + "</span>:<span id='currentMin'>" + this.minute + "</span>:" + this.second + " <span id='meridiem'>" + this.meridiem + "</span>";
}

AmazeTime.prototype.setAlarm = function() {
	this.almHour = this.doubleDigit(document.getElementById('almHour').value);
	this.almMinute = this.doubleDigit(document.getElementById('almMin').value);
	if(document.getElementById("am").checked == true) {
		this.almMeridiem = "AM";
	} else  {
		this.almMeridiem = "PM";
	}
}

AmazeTime.prototype.checkAlarm = function() {
	var audio = new Audio('http://www.abhilashwebdeveloper.com/public/images/codepen/audio/audio.mp3');
	if(this.hour == this.almHour && this.minute == this.almMinute && this.almMeridiem == this.meridiem) {
		audio.play();
		if(this.minute > this.almMinute) {
			audio.pause();
		}
	} 
}

var mytime = null;
mytime = new AmazeTime(document.getElementById("savebtn"));
window.addEventListener('load', function() { 
	function runTime() {
	mytime.initializeTime();
	mytime.setClock();
	mytime.checkAlarm();
	}
setInterval(runTime, 1000);	
}	, false);	

function saveAlarm() {		
	mytime.setAlarm();
	$('#myModal').modal('hide');
}
  
document.getElementById("savebtn").addEventListener("click", saveAlarm , false);
			
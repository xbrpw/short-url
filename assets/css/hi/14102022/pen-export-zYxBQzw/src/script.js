const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

var firstDate = new Date(2019, 12, 10);
var dateNow = new Date(yyyy, mm, dd);
var secondDate = new Date(2019, 12, 12);

var diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
var remainingDays = Math.round(Math.abs((dateNow - secondDate) / oneDay));

var percentDone = Math.round((diffDays - remainingDays)/diffDays * 100)
if(!remainingDays > 0){
	percentDone = 100
}

console.log(percentDone);

document
$("#daysRemaining").html(remainingDays)
$("#progress").css({"width": percentDone+"%"}).html(percentDone+"%")
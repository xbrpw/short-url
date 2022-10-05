var WPM = 900;
var letter = 0;
var letters = document.getElementById("text").innerHTML.split(" ");
var d = document.getElementById("display");
function play(){
	if(letter == 0){
		d.innerHTML = letters[0].trim();
		setTimeout(function(){
			word();
		}, 100);
	}
}
function word(){
	var w = letters[letter];
	d.innerHTML = w.trim();
	var p = w.charAt(0).toUpperCase() == w.charAt(0);
	var l = w.length < 4 || w.length > 7;
	letter++;
	if(letter < letters.length)
		setTimeout(word, 60000 / WPM * (p ? 2 : 1) * (l ? 1.5 : 1));
	else
		letter = 0;
}
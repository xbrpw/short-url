let allWords
fetch("https://escapeachamber.com/json/")
.then((r) => r.json())
.then((json) => {
  allWords = json.dictionary.toLowerCase().split(" ")
})
  


const audio = new Audio('https://escapeachamber.com/pi/pig.mp3');

let muted = false;

const handleMute = () => {
  muted = !muted;
  muted === false ? document.getElementById('mute').innerHTML = "Mute" : document.getElementById('mute').innerHTML = "Unmute";
}

document.getElementById('mute').onclick = handleMute;

const animate = () => {
   if (muted === false){
  document.getElementById("igpay").classList.remove("wiggle");
  setTimeout(function(){ 
     audio.play(); document.getElementById("igpay").classList.add("wiggle"); }, 10);}}

const vouls = ['a','e','i','o','u'];

function translatePigLatin(str) {
  const firstLetter = str.substr(0,1);
  const secondLetter = str.substr(1,1);
  let result = '';
  if(str === ""){return ''}
  if(!vouls.includes(firstLetter) &&
     !vouls.includes(secondLetter)){
    return str.slice(2) + firstLetter + secondLetter + 'ay';}
  else if(vouls.includes(firstLetter)){return str + "way";}
  else{return str.slice(1) + firstLetter + "ay";}
}

const translateReverse = (str) =>{
  const popThree = str.substring(0, str.length-3).toLowerCase();
       const moveOne =str.substr(str.length-3, 1) + str.substr(0, str.length-3).toLowerCase();
      const moveTwo = str.substr(str.length-4, 2) + str.substr(0, str.length-4).toLowerCase()
       const moveSome = allWords.includes(moveOne) ? moveOne : moveTwo;
     if(str.substring(str.length-3) === 'way')
    {
      return (allWords.includes(popThree) ? popThree : moveSome);
    }
  else {
    return moveSome;
  }
}

function handleClick(){
  event.preventDefault();
  animate();
  let isAlreadyPig = 0;
  const input = document.getElementById('sentence').value;
  var toPigArray = input.split(' ');
var pigArray = toPigArray.map((each) => {
    const commaCheck = each.includes(',') ? ',' : "";
    const periodCheck = each.includes('.') ? '.' : "";
    const questionCheck = each.includes('?') ? '?' : "";
    const exclamationCheck = each.includes('!') ? '!' : "";
    const punc = commaCheck + periodCheck + questionCheck + exclamationCheck;
  if(each.toLowerCase().replace(/[^a-z]/gi, '').substring(each.toLowerCase().replace(/[^a-z]/gi, '').length-2) === "ay"){isAlreadyPig++;}
  return translatePigLatin(each.toLowerCase().replace(/[^a-z]/gi, '')) + punc;
});
  const answer = pigArray.join(" ").toLowerCase();
  const final = answer.charAt(0).toUpperCase() + answer.slice(1);

  document.getElementById("x").innerHTML = "<div style='font-size: 18px'>En lenguaje Eevee suena algo así:</div><textarea id='translation'></textarea><button onclick='copyIt()' style='display:block; margin: auto;'>Copiar traducción</button>";
  document.getElementById('translation').value = final;
  autosize(document.getElementById('translation'));


if(input === ''){document.getElementById("x").innerHTML = "Eevee dice que escribas algo, anda, !vámos!"}
  if(isAlreadyPig >= input.split(" ").length && input.split(" ").length > 3){document.getElementById("x").innerHTML = "Traductor de Eevee!"}
document.getElementById('sentence').blur();
}

// clear function
document.getElementById('clear').onclick = () => {document.getElementById('sentence').value = "";}


// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
document.getElementById("close").onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const reverse = document.getElementById('reverse');
reverse.onclick = () => {
  animate();
  let notPig = 0;
  const input = document.getElementById('sentence').value
  const toPigArray = input.split(' ');

  var pigArray = toPigArray.map((each) => {
    const commaCheck = each.includes(',') ? ',' : "";
    const periodCheck = each.includes('.') ? '.' : "";
    const questionCheck = each.includes('?') ? '?' : "";
    const exclamationCheck = each.includes('!') ? '!' : "";
    const punc = commaCheck + periodCheck + questionCheck + exclamationCheck;
    if(each.toLowerCase().replace(/[^a-z]/gi, '').substring(each.toLowerCase().replace(/[^a-z]/gi, '').length-2)  !== "ay"){notPig++;}
  return translateReverse(each.toLowerCase().replace(/[^a-z]/gi, '')) + punc;

});
  var answer = pigArray.join(" ").toLowerCase();
  var final = answer.charAt(0).toUpperCase() + answer.slice(1);

   document.getElementById("x").innerHTML = "<div style='font-size: 18px'>eso se traduce como:</div><textarea id='translation'></textarea><button onclick='copyIt()' style='display:block; margin: auto;'>Copiar</button>";
   document.getElementById('translation').value = final;

   document.getElementById("x").innerHTML = "<div style='font-size: 18px'>eso se traduce como:</div><textarea id='translation'></textarea><button onclick='copyIt()' style='display:block; margin: auto;'>Copiar</button>";
   document.getElementById('translation').value = final;
   if(input === ''){document.getElementById("x").innerHTML = "Eevee dice que escribas algo, anda, !vámos!"}
  autosize(document.getElementById('translation'));

};
function copyIt() {
  var copyText = document.getElementById("translation");
  copyText.select();
  document.execCommand("Copy");
  alert("😀Listo, traducción copiada: " + copyText.value);
}

document.getElementById("igpay").onclick = () => {
  animate();
  document.getElementById('sentence').focus();
}



// I know this isnt very optimal js, I repeat myself where i could have written as functions and i use dif syntax in dif areas instead of staying consistent. I will probably revise it later. I have also removed some less common words from the dictionary that shares reverse translations with more common words such as "ere" which shares with 'were'
var wrapper = document.getElementsByClassName('wrapper')[0];
var numberPad = document.getElementsByClassName('number-pad')[0];
var numberButtons = document.getElementsByClassName('number-button');
var disableScreen = document.getElementsByClassName('disable-screen')[0];
var playButton = document.getElementsByClassName('play-button')[0];
var piPlaces = document.getElementsByClassName('pi-places')[0];
var tweet = document.getElementsByClassName('tweet')[0];
var index = 0;
var recordIndex = 0;
var sequenceInterval = 600;
var flashInterval = 300;
var pi = Math.PI.toString().split('');
var places = 3;
var piSequence = pi.slice(0, places);

var buttons = {
  playAgain: document.getElementsByClassName('play-again')
}

var messages = {
  done: document.getElementsByClassName('done-message')[0],
  success: document.getElementsByClassName('success-message')[0]
}

function flashClass(target, className, interval){
  target.classList.add(className);          
  setTimeout(function(){
    target.classList.remove(className);           
  }, interval);
};

function playSequence(sequence){
  var interval = setInterval( function(){
    if(index < sequence.length){
      var button;
      for (var i = 0; i < numberButtons.length; ++i){
        if(numberButtons[i].getAttribute('data-value') === sequence[index].toString() ){
          button = numberButtons[i];
        };
      };
      flashClass(button, 'flash', sequenceInterval);
      index = index + 1;
    } else{
      clearInterval(interval);
      index = 0;
      console.log('interval cleared');
      disableScreen.classList.remove('active');
    };
  }, sequenceInterval);
};

function recordSequence(target, sequence){
  var value = target.getAttribute('data-value');
  console.log('button value', value);
  if(value === sequence[recordIndex].toString()){
    recordIndex = recordIndex + 1;
    flashClass(target, 'correct', flashInterval); 
    if( recordIndex === pi.length){
      messages.success.classList.add('shown'); 
      recordIndex = 0;
    } else if(recordIndex === sequence.length){
      flashClass(wrapper, 'flash', flashInterval);
      recordIndex = 0;
      places = places + 1
      piSequence = pi.slice(0, places);
      playSequence(piSequence);
      disableScreen.classList.add('active');      
    };
  } else{
    var tweetHref = 'https://twitter.com/intent/tweet?text=';
    var tweetString = 'I%20repeated%20pi%20to%20'+ recordIndex +'%20places.%20Live%20every%20day%20like%20it%27s%20Pi%20Day.%20%23piday%20%23codepen%20http%3A%2F%2Fbit.ly%2F1YSESZB';
    piPlaces.innerHTML = recordIndex;
    messages.done.classList.add('shown');
    tweet.setAttribute('href', tweetHref + tweetString);
    flashClass(target, 'incorrect', flashInterval);
    recordIndex = 0;
    places = 3;
    piSequence = pi.slice(0, places);
  }
};

playButton.addEventListener('click', function(){
  playSequence(piSequence);
  disableScreen.classList.add('active');
  playButton.disabled = true;
});


for( var i = 0; i < buttons.playAgain.length; ++i){
  buttons.playAgain[i].addEventListener('click', function(){
    messages.done.classList.remove('shown');
    messages.success.classList.remove('shown');
    playButton.disabled = false;
  });
};

for( var i = 0; i < numberButtons.length; ++i){
  numberButtons[i].addEventListener('click', function(e){
    playButton.disabled = true;
    recordSequence(e.target, piSequence);
  });
};

console.log(pi.length);
document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '40') {
      // down arrow
      var audio = new Audio("https://github.com/martinrss3/my-portfolio/blob/master/src/audio/garcello/C.ogg?raw=true");
      audio.play();
      
      document.getElementById("Shape5").style.display = "block";                   document.getElementById("Shape1").style.display = "none";
      document.getElementById("Shape2").style.display = "none";
      document.getElementById("Shape3").style.display = "none";
      document.getElementById("Shape4").style.display = "none";
      
      document.getElementById("DownArrow").style.transform = "translate(8%, 10%) scale(0.9)";
      
 document.onkeyup = releaseKey;
 
 function releaseKey(e) {
    e = e || window.event;
                                      document.getElementById("DownArrow").style.transform = "translate(0%, 0%) scale(1)";
      }
      
    }
    else if (e.keyCode == '39') {
        // right arrow
      var audio = new Audio('https://github.com/martinrss3/my-portfolio/blob/master/src/audio/garcello/B.ogg?raw=true');
      audio.play();
      
      document.getElementById("Shape4").style.display = "block";                   document.getElementById("Shape1").style.display = "none";
      document.getElementById("Shape2").style.display = "none";
      document.getElementById("Shape3").style.display = "none";
      document.getElementById("Shape5").style.display = "none";
      
      document.getElementById("RightArrow").style.transform = "translate(8%, 10%) scale(0.9)";
      
 document.onkeyup = releaseKey;
 
 function releaseKey(e) {
    e = e || window.event;
                                      document.getElementById("RightArrow").style.transform = "translate(0%, 0%) scale(1)";
      }
      
    }
    else if (e.keyCode == '37') {
        // left arrow
       var audio = new Audio('https://github.com/martinrss3/my-portfolio/blob/master/src/audio/garcello/A.ogg?raw=true');
      audio.play();
      
      document.getElementById("Shape3").style.display = "block";                   document.getElementById("Shape1").style.display = "none";
      document.getElementById("Shape2").style.display = "none";
      document.getElementById("Shape4").style.display = "none";
      document.getElementById("Shape5").style.display = "none";
      
  document.getElementById("LeftArrow").style.transform = "translate(7%, 10%) scale(0.9)";
      
 document.onkeyup = releaseKey;
 
 function releaseKey(e) {
    e = e || window.event;
                                      document.getElementById("LeftArrow").style.transform = "translate(0%, 0%) scale(1)";
      }
    }
    else if (e.keyCode == '38') {
        // up arrow
      var audio = new Audio('https://github.com/martinrss3/my-portfolio/blob/master/src/audio/garcello/D.ogg?raw=true');
      audio.play();
      
      document.getElementById("Shape2").style.display = "block";                   document.getElementById("Shape1").style.display = "none";
      document.getElementById("Shape3").style.display = "none";
      document.getElementById("Shape4").style.display = "none";
      document.getElementById("Shape5").style.display = "none";
      
       document.getElementById("UpArrow").style.transform = "translate(8%, 9%) scale(0.9)";
      
 document.onkeyup = releaseKey;
 
 function releaseKey(e) {
    e = e || window.event;
                                      document.getElementById("UpArrow").style.transform = "translate(0%, 0%) scale(1)";
      }
    }
}


var touchDownArrow = document.getElementById("DownArrow");

touchDownArrow.addEventListener('touchstart', function(e) {

  var audio = new Audio("https://github.com/martinrss3/my-portfolio/blob/master/src/audio/garcello/C.ogg?raw=true");
      audio.play();
  
document.getElementById("Shape5").style.display = "block";                   document.getElementById("Shape1").style.display = "none";
      document.getElementById("Shape2").style.display = "none";
      document.getElementById("Shape3").style.display = "none";
      document.getElementById("Shape4").style.display = "none";
});

var touchRightArrow = document.getElementById("RightArrow");

touchRightArrow.addEventListener('touchstart', function(e) {

  var audio = new Audio('https://github.com/martinrss3/my-portfolio/blob/master/src/audio/garcello/B.ogg?raw=true');
      audio.play();
  
  document.getElementById("Shape4").style.display = "block";                   document.getElementById("Shape1").style.display = "none";
      document.getElementById("Shape2").style.display = "none";
      document.getElementById("Shape3").style.display = "none";
      document.getElementById("Shape5").style.display = "none";
});

var touchLeftArrow = document.getElementById("LeftArrow");

touchLeftArrow.addEventListener('touchstart', function(e) {

  var audio = new Audio('https://github.com/martinrss3/my-portfolio/blob/master/src/audio/garcello/A.ogg?raw=true');
      audio.play();
  
  document.getElementById("Shape3").style.display = "block";                   document.getElementById("Shape1").style.display = "none";
      document.getElementById("Shape2").style.display = "none";
      document.getElementById("Shape4").style.display = "none";
      document.getElementById("Shape5").style.display = "none";
});

var touchUpArrow = document.getElementById("UpArrow");

touchUpArrow.addEventListener('touchstart', function(e) {

  var audio = new Audio('https://github.com/martinrss3/my-portfolio/blob/master/src/audio/garcello/D.ogg?raw=true');
      audio.play();
  
  document.getElementById("Shape2").style.display = "block";                   document.getElementById("Shape1").style.display = "none";
      document.getElementById("Shape3").style.display = "none";
      document.getElementById("Shape4").style.display = "none";
      document.getElementById("Shape5").style.display = "none";
});
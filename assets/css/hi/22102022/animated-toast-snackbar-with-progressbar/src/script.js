function showAlert(){
  var myAlert = document.getElementById("myAlert");
move();
 
  myAlert.className = "show";

  setTimeout(function(){hideAlert(); }, 5000);
}

function hideAlert(){
  myAlert.className = myAlert.className.replace("show", "");
}


var i = 0;
function move() {
  if (i == 0) {
    var elem = document.getElementById("myAlertBar");
    var width = 1;
    var interval = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        interval = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
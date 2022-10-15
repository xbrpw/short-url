document.querySelector('.calc').addEventListener("click", function() {
  var val1 = document.querySelector('.val1').value,
      val2 = document.querySelector('.val2').value;
  if( val1 && val2 ) {
    if( isNaN(val1) || isNaN(val2) ) {
      alert("They're not numbers");
    } else {
      document.querySelector('.res').value = val1*val2;
    }
  } else {
    return false;
  }
});

document.querySelector('.reset').addEventListener("click", function() {
  var matches = document.querySelectorAll('input');
  for (var i = 0; i < matches.length; i++) {
    matches[i].value = '';
  }
});
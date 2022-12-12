/* Detect browser can use local storage */
if (typeof(Storage) !== 'undefined') {
  $('#yay').fadeIn('slow');
} else {
  $('#ooh').fadeIn('slow');
}

/* set it */
$('#set').click(function() {
  var test = $('#text').val();
  localStorage.setItem("test", test);
});

/* get it */
$('#get').click(function() {
    $('#val').text(localStorage.getItem("test"));
});

/* remove it */
$('#remove').click(function() {
    localStorage.removeItem("test");
    $('#val').html("<i>nothing saved...</i>");
});

/* on pageload, if key/value is found get it*/
if (localStorage.getItem("test") !== null) {
  $('#val').text(localStorage.getItem("test"));
}






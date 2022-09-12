/* Detect browser can use web storage */
if (!typeof(Storage) !== 'undefined') {
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
});

$('#val').text(localStorage.getItem("test"));
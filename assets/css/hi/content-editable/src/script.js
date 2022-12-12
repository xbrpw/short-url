/**
 * Playing around with editable text
 * and local storage.
 */

if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem('title') !== null) {
    $('.title').text(localStorage.getItem('title'));
  }
  if (localStorage.getItem('author') !== null) {
    $('.author').text(localStorage.getItem('author'));
  }
  if (localStorage.getItem('body-text') !== null) {
    $('.body-text').text(localStorage.getItem('body-text'));
  }
  
  $('.title, .author, .body-text').on('input', function (e) {
    localStorage.setItem($(this).attr('class'), $(this).text());
	});
}


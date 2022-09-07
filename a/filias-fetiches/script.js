// Bookmark close on clicking outside the bookmark sidebar
$(document).on('click', function(e) {
  var $body = $('body');
  if ($body.hasClass('open')) {
    $body.removeClass('open');
  }
});

// prevent sidebar from closing while clicking on sidebar
$('.btn-bookmark').on('click', function(e) {
  e.stopPropagation();
  document.body.className = 'open';
});

function checkInputValue() {
  var inputValue = $("#inputVal").val();

  if ((inputValue) === '') {
    $(".keyword").html("<p>Por favor, escribe una palabra.</p>");
    $(".result-list").empty();

  } else {
    searchWord(inputValue);
  }
}

// On button Click - Checking Input value
$("#searchBtn").on('click', checkInputValue);


$(document).on('keyup', function(e) {
  if (e.keyCode == '13') {
    var inputValue = $("#inputVal").val();

    if ((inputValue) === '') {
      $(".keyword").html("<p>Por favor, escribe una palabra.</p>");
      $(".result-list").empty();
    } else {
      searchWord(inputValue);
    }
  }
});

$('.bookmark').on('click', '.bookmark-tag', function(e) {
  e.stopPropagation();
  $(".keyword").empty();
  $(".result-list").empty();
  var tagValue = $(this).text();
  $('#bookmarkBtn').remove();
  searchWord(tagValue);
  $('body').removeClass('open');
});


// Search Word Function
function searchWord(keyword) {

  $.ajax({
    url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + keyword,
    headers: {
      'X-Mashape-Key': 'VrZBZyMZUWmshpR4iecrjq6XQCmnp1Oar7QjsnbknMXfI5U2IS',
      'Accept': 'application/json'
    },
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      // console.log(keyword);
      // getting value when no result match
      var noResultVal = data.result_type;
      if (noResultVal === "no_results") {
        $(".keyword").html("No result found");
        $("#bookmarkBtn").css('display', 'none');
      } else {
        $("#bookmarkBtn").css('display', 'block');
        $(".keyword").html(keyword);
      }
      $(".result-list").empty();

      // Printing list of definition from different authors
      for (i = 0; i < data.list.length; i++) {
        $(".result-list").append('<p>' + data.list[i].definition + '</p>');
      }
    }
  });
}

// appending word to bookmark list
function bookmark() {
  var word = $("#inputVal").val();
  if ((word).length > 0) {
    $(".bookmark__list").append('<li class="bookmark-tag">' + word + '</li>');
    $('input[type="search"]').val('');
  }
}
// on click of bookmark button - calling bookmark function
$("#bookmarkBtn").on('click', bookmark);
$('table').on('input', function() {
  var url = encodeURIComponent($('#url').val());
  var tweet = encodeURIComponent($('#tweet').val());
  var title = encodeURIComponent($('#title').val());
  var summary = encodeURIComponent($('#summary').val());
  
  var hashtags = $('#hashtags').val();
  hashtags = hashtags.replace(/\s+/g, '');
  hashtags = hashtags.replace(/#/g, '');
  hashtags = encodeURIComponent(hashtags);
  hashtags = hashtags.replace(/%2C/g, ',');
  
  facebook = '<li><a href="https://www.facebook.com/sharer.php?u=' + url + '">Share on Facebook</a></li>';
  
  twitter = '<li><a href="https://twitter.com/intent/tweet?url=' + url;
  if (tweet != "") { twitter += '&text=' + tweet };
  if (hashtags != "") { twitter += '&hashtags=' + hashtags };
  twitter += '">Share on Twitter</a></li>';

  linkedin = '<li><a href="https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + title + '&summary=' + summary + '">Share on LinkedIn</a></li>';
  linkedin = '<li><a href="https://www.linkedin.com/shareArticle?mini=true&url=' + url;
  if (title != "") { linkedin += '&title=' + title };
  if (summary != "") { linkedin += '&summary=' + summary };
  linkedin += '">Share on LinkedIn</a></li>';

  $('textarea').text(facebook + '\n' + twitter + '\n' + linkedin);
});

$('button').on('click', function() {
  document.querySelector("#share-links").select();
  document.execCommand('copy');
});
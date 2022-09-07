//$('img').on('load', function () {
//console.log('image load successful');
//});

$(window).on("load", function() {
  setTimeout(function() {
    $("#heroslider > div").addClass("heroslides").removeClass("hideonload");
  }, 150);
});
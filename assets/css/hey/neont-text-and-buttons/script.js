$("#span").typed({
  stringsElement: $("#typedStrings"),
  typeSpeed: 70,
  showCursor: false,
  contentType: "html"
});
var colors = [["green","#00E676"], ["blue","#2196F3"], ["pink", "#ff005b"]];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
var initialColor = randomColor[0];
var initialHeartColor = randomColor[1];
function colorChange(color, heart){
  $('#span').attr('class', '').addClass(color);
  $('body p i').css('color', initialHeartColor);
  $('body p i').css('color', heart);
}
colorChange(initialColor);
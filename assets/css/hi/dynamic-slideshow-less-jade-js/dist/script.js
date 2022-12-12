var toggleSlide = function(){
 $("blockquote.active").removeClass().next("blockquote").add("blockquote:first").last().addClass("active");
}
setInterval(toggleSlide, 3000);
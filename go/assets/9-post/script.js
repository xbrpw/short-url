//hovering effect by @Bloxore
$(document).ready(function() {
  $(".floaty").mousemove(function(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    var horzAngle = 0;
    var vertAngle = 0;
    var obj = $(this);
    //Maximum angle 30!
    var objX = obj.offset().left + obj.innerWidth() / 2;
    var objY = obj.offset().top + obj.innerHeight() / 2;
    
    horzAngle = -((objX - mouseX) / (obj.innerWidth()/2)) * 10;
    vertAngle = ((objY - mouseY) / (obj.innerHeight()/2)) * 10;
    
    obj.attr("style", "transform: rotateY("+horzAngle+"deg) rotateX("+vertAngle+"deg) translateZ(50px);-webkit-transform: rotateY("+horzAngle+"deg) rotateX("+vertAngle+"deg) translateZ(50px);-moz-transform: rotateY("+horzAngle+"deg) rotateX("+vertAngle+"deg) translateZ(50px)");
  });
  $(".floaty").mouseout(function() {
    var obj = $(this);
    obj.css({
      '-webkit-transform' : 'rotateY(' + 0 + 'deg)',
      '-moz-transform'    : 'rotateY(' + 0 + 'deg)',
      '-ms-transform'     : 'rotateY(' + 0 + 'deg)',
      '-o-transform'      : 'rotateY(' + 0 + 'deg)',
      'transform'         : 'rotateY(' + 0 + 'deg)'
    });
  });
});

//endhoveringeffect by @Bloxore

$('.back').click(function(){

  $('.container-master').toggleClass('toggled');
});

$('.tile').click(function(){
  $('html,body').animate({scrollTop:0},0);

    $('.container-master').toggleClass('toggled');
  
  $('.lyrics-wrapper').empty();
  //get title
  $('.lyrics-title').html($(this).find('.title').html());
  
  //get lyrics
  $list = $(this).find('ul li');
  $list.each(function(i, li){
    console.log(i,li);
    var lyricsText = '<div class="lyrics-card">'+$(li).html()+'</div>';
    $('.lyrics-wrapper').append(lyricsText);
    
setTimeout(function(){ 
 var lis = $('.lyrics-card');
    for (var i = 0; i < lis.length; i++) {
$(lis[i]).delay(i*500).animate({'top': '0','opacity':1}, 1000);
    }
}, 800);
   
  });
});
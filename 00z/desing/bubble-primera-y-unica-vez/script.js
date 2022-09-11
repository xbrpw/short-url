//toggle these vars to test device positioning
var isIphone = false;
var isIpad = true;

//toggle this to simulate full screen mode or not
var isStandAlone = false;

$(document).ready(function() {
  showMeTheBubble();
});

function showMeTheBubble(){
  if(!isStandAlone){
      if(isIphone){
            $('.bubble').addClass('iphone');
        }else if(isIpad){
            $('.bubble').addClass('ipad');
        }
        if(!localStorage.bubble){
            $('.bubble').show();
            $('.bubble-close').click(function(){
                $('.bubble').hide();
                localStorage.setItem("bubble", true);
            });
        }
    }
}
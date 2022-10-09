var start = 1 ;
$(document).ready(function() {

$('.restart').click(function() {
    if(!$(this).hasClass('disb')){
       restClock();
    }
});
  
  $('.start').click(function() {
    if (start) {
      $('.start .fa-play').animate({
        opacity: 0,
        left: '16px'
      }, 200);
      $('.start .fa-pause').animate({
        opacity: 1,
        left: '13px'
      }, 200);
      start = 0;
      $('.action-item').addClass('disb');
      $(this).removeClass('disb');
      startClock();
    } else {
      $('.start .fa-play').animate({
        opacity: 1,
        left: '16px'
      }, 200);
      $('.start .fa-pause').animate({
        opacity: 0,
        left: '13px'
      }, 200);
      start = 1;
      $('.action-item').removeClass('disb')
      stopClock();
    }

  });
});
var id, count = 0,
  sec = 0,
  min = 0, lap = 0, mTop = 60;

function stopClock() {
  clearInterval(id);
  $($('#laps').find('span')[lap++]).html('#'+lap+': '+appendzero(min)+':'+appendzero(sec)+':'+appendzero(count));
  mTop -= 15;
  $('#text').css({
    'margin-top': mTop+'px'});
  if(lap > 3){
    // alert('here').
    restClock();
  }
}

function startClock() {
  
  id = setInterval(function() {
    count++;
    $('#msec').html(appendzero(count));
    if (count > 60) {
      sec++;
      count = 0;
      $('#sec').html(appendzero(sec));
      if (sec > 60) {
        min++;
        sec = 0;
        count = 0;
        $('#min').html(appendzero(min));
        if (min > 60) {
          min = 0;
          sec = 0;
          count = 0;
        }
      }
    }
  },10)
}

function restClock(){
    clearInterval(id);
          min = 0;
          sec = 0;
          count = 0, lap = 0, mTop = 60;
    $('#msec').html(appendzero(count)); 
    $('#min').html(appendzero(min));
    $('#sec').html(appendzero(sec));
    $('.action-item:nth-child(1)').addClass('disb');
    $('.action-item:nth-child(3)').addClass('disb')
    $('#laps').find('span').html('');
    $('#text').css({
    'margin-top': 75+'px'});
}

function appendzero(count) {
  if (count < 10) return '0' + count;
  else return count;
}
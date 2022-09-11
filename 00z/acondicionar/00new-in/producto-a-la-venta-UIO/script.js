$(document).ready(function() {

  $('.color-choose input').on('click', function() {
    var headphonesColor = $(this).attr('data-image');
    $('.active').fadeOut(500).removeClass('active');
    $('.left-column img[data-image = ' + headphonesColor + ']').fadeIn(250).addClass('active');
    $(this).addClass('active');
  });
});
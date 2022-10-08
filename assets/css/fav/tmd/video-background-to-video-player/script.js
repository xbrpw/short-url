(function ($) {
  $(function () {

    
    window.objVideo = {
      template: '<video class="js-ag-video_video__new" controls="controls">' +
      '<source src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_videos/video-2.mp4" type="video/mp4">' +
      '</video>',

      init: function (argSelector) {
        if ($(argSelector).find('video').size() == 0) {
          objVideo.loadItem($(argSelector));
        }
      },

      loadItem: function (argContainer) {
        argContainer.html(objVideo.template);
      }
    };

    var agDisplayWidth = $(window).width();

    if (agDisplayWidth > '757') {

      $('.js-video_box').on('click', function () {
        $('.js-video_btn-play').addClass('js-ag-video_btn-play__hide');

        $('.js-video_box').addClass('js-ag-video_box__progress').animate({
          'visibility': 'visible'
        }, 2000, function () {
          $(this).removeClass('js-ag-video_box__progress').addClass('js-ag-video_box__hide');
        });
        $('.js-video_video').animate({
          opacity: 0
        }, 2000, function () {
          objVideo.init('#js-video');
          
          $('.js-video_btn-close').addClass('js-ag-video_btn-close__show');
        }).css({
          '-webkit-transform': 'translateX(50%)',
          '-moz-transform': 'translateX(50%)',
          '-ms-transform': 'translateX(50%)',
          '-o-transform': 'translateX(50%)',
          'transform': 'translateX(50%)'
        });
        $('.js-col_right').css({
          '-webkit-transform': 'translateX(100%)',
          '-moz-transform': 'translateX(100%)',
          '-ms-transform': 'translateX(100%)',
          '-o-transform': 'translateX(100%)',
          'transform': 'translateX(100%)'
        });
      });

      $('.js-video_btn-close').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        $('#js-video').html('');
        $('.js-video_box').removeClass('js-ag-video_box__hide');
        $('.js-col_right').css({
          '-webkit-transform': 'translateX(0)',
          '-moz-transform': 'translateX(0)',
          '-ms-transform': 'translateX(0)',
          '-o-transform': 'translateX(0)',
          'transform': 'translateX(0)'
        });
        $('.js-video_video').animate({
          opacity: 1
        }, 300, function () {
          $('.js-video_btn-play').removeClass('js-ag-video_btn-play__hide');
          $('.js-video_btn-close').removeClass('js-ag-video_btn-close__show');
        }).css({
          '-webkit-transform': 'translateX(0)',
          '-moz-transform': 'translateX(0)',
          '-ms-transform': 'translateX(0)',
          '-o-transform': 'translateX(0)',
          'transform': 'translateX(0)'
        });
      });

    }else{
      $('.js-video_box').on('click', function () {
        $('.js-video_btn-play').addClass('js-ag-video_btn-play__hide');

        $('.js-video_box').addClass('js-ag-video_box__progress').animate({
          'visibility': 'visible'
        }, 2000, function () {
          $(this).removeClass('js-ag-video_box__progress').addClass('js-ag-video_box__hide');
        });
        $('.js-video_video').animate({
          opacity: 0
        }, 2000, function () {
          objVideo.init('#js-video');
          
          $('.js-video_btn-close').addClass('js-ag-video_btn-close__show');
        });
      });
      
      $('.js-video_btn-close').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        $('#js-video').html('');
        $('.js-video_box').removeClass('js-ag-video_box__hide');
        $('.js-video_video').animate({
          opacity: 1
        }, 300, function () {
          $('.js-video_btn-play').removeClass('js-ag-video_btn-play__hide');
          $('.js-video_btn-close').removeClass('js-ag-video_btn-close__show');
        });
      });
    }
    

  });
})(jQuery);
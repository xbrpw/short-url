(function ($) {
  $(function () {


    var agMenuBtn = $('.js-menu_btn-wrap'),
          agMenuBox = $('.js-header-menu_box'),
          agHeader = $('#header'),
          agBody = $('body');

    agMenuBtn.on('click', function () {
      if(agMenuBtn.children().hasClass('js-ag-menu_btn__show')) {
        agMenuClose();
      } else {
        agMenuBox.addClass('js-ag-header-menu_box');

        agMenuBtn.children().addClass('js-ag-menu_btn__show');

        agMenuBoxClose(agHeader);

        agBody.addClass('js-ag-body-noscroll');
        agBody.append('<div class="js-ag-overlay"></div>');
      }
    });


    $('.js-select_info').on('click', function () {

      var agSelectBox = $(this).next('.js-select_info-box');

      if (agSelectBox.css('display') == 'none') {
        agSelectBox.slideDown();
        $(this).addClass('js-ag-select_info-box__show');
      }else{
        agSelectBox.slideUp();
        $(this).removeClass('js-ag-select_info-box__show');
      }
    });




    function agMenuClose() {
      agMenuBox.removeClass('js-ag-header-menu_box');
      agMenuBtn.children().removeClass('js-ag-menu_btn__show');

      agBody.removeClass('js-ag-body-noscroll');
      $('.js-ag-overlay').remove();
    }

    function agMenuBoxClose(argPanel) {
      $(document).bind('keyup', function (e) {
        if (e.keyCode != 27) {
          return true;
        }
        /* 'Esc' key (27) */
        if (e.keyCode == 27 && argPanel.is(':visible')) {
          agMenuClose();
        }
      });

      $(document).mouseup(function (e) {
        if ((!argPanel.is(e.target) && argPanel.has(e.target).length === 0)) {
          agMenuClose(argPanel);
        }
      });
    }


  });
})(jQuery);
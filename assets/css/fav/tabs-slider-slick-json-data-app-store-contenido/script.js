(function ($) {
    $(document).ready(function () {

      class Projects {

        constructor() {
          this.section = $('#js-apps');
        }

        selectTab() { /* табы - основные закладки (key, man) */
          var $this = this;
          var tabBtn = this.section.find('.js-apps-tabs_box .js-apps-tabs_tabs');

          tabBtn.find('.js-apps-tabs_tab').bind('click', function () {
            var activeIndex = $(this).index();

            $this.selectContent(activeIndex);

            $(this).addClass('js-ag-active');
            $(this).siblings().removeClass('js-ag-active');
          });
        }

        selectContent(index) {
          var $this = this;

          $this.section.find('.js-apps-subtabs_list').removeClass('js-ag-active');
          $this.section.find('.js-apps-subtabs_list').eq(index).addClass('js-ag-active');

          $this.section.find('.js-apps-subtabs_list').eq(index).find('.js-apps-subtabs_item').eq(0).trigger('click');
        }

        /* Subtabs (App) */
        changeActiveIconApp(argElement) {
          //console.log(argElement);
          //if(argElement.hasClass('js-ag-active')) return false;

          argElement.addClass('js-ag-active');

          argElement.siblings().removeClass('js-ag-active');
        }

        changeActiveContentApp(argData) { /* Loading content for a specific app */
          var $this = this;
          var newContent = "";
          var btnApp = {};

          newContent += '<div class="js-ag-apps-info_name">' + argData.name + '</div>';
          newContent += '<div class="js-ag-apps-info_descr">' + argData.description + '</div>';

          if (argData.platform) {
            newContent += '<div class="ag-apps-info_btn-wrap">';

            $.each(argData.platform, function (argKey, argVal) {
              if (argData.platform[argKey].select_marketplace === 'playmarket') {
                btnApp.img = "https://raw.githack.com/SochavaAG/example-mycode/master/pens/tabs-app-store/images/google-play-btn.png";
              } else if (argData.platform[argKey]['select_marketplace'] === 'aplstore') {
                btnApp.img = "https://raw.githack.com/SochavaAG/example-mycode/master/pens/tabs-app-store/images/app-store-btn.png";
              }

              newContent += '<a  href="' + argData.platform[argKey]['set_link'] + '" class="js-ag-apps-info_btn" target="_blank"><img src="' + btnApp.img + '" alt=""></a>';
            });

            newContent += '</div>';
          }

          $this.section.find('.js-apps-info_box').html(newContent);
        }

        changeActiveMockupApp(argData) {
          var $this = this;
          var gallery = argData.gallery;

          if (!gallery) return false;

          $this.section.find('.js-apps-phone_slides').slick('unslick');
          $this.section.find('.js-apps-phone_slides').html(' ');

          var newGallery = "";

          $.each(gallery, function (a, b) {
            newGallery += '<img src="' + b.url + '" class="ag-apps-phone_slide" alt="' + b.alt + '"/>';
          });

          $this.section.find('.js-apps-phone_slides').html(newGallery);

          /* slider for "man" tabs */
          $this.section.find('.js-apps-phone_slides').slick({
            arrows: false,
            dots: false,
            //fade: true,
            cssEase: 'linear',
            autoplay: 1,
            slidesToShow: 1,
            //centerMode: true,
            rows: 0
          });
        }

        selectApp() {
          var $this = this;

          $this.section.find('.js-apps-subtabs_item').bind('click', function () {
            //if($(this).hasClass('js-ag-active')) return false;

            $this.changeActiveIconApp($(this));

            var agItemInfo = {},
              agKeyID = $(this).attr('id');

            $.getJSON('https://raw.githack.com/SochavaAG/example-mycode/master/pens/tabs-app-store/js/items-new.json', function(argData) {
              agItemInfo = argData;

              $this.changeActiveContentApp(agItemInfo[agKeyID]);
              $this.changeActiveMockupApp(agItemInfo[agKeyID]);
            });
          });
        }

        initSlider() {
          var $this = this;

          /* slider for "key" tabs */
          $this.section.find('.js-apps-phone_slides').slick({
            arrows: false,
            dots: false,
            //fade: true,
            cssEase: 'linear',
            autoplay: 1,
            slidesToShow: 1,
            //centerMode: true,
            rows: 0
          })
        }

        init() {
          var $this = this;
          $this.selectTab();
          $this.selectApp();
          $this.initSlider();
        }
      }

      var projects = new Projects();
      projects.init();


    });
  })(jQuery);
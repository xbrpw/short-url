$(document).ready(function() {
    var TabBlock = {
        speed: {
            animaLength: 200
        },

        init: function() {
            TabBlock.bindUIActions();
            TabBlock.hideInactive();
        },

        bindUIActions: function() {
            $('.panel__nav').on('click', '.panel__nav--item', function() {
                TabBlock.switchTab($(this));
            });
        },

        hideInactive: function() {
            var $tabBlocks = $('.panel');

            $tabBlocks.each(function(i) {
                var $tabBlock = $($tabBlocks[i]),
                    $panes = $tabBlock.find('.tab__content--panel'),
                    $activeTab = $tabBlock.find('.panel__nav--item.is-active');

                $panes.hide();
                $($panes[$activeTab.index()]).show();
            });
        },

        switchTab: function($tab) {
            var $context = $tab.closest('.panel');

            if (!$tab.hasClass('is-active')) {
                $tab.siblings().removeClass('is-active');
                $tab.addClass('is-active');
                TabBlock.showPane($tab.index(), $context);
            }
        },

        showPane: function(i, $context) {
            var $panes = $context.find('.tab__content--panel');
            $panes.slideUp(TabBlock.speed.animaLength);
            $($panes[i]).slideDown(TabBlock.speed.animaLength);
        }
    };

    $(function() {
        TabBlock.init();
    });
 
});
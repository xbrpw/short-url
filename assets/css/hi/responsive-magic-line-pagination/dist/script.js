(function() {
  /*global Modernizr:true */
  'use strict';
  (function($) {
    $.fn.extend({
      mgPgnation: function(options) {
        /* func :: calculate width of each page num */
        /* func :: draw magic line */
        /* func :: update prev text */
        var $curNav, $magicLine, $magicNav, $mainNav, $nextNav, $pgnNav, $prevNav, $prevNavText, $this, calPgnWidth, magicDraw, prevNavWidth, prevText, showPrevNext, updatePrevText;
        $this = $(this);
        if ($this.length) {
          $mainNav = this.children();
          $pgnNav = $this.find('.pgn__item');
          $curNav = $this.find('.current');
          $magicNav = $this.find('a');
          $prevNav = $this.find('.prev');
          $nextNav = $this.find('.next');
          $prevNavText = $prevNav.find('.pgn__prev-txt');
          updatePrevText = function() {
            $prevNavText = $prevNav.find('.pgn__prev-txt');
            return $prevNavText.html('Prev');
          };
          calPgnWidth = function() {
            var pgnWidth, prevWidth, vsbNav, vsbNavs;
            // number of visible <a> plus <strong class="current">
            vsbNav = $this.find('.pgn__item a:visible').length + 1;
            vsbNavs = vsbNav + 2;
            prevWidth = 100 / vsbNavs;
            pgnWidth = 100 - prevWidth * 2;
            $prevNav.css('width', prevWidth + '%');
            $nextNav.css('width', prevWidth + '%');
            $pgnNav.css('width', pgnWidth + '%');
            // <a> and <strong>
            return $pgnNav.find('a, strong').css('width', 100 / vsbNav + '%');
          };
          /* func :: calculate and display prev/next */
          // 85px - display full text
          showPrevNext = function() {
            var prevNavWidth;
            prevNavWidth = $prevNav.innerWidth();
            if (prevNavWidth > 100) {
              $this.addClass('fullprevnext');
              // display Previous
              return $prevNavText.html('Previous');
            } else if (prevNavWidth < 101 && prevNavWidth > 60) {
              $this.addClass('fullprevnext');
              // display Prev
              return $prevNavText.html('Prev');
            } else {
              return $this.removeClass('fullprevnext');
            }
          };
          magicDraw = function() {
            // draw init magic line
            $magicLine.width($curNav.width());
            if ($curNav.position() !== void 0) {
              $magicLine.css('left', $curNav.position().left);
            }
            
            // assign orig values
            $magicLine.data('origLeft', $magicLine.position().left);
            return $magicLine.data('origWidth', $magicLine.width());
          };
          // END funcs

          // create magic line
          $mainNav.append('<li class="pgn__magic-line">');
          
          // declare magic line
          $magicLine = $this.find('.pgn__magic-line');
          // add extra class & element if no prev or next
          prevNavWidth = $prevNav.innerWidth();
          if (prevNavWidth > 100) {
            prevText = 'Previous';
          } else {
            prevText = 'Prev';
          }
          if (!$prevNav.children().length) {
            $prevNav.addClass('disabled');
            $prevNav.append('<a rel="prev"><i class="pgn__prev-icon icon-angle-left"></i><span class="pgn__prev-txt">' + prevText + '</span></a>');
          }
          if (!$nextNav.children().length) {
            $nextNav.addClass('disabled');
            $nextNav.append('<a rel="next"><i class="pgn__next-icon icon-angle-right"></i><span class="pgn__next-txt">Next</span></a>');
          }
          // calculate pgn width
          calPgnWidth();
          // show prev/next
          showPrevNext();
          // draw magic line
          magicDraw();
          
          // when hover
          $magicNav.hover((function() {
            var $el, leftPos, newWidth;
            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.width();
            
            // animate magic line
            return $magicLine.stop().animate({
              left: leftPos,
              width: newWidth
            });
          }), function() {
            return $magicLine.stop().animate({
              left: $magicLine.data('origLeft'),
              width: $magicLine.data('origWidth')
            });
          });
          /* Window Resize Changes */
          return window.addEventListener('resize', function() {
            updatePrevText();
            calPgnWidth();
            showPrevNext();
            return magicDraw();
          });
        }
      }
    });
    // END mgPgnation()

    // call function here 
    return $('.pgn').mgPgnation();
  })(jQuery);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQTRCO0VBQUE7RUFDNUI7RUFFQSxDQUFDLFFBQUEsQ0FBQyxDQUFELENBQUE7SUFDQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQUwsQ0FDRTtNQUFBLFVBQUEsRUFBWSxRQUFBLENBQUMsT0FBRCxDQUFBLEVBQUE7Ozs7QUFDaEIsWUFBQSxPQUFBLEVBQUEsVUFBQSxFQUFBLFNBQUEsRUFBQSxRQUFBLEVBQUEsUUFBQSxFQUFBLE9BQUEsRUFBQSxRQUFBLEVBQUEsWUFBQSxFQUFBLEtBQUEsRUFBQSxXQUFBLEVBQUEsU0FBQSxFQUFBLFlBQUEsRUFBQSxRQUFBLEVBQUEsWUFBQSxFQUFBO1FBQU0sS0FBQSxHQUFRLENBQUEsQ0FBRSxJQUFGO1FBRVIsSUFBRyxLQUFLLENBQUMsTUFBVDtVQUNFLFFBQUEsR0FBVyxJQUFDLENBQUEsUUFBRCxDQUFBO1VBQ1gsT0FBQSxHQUFVLEtBQUssQ0FBQyxJQUFOLENBQVcsWUFBWDtVQUNWLE9BQUEsR0FBVSxLQUFLLENBQUMsSUFBTixDQUFXLFVBQVg7VUFDVixTQUFBLEdBQVksS0FBSyxDQUFDLElBQU4sQ0FBVyxHQUFYO1VBQ1osUUFBQSxHQUFXLEtBQUssQ0FBQyxJQUFOLENBQVcsT0FBWDtVQUNYLFFBQUEsR0FBVyxLQUFLLENBQUMsSUFBTixDQUFXLE9BQVg7VUFDWCxZQUFBLEdBQWUsUUFBUSxDQUFDLElBQVQsQ0FBYyxnQkFBZDtVQUdmLGNBQUEsR0FBaUIsUUFBQSxDQUFBLENBQUE7WUFDZixZQUFBLEdBQWUsUUFBUSxDQUFDLElBQVQsQ0FBYyxnQkFBZDttQkFDZixZQUFZLENBQUMsSUFBYixDQUFrQixNQUFsQjtVQUZlO1VBS2pCLFdBQUEsR0FBYyxRQUFBLENBQUEsQ0FBQTtBQUN0QixnQkFBQSxRQUFBLEVBQUEsU0FBQSxFQUFBLE1BQUEsRUFBQSxPQUFBOztZQUNVLE1BQUEsR0FBUyxL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TixPQUFBLEdBQVUsR0FBRyxDQUFDLFFBQUosQ0FBQSxDQUFjLENBQUM7WUFDekIsUUFBQSxHQUFXLEdBQUcsQ0FBQyxLQUFKLENBQUEsRUFGckI7OzttQkFLVSxVQUFVLENBQUMsSUFBWCxDQUFBLENBQWlCLENBQUMsT0FBbEIsQ0FDRTtjQUFBLElBQUEsRUFBTSxPQUFOO2NBQ0EsS0FBQSxFQUFPO1lBRFAsQ0FERjtVQU5lLENBQUQsQ0FBaEIsRUFTRyxRQUFBLENBQUEsQ0FBQTttQkFDRCxVQUFVLENBQUMsSUFBWCxDQUFBLENBQWlCLENBQUMsT0FBbEIsQ0FDRTtjQUFBLElBQUEsRUFBTSxVQUFVLENBQUMsSUFBWCxDQUFnQixVQUFoQixDQUFOO2NBQ0EsS0FBQSxFQUFPLFVBQVUsQ0FBQyxJQUFYLENBQWdCLFdBQWhCO1lBRFAsQ0FERjtVQURDLENBVEgsRUF4RlI7O2lCQXVHUSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsUUFBQSxDQUFBLENBQUE7WUFDaEMsY0FBQSxDQUFBO1lBQ0EsV0FBQSxDQUFBO1lBQ0EsWUFBQSxDQUFBO21CQUNBLFNBQUEsQ0FBQTtVQUpnQyxDQUFsQyxFQXhHRjs7TUFIVTtJQUFaLENBREYsRUFBRjs7OztXQW9IRSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsVUFBVixDQUFBO0VBckhELENBQUQsQ0FBQSxDQXVIRSxNQXZIRjtBQUg0QiIsInNvdXJjZXNDb250ZW50IjpbIiMjI2dsb2JhbCBNb2Rlcm5penI6dHJ1ZSAjIyNcbid1c2Ugc3RyaWN0J1xuXG4oKCQpIC0+XG4gICQuZm4uZXh0ZW5kXG4gICAgbWdQZ25hdGlvbjogKG9wdGlvbnMpIC0+XG4gICAgICAkdGhpcyA9ICQodGhpcylcblxuICAgICAgaWYgJHRoaXMubGVuZ3RoXG4gICAgICAgICRtYWluTmF2ID0gQGNoaWxkcmVuKClcbiAgICAgICAgJHBnbk5hdiA9ICR0aGlzLmZpbmQoJy5wZ25fX2l0ZW0nKVxuICAgICAgICAkY3VyTmF2ID0gJHRoaXMuZmluZCgnLmN1cnJlbnQnKVxuICAgICAgICAkbWFnaWNOYXYgPSAkdGhpcy5maW5kKCdhJylcbiAgICAgICAgJHByZXZOYXYgPSAkdGhpcy5maW5kKCcucHJldicpXG4gICAgICAgICRuZXh0TmF2ID0gJHRoaXMuZmluZCgnLm5leHQnKVxuICAgICAgICAkcHJldk5hdlRleHQgPSAkcHJldk5hdi5maW5kKCcucGduX19wcmV2LXR4dCcpXG5cbiAgICAgICAgIyMjIGZ1bmMgOjogdXBkYXRlIHByZXYgdGV4dCAjIyNcbiAgICAgICAgdXBkYXRlUHJldlRleHQgPSAtPlxuICAgICAgICAgICRwcmV2TmF2VGV4dCA9ICRwcmV2TmF2LmZpbmQoJy5wZ25fX3ByZXYtdHh0JylcbiAgICAgICAgICAkcHJldk5hdlRleHQuaHRtbCAnUHJldidcblxuICAgICAgICAjIyMgZnVuYyA6OiBjYWxjdWxhdGUgd2lkdGggb2YgZWFjaCBwYWdlIG51bSAjIyNcbiAgICAgICAgY2FsUGduV2lkdGggPSAtPlxuICAgICAgICAgICMgbnVtYmVyIG9mIHZpc2libGUgPGE+IHBsdXMgPHN0cm9uZyBjbGFzcz1cImN1cnJlbnRcIj5cbiAgICAgICAgICB2c2JOYXYgPSAkdGhpcy5maW5kKCcucGduX19pdGVtIGE6dmlzaWJsZScpLmxlbmd0aCArIDFcbiAgICAgICAgICB2c2JOYXZzID0gdnNiTmF2ICsgMlxuICAgICAgICAgIHByZXZXaWR0aCA9IDEwMCAvIHZzYk5hdnNcbiAgICAgICAgICBwZ25XaWR0aCA9IDEwMCAtIHByZXZXaWR0aCAqIDJcbiAgICAgICAgICAkcHJldk5hdi5jc3MgJ3dpZHRoJywgcHJldldpZHRoICsgJyUnXG4gICAgICAgICAgJG5leHROYXYuY3NzICd3aWR0aCcsIHByZXZXaWR0aCArICclJ1xuICAgICAgICAgICRwZ25OYXYuY3NzICd3aWR0aCcsIHBnbldpZHRoICsgJyUnXG4gICAgICAgICAgIyA8YT4gYW5kIDxzdHJvbmc+XG4gICAgICAgICAgJHBnbk5hdi5maW5kKCdhLCBzdHJvbmcnKS5jc3MgJ3dpZHRoJywgMTAwIC8gdnNiTmF2ICsgJyUnXG5cbiAgICAgICAgIyMjIGZ1bmMgOjogY2FsY3VsYXRlIGFuZCBkaXNwbGF5IHByZXYvbmV4dCAjIyNcbiAgICAgICAgIyA4NXB4IC0gZGlzcGxheSBmdWxsIHRleHRcbiAgICAgICAgc2hvd1ByZXZOZXh0ID0gLT5cbiAgICAgICAgICBwcmV2TmF2V2lkdGggPSAkcHJldk5hdi5pbm5lcldpZHRoKClcblxuICAgICAgICAgIGlmIHByZXZOYXZXaWR0aCA+IDEwMFxuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MgJ2Z1bGxwcmV2bmV4dCdcblxuICAgICAgICAgICAgIyBkaXNwbGF5IFByZXZpb3VzXG4gICAgICAgICAgICAkcHJldk5hdlRleHQuaHRtbCAnUHJldmlvdXMnXG4gICAgICAgICAgZWxzZSBpZiBwcmV2TmF2V2lkdGggPCAxMDEgYW5kIHByZXZOYXZXaWR0aCA+IDYwXG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcyAnZnVsbHByZXZuZXh0J1xuXG4gICAgICAgICAgICAjIGRpc3BsYXkgUHJldlxuICAgICAgICAgICAgJHByZXZOYXZUZXh0Lmh0bWwgJ1ByZXYnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MgJ2Z1bGxwcmV2bmV4dCdcblxuICAgICAgICAjIyMgZnVuYyA6OiBkcmF3IG1hZ2ljIGxpbmUgIyMjXG4gICAgICAgIG1hZ2ljRHJhdyA9IC0+XG4gICAgICAgICAgIyBkcmF3IGluaXQgbWFnaWMgbGluZVxuICAgICAgICAgICRtYWdpY0xpbmUud2lkdGgoJGN1ck5hdi53aWR0aCgpKVxuICAgICAgICAgIGlmICRjdXJOYXYucG9zaXRpb24oKSAhPSB1bmRlZmluZWRcbiAgICAgICAgICAgICRtYWdpY0xpbmUuY3NzICdsZWZ0JywgJGN1ck5hdi5wb3NpdGlvbigpLmxlZnRcbiAgICAgICAgICBcbiAgICAgICAgICAjIGFzc2lnbiBvcmlnIHZhbHVlc1xuICAgICAgICAgICRtYWdpY0xpbmUuZGF0YSAnb3JpZ0xlZnQnLCAkbWFnaWNMaW5lLnBvc2l0aW9uKCkubGVmdFxuICAgICAgICAgICRtYWdpY0xpbmUuZGF0YSAnb3JpZ1dpZHRoJywgJG1hZ2ljTGluZS53aWR0aCgpXG4gICAgICAgICMgRU5EIGZ1bmNzXG4gICAgICAgIFxuICAgICAgICAjIGNyZWF0ZSBtYWdpYyBsaW5lXG4gICAgICAgICRtYWluTmF2LmFwcGVuZCgnPGxpIGNsYXNzPVwicGduX19tYWdpYy1saW5lXCI+JylcbiAgICAgICAgXG4gICAgICAgICMgZGVjbGFyZSBtYWdpYyBsaW5lXG4gICAgICAgICRtYWdpY0xpbmUgPSAkdGhpcy5maW5kKCcucGduX19tYWdpYy1saW5lJylcblxuICAgICAgICAjIGFkZCBleHRyYSBjbGFzcyAmIGVsZW1lbnQgaWYgbm8gcHJldiBvciBuZXh0XG4gICAgICAgIHByZXZOYXZXaWR0aCA9ICRwcmV2TmF2LmlubmVyV2lkdGgoKVxuXG4gICAgICAgIGlmIHByZXZOYXZXaWR0aCA+IDEwMFxuICAgICAgICAgIHByZXZUZXh0ID0gJ1ByZXZpb3VzJ1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcHJldlRleHQgPSAnUHJldidcblxuICAgICAgICBpZiAhJHByZXZOYXYuY2hpbGRyZW4oKS5sZW5ndGhcbiAgICAgICAgICAkcHJldk5hdi5hZGRDbGFzcyAnZGlzYWJsZWQnXG4gICAgICAgICAgJHByZXZOYXYuYXBwZW5kICc8YSByZWw9XCJwcmV2XCI+PGkgY2xhc3M9XCJwZ25fX3ByZXYtaWNvbiBpY29uLWFuZ2xlLWxlZnRcIj48L2k+PHNwYW4gY2xhc3M9XCJwZ25fX3ByZXYtdHh0XCI+JyArIHByZXZUZXh0ICsgJzwvc3Bhbj48L2E+J1xuXG4gICAgICAgIGlmICEkbmV4dE5hdi5jaGlsZHJlbigpLmxlbmd0aFxuICAgICAgICAgICRuZXh0TmF2LmFkZENsYXNzICdkaXNhYmxlZCdcbiAgICAgICAgICAkbmV4dE5hdi5hcHBlbmQgJzxhIHJlbD1cIm5leHRcIj48aSBjbGFzcz1cInBnbl9fbmV4dC1pY29uIGljb24tYW5nbGUtcmlnaHRcIj48L2k+PHNwYW4gY2xhc3M9XCJwZ25fX25leHQtdHh0XCI+TmV4dDwvc3Bhbj48L2E+J1xuXG4gICAgICAgICMgY2FsY3VsYXRlIHBnbiB3aWR0aFxuICAgICAgICBjYWxQZ25XaWR0aCgpXG5cbiAgICAgICAgIyBzaG93IHByZXYvbmV4dFxuICAgICAgICBzaG93UHJldk5leHQoKVxuXG4gICAgICAgICMgZHJhdyBtYWdpYyBsaW5lXG4gICAgICAgIG1hZ2ljRHJhdygpXG4gICAgICAgIFxuICAgICAgICAjIHdoZW4gaG92ZXJcbiAgICAgICAgJG1hZ2ljTmF2LmhvdmVyICgtPlxuICAgICAgICAgICRlbCA9ICQodGhpcylcbiAgICAgICAgICBsZWZ0UG9zID0gJGVsLnBvc2l0aW9uKCkubGVmdFxuICAgICAgICAgIG5ld1dpZHRoID0gJGVsLndpZHRoKClcbiAgICAgICAgICBcbiAgICAgICAgICAjIGFuaW1hdGUgbWFnaWMgbGluZVxuICAgICAgICAgICRtYWdpY0xpbmUuc3RvcCgpLmFuaW1hdGVcbiAgICAgICAgICAgIGxlZnQ6IGxlZnRQb3NcbiAgICAgICAgICAgIHdpZHRoOiBuZXdXaWR0aFxuICAgICAgICApLCAtPlxuICAgICAgICAgICRtYWdpY0xpbmUuc3RvcCgpLmFuaW1hdGVcbiAgICAgICAgICAgIGxlZnQ6ICRtYWdpY0xpbmUuZGF0YSgnb3JpZ0xlZnQnKVxuICAgICAgICAgICAgd2lkdGg6ICRtYWdpY0xpbmUuZGF0YSgnb3JpZ1dpZHRoJylcbiAgICAgIFxuICAgICAgICAjIyMgV2luZG93IFJlc2l6ZSBDaGFuZ2VzICMjI1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAncmVzaXplJywgLT5cbiAgICAgICAgICB1cGRhdGVQcmV2VGV4dCgpXG4gICAgICAgICAgY2FsUGduV2lkdGgoKVxuICAgICAgICAgIHNob3dQcmV2TmV4dCgpXG4gICAgICAgICAgbWFnaWNEcmF3KClcbiAgIyBFTkQgbWdQZ25hdGlvbigpXG4gICAgICBcbiAgIyBjYWxsIGZ1bmN0aW9uIGhlcmUgXG4gICQoJy5wZ24nKS5tZ1BnbmF0aW9uKClcblxuKSBqUXVlcnkiXX0=
//# sourceURL=coffeescript
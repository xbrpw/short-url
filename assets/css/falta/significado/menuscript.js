function hoverTiles(){
        var tiles = $('.button');
        tiles.hover(function(){
            tiles.removeClass('active');
            $(this).addClass('active');
        })
    }
    
$(document).ready(function() {
    hoverTiles();
  })
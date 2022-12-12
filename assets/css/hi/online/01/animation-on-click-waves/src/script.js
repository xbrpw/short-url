(function() {
    $("html").on("mousedown", function(e) {
        $("i").addClass("active").css("left", e.pageX).css("top", e.pageY);
        return $("span.animate").html("X:" + e.pageX + "px  Y:" + e.pageY);
    });

    $("i").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        return $("i").removeClass("active");
    });
  
    $('.link').on('mousedown', function(e) {
      e.stopPropagation();
    });

}).call(this);
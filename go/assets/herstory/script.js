$(window).on("load", function() {
  var dateWidth = $(".date").width(),
    activeDate = 0,
    noDates = $(".date").length;
  
  function changeDate(a) {
    if (a < 0) {
      activeDate = 0;
      return;
    }

    if (a > noDates - 1) {
      activeDate = noDates - 1;
      return;
    }

    $(".date")
      .removeClass("active sibling");
    
    $(".date:nth-child(" + (a + 1) + ")")
      .addClass("active");

    $(".date.active")
      .prev("div")
      .addClass("sibling");

    $(".dates-wrap").css(
      "transform",
      "translateX(" + -dateWidth * a + "px)"
    );
  }
  
  $(".date").on('click', function(){
     var chosen = $(this).index();
    
    if (chosen === activeDate) {
      return;
    }
    
    activeDate = chosen;
    changeDate(activeDate);
  });

  $(".controls").on("click", function() {
    var direction = parseInt($(this).attr("data-direction"), 10);

    activeDate += direction;  
    changeDate(activeDate);

  });
});
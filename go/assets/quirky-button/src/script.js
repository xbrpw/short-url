$(function() {                       //run when the DOM is ready
  $("a").click(function() {  //use a class, since your ID gets mangled
    $(this).addClass("clicked");   
    $('body').addClass("blue");
    setTimeout(function(){
         
      $('body').removeClass("blue");
    }, 2000);
    setTimeout(function(){
         
      $("a").removeClass("clicked");
    }, 4000);
  });
});


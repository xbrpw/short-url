// Selecting Sites that add/remove required
$("#your-sites input").on("click", function(){
  // If facebook or pinterest is checked, require #image-url
  if ( $("input[name='facebook']").is(":checked") || $("input[name='pinterest']").is(":checked") ) {
    $("#image-url").attr("required", "required");
  } else {
    $("#image-url").removeAttr("required");
  }    
  // If Facebook or google is checked, require #site-name
  if ( $("input[name='facebook']").is(":checked") || $("input[name='googleplus']").is(":checked") ) {
    $("#site-name").attr("required", "required");
  } else {
    $("#site-name").removeAttr("required");
  }
});

// Submitting Page Information
$("#page-info").submit(function(e){
  e.preventDefault();
  var el = $(this),
      title = encodeURIComponent(el.find($("input[name='title']")).val()),
        url = encodeURIComponent(el.find($("input[name='url']")).val()),
      description = encodeURIComponent(el.find($("textarea[name='description']")).val()),
      hashtags = encodeURIComponent(el.find($("input[name='hashtags']")).val()),
      siteName = encodeURIComponent(el.find($("input[name='site-name']")).val()),
      imageUrl = encodeURIComponent(el.find($("input[name='image-url']")).val());
  
      
  var facebook = el.find($("input[name='facebook']")).is(":checked"),
      twitter = el.find($("input[name='twitter']")).is(":checked"),
      tumblr = el.find($("input[name='tumblr']")).is(":checked"),
      pinterest = el.find($("input[name='pinterest']")).is(":checked"),
      googleplus = el.find($("input[name='googleplus']")).is(":checked"),
      reddit = el.find($("input[name='reddit']")).is(":checked"),
      email = el.find($("input[name='email']")).is(":checked");
    
  
  var code = "";
  
  if (facebook || googleplus){
    console.log("facebook or googleplus")
    code += "\n    <!--open graph tags for facebook and google+-->\n    <!--these tags go in your document head -->\n    <meta property=\"og:title\" content=\"" + title + "\">\n    <meta property=\"og:image\" content=\"" + imageUrl + "\">\n    <meta property=\"og:description\" content=\"" + description + "\">\n    <meta property=\"og:site_name\" content=\"" + siteName + "\">\n  ";
  }
  if (facebook){
    code += "                    \n    <!--facebook-->\n    <a target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=" + url + "\">Share on Facebook</a>\n";
  }
  if (twitter){  
    code += "                    \n    <!--twitter-->\n    <a target=\"_blank\" href=\"https://twitter.com/intent/tweet?url=" + url + "&amp;text=" + description + "&amp;hashtags=" + hashtags + "\">Tweet This</a>\n";
  }  
  if (tumblr){  
    code += "  \n    <!--tumblr-->\n    <a target=\"_blank\" href=\"https://www.tumblr.com/share/link?url=" + url + "&amp;name=" + title + "&amp;description=" + description + "\">Share on Tumblr</a>\n    ";
  }  
  if (pinterest){ 
    code += " \n    <!--pinterest-->\n    <a target=\"_blank\" href=\"https://www.pinterest.com/pin/create/button/?url=" + url + "&amp;media=" + imageUrl + "&amp;description=" + description + "\">Pin It</a>\n    ";
  }  
  if (googleplus){  
    code += " \n    <!--google+-->\n    <a target=\"_blank\" href=\"https://plus.google.com/share?url=" + url + "\">Share on Google +</a>\n    ";
  }
  if (reddit){  
    code += "\n    <!--reddit-->\n    <a target=\"_blank\" href=\"http://www.reddit.com/submit?url=" + url + "&amp;title=" + title + "\">Share on Reddit</a>\n    ";
  }  
  if (email){  
    code += " \n    <!--email-->\n    <a target=\"_blank\" href=\"mailto:?Subject=" + title + "&amp;body=" + description + "\">Mail This</a>\n    ";
  }
  
  console.log(code);
  
  // Update code
  $(".code-to-copy").text(code);
  
  // Update test output
  $(".code-in-action").html(code);

});
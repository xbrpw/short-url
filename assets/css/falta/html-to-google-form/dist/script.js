var formURL =
  "https://docs.google.com/forms/d/15Ts8au3uporAAOmcPJAcHTpK91t2kIAjej0djfHfxE4/formResponse?";

sendBtn.onclick = function() {
  var data = {
    "entry.779126364": document.getElementById("entry.779126364").value,
    "entry.1039583708": document.getElementById("entry.1039583708").value,
    "entry.1039271422": document.getElementById("entry.1039271422").value
  };
  $("#form").hide();
  $("#loading").show();
  postToGoogle(formURL, data);
  // loadSheet.click();
};


function postToGoogle(googleURL, data) {
  $.ajax({
    url: googleURL,
    data: data,
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function() {
        //Success message
      },
      200: function() {
        //Success Message
      }
    },

    error: function(){
      // actually throws an error, but does send properly
       $("#form").show();
       $("#loading").hide();
    },
  });
}
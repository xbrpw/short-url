var formURL =
  "https://docs.google.com/forms/d/1FAIpQLScUbWYrIwfjpxkP1tnKd0NmGEzNyawD2WeiehWmUEKZ7P6BCA/formResponse";
  

sendBtn.onclick = function() {
  var data = {
    "entry.986256362": document.getElementById("entry.986256362").value,
    "entry.1427795296": document.getElementById("entry.1427795296").value,
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
        alert("Enviado con éxito!");
      },
      200: function() {
        //Success Message
        alert("Enviado con éxito!");
      }
    },

    error: function(){
      // actually throws an error, but does send properly
       $("#form").show();
       $("#loading").hide();
    },
  });
}
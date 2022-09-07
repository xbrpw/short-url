$(document).ready(function(){
   
   
   // Firebase ref
   var ref = new Firebase("https://fbregister.firebaseio.com/users");
   
   $("#signup-form").on("submit", function(e) {
       e.preventDefault();
       var name = $("#name").val();
       var email = $("#email").val();
        
        ref.push({
            name: name,
            email: email
        });
        
        $("#signup-form").hide();
        $("#status").fadeIn(500).text("Gracias " + name + "! Seguimos en contacto ");
        //$("#status").fadeIn(500).text("Gracias " + name + "! Seguimos en contacto " + email + ".");
    });
  
});


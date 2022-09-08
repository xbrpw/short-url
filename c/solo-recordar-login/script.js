$("#loginButton").on("click", function(e) {
  
  e.preventDefault();
  
  var accountLogin = $("#accountLogin");
  
  $(this).html("Please wait ...").attr("disabled", "disabled");
  
  //hide existing errros 
  $(".form_error").css("display", "none");
  
  var loginInfo = {
    email: $.trim(accountLogin.find("#loginEmail").val()),
    password: $.trim(accountLogin.find("#loginPW").val()),
  };

  //simple validation
  var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  
  if ((loginInfo.email === '') && (loginInfo.password === '')) {
    $('#passwordError').text("Password cannot be blank").show();
    $('#emailError').text("Email cannot be blank").show();
  } else if (loginInfo.password === '') {
    $('#passwordError').text("Password cannot be blank").show();
  } else if (loginInfo.email === '') {
    $('#emailError').text("Email cannot be blank").show();
  } else if (regexEmail.test(loginInfo.email)) {
    $('#emailError').hide();
    $('#passwordError').hide();
    $(".login_phase_one").hide();
    $(".login_phase_two").fadeIn("slow");
  } else {
    $('#emailError').text("Please include a valid email address.").show();
  }

  var data = JSON.stringify(loginInfo);
  
  //posting will return a 404 in this example. Real requests will be sent to a string placed in "url"
  $.ajax({
    type: "POST",
    // url: the login endpoint
    dataType: "json",
    crossDomain: true,
    data: data,

  }).done(function(data) {

  }).fail(function(xhr) {
    document.getElementById("loginButton").disabled = false;
    $("#loginButton").html("Log In");
    $(".alert").css("display", "block");
  })
  
});

//remember me functionality. Note: saving in local storage is not a good practice
$(function() {

    if (localStorage.chkbx && localStorage.chkbx != '') {
        $('#remember_me').attr('checked', 'checked');
        $('#loginEmail').val(localStorage.usrname);
        $('#loginPW').val(localStorage.pass);
    } else {
        $('#remember_me').removeAttr('checked');
        $('#loginEmail').val('');
        $('#loginPW').val('');
    }

    $('#remember_me').click(function() {

        if ($('#remember_me').is(':checked')) {
            // save username and password
            localStorage.usrname = $('#loginEmail').val();
            localStorage.pass = $('#loginPW').val();
            localStorage.chkbx = $('#remember_me').val();
        } else {
            localStorage.usrname = '';
            localStorage.pass = '';
            localStorage.chkbx = '';
        }
    });
});
$(document).ready(function(){
	
	//$("input[type=text]").focus();
	
	$("button").click(function() {
		var nameValue = $("input[type=text]").val().trim(),
				emailValue = $("input[type=email]").val().trim(),
				nameField = $("input[type=text]"),
				emailField = $("input[type=email]");
		
		if(nameValue && emailValue) {
			$(this).remove();
			nameField.prop("disabled", true);
			emailField.prop("disabled", true);
			$("span").append(nameValue);
			$(".greeting").show(300);
		}
	});
});
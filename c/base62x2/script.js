function readURL(input) {
  if (input && input[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
    $("#result .base64").val( e.target.result )
		$("#result").slideDown();
    }
		reader.readAsDataURL(input[0]);
	}
}

$(document).ready(function(){
	$("#image_input").change(function(){
    readURL(this.files);
  });

	$(".upload").click(function(){
		$("#image_input").click();
	});

	$(".upload").on('drop', function(e) {
		e.preventDefault();
		readURL(e.originalEvent.dataTransfer.files);
	}).on('dragover', function(e){
		e.stopPropagation();
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy';
	});

	$("textarea").focus(function() {
		var $this = $(this);
		$this.select();
		$this.mouseup(function() {
			$this.unbind("mouseup");
			return false;
		});
	});
});
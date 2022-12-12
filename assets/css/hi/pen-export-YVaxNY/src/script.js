$(".progress-item").click(function(){
	var progress = (($(this).index())/($(".progress-item").length -1));
	$(".progress-item").removeClass("current complete")
	$(this).addClass("current");
	$(this).prevAll(".progress-item").removeClass("current");
	$(this).prevAll(".progress-item").addClass("complete");
	$("#progressmask").css({
		transform: "scaleX("+progress+")"
	});
	
	console.log(progress)
})
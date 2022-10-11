$(function(){
	var canvas=document.getElementById("scratch");
	var ctx=canvas.getContext("2d");
	var lastX;
	var lastY;
	var mouseX;
	var mouseY;
	var canvasOffset=$("#scratch").offset();
	var offsetX=canvasOffset.left;
	var offsetY=canvasOffset.top;
	var isMouseDown=false;

	//@khadkamhn
	$('body,html').bind('selectstart',function(){return false})
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	var generate = function(){
		ctx.globalCompositeOperation="source-over";
		ctx.beginPath();
		ctx.arc(centerX,centerY,80,0,2*Math.PI);
		//ctx.fillStyle = "#ccc";
		//Pattern
		var img = document.createElement("canvas"),
		img_ctx = img.getContext('2d'),
		x, y,
		number,
		opacity = 1;
		img.width = 45;
		img.height = 45;
		for ( x = 0; x < img.width; x++ ) {
			for ( y = 0; y < img.height; y++ ) {
				number = Math.floor( Math.random() * 80 );
				img_ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
				img_ctx.fillRect(x, y, 1, 1);
			}
		}
		var png = document.createElement("img");
		png.setAttribute('src',img.toDataURL("image/png"));
		png.setAttribute('width',45);
		png.setAttribute('height',45);
		var pat = img_ctx.createPattern(png,"repeat");
		ctx.fillStyle = pat;
		//Pattern
		ctx.fill();
		ctx.font="18px Arial";
		ctx.fillStyle = "#fff";
		ctx.fillText("SCRATCH HERE",20,100);

		var coupons = ['<b>Sorry!</b><br>Nothing is here!! :(','<b>Congrats!</b><br>Great <b>Shuffle</b>','<b>Sorry :(</b><br>Please Try Again!!','<b>Awesome!!</b><br>You got (<span style="color:#DA4453">&hearts; &hearts; &hearts;</span>) three hearts!'];
		var coupon = coupons[Math.floor(Math.random()*coupons.length)];
		$('.message').html(coupon);
	}

	generate();
	$('.coupon-create').on('click',generate);

	function handleMouseDown(e){
		mouseX=parseInt(e.clientX-offsetX);
		mouseY=parseInt(e.clientY-offsetY);
		lastX=mouseX;
		lastY=mouseY;
		isMouseDown=true;
	}
	function handleMouseUp(e){
		mouseX=parseInt(e.clientX-offsetX);
		mouseY=parseInt(e.clientY-offsetY);
		isMouseDown=false;
	}
	function handleMouseOut(e){
		mouseX=parseInt(e.clientX-offsetX);
		mouseY=parseInt(e.clientY-offsetY);
		isMouseDown=false;
	}
	function handleMouseMove(e){
		mouseX=parseInt(e.clientX-offsetX);
		mouseY=parseInt(e.clientY-offsetY);
		if(isMouseDown){
			ctx.beginPath();
			ctx.globalCompositeOperation="destination-out";
			ctx.arc(lastX,lastY,8,0,Math.PI*2,false);
			ctx.fill();
			lastX=mouseX;
			lastY=mouseY;
		}
	}
	$("#scratch").mousedown(function(e){handleMouseDown(e);});
	$("#scratch").mousemove(function(e){handleMouseMove(e);});
	$("#scratch").mouseup(function(e){handleMouseUp(e);});
	$("#scratch").mouseout(function(e){handleMouseOut(e);});
	$('.scratch').removeAttr('style');
});
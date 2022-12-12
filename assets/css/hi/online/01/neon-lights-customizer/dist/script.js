let neon_container = document.getElementById('neon_container');
let font_button=document.querySelectorAll('.fontBtn');
let font_color=document.querySelectorAll('.color');
let custom_neon_text = document.getElementById('custom_neon_text');
let custom_neon_text_value = document.getElementById('custom_neon_text_value');
let background_option=document.querySelectorAll('.background_option');
let download_image_btn = document.getElementById('download_image_btn');
let option_title=document.querySelectorAll('.option_title');
// render font family in font option
for (var i = 0;i<font_button.length;i++) {
	font_button[i].style.fontFamily=font_button[i].value;
}

// toggle dark and light mode
let toggle = document.getElementById('toggle');
let toggle_label = document.getElementById('toggle_label');
let mode;
toggle_mode();
toggle.onchange=function(){
	toggle_mode();
}

function toggle_mode(){
	if (toggle.checked) {
		mode=1;
		toggle_label.innerHTML="Dark Mode is enabled";
		document.body.style.background="#000";
		for (var i = 0;i<option_title.length;i++) {
			option_title[i].style.color="#fff";	
		}
		for (var i = 0;i<font_button.length;i++) {
			font_button[i].style.color="#fff";
		}
	}else{
		mode=0;
		toggle_label.innerHTML="Currently in Light Mode";
		document.body.style.background="#fff";
		for (var i = 0;i<option_title.length;i++) {
			option_title[i].style.color="#000";	
		}
		for (var i = 0;i<font_button.length;i++) {
			
			font_button[i].style.color="#000";
		}
	}
}

// change font family
function change_font($font,$type,$active){
	custom_neon_text_value.style.fontFamily=$font + "," + $type;
	custom_neon_text.style.fontFamily=$font + "," + $type;
	for (var i = 0;i<font_button.length;i++) {
		
			font_button[i].style.textDecoration="none";
			font_button[$active].style.textDecoration="line-through";
			
	}
}

// change font color
function change_color($active,$shadow){
	for (var i = 0;i<font_color.length;i++) {
		font_color[i].style.borderColor="#ddd";
		font_color[$active].style.borderColor="#000";
		custom_neon_text_value.style.color="#fff";
		custom_neon_text_value.style.textShadow="0 0 7px "+ $shadow +",0 0 10px " +$shadow +",0 0 21px " + $shadow +",0 0 42px "+ $shadow +",0 0 82px "+ $shadow +",0 0 92px "+ $shadow +",0 0 102px "+ $shadow +",0 0 151px "+ $shadow ;
	}
}

// change background image of neon text container
function change_bg($src,$id){
	neon_container.style.backgroundImage = "url("+ $src + ")";
	for (var i = 0;i<background_option.length;i++) {
		background_option[i].style.border="none";
		if (mode==1) {
			background_option[$id].style.border="3px solid #F748A7";
		}else{
			background_option[$id].style.border="2px solid #000";	
		}
		
	}
}

// render text from textarea
custom_neon_text.onkeyup=function(){	
	custom_neon_text_value.innerHTML=custom_neon_text.value;
}

// create link and append to download button
function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    clearDynamicLink(link); 
}

// download image
function DownloadAsImage() {
	 	html2canvas(neon_container, {allowTaint: true,useCORS: true}).then(function(canvas) {
	    var myImage = canvas.toDataURL();
	        downloadURI(myImage, "my_custom_neon.png");
	});
}
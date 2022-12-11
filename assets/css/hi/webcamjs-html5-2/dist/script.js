// Configure a few settings and attach camera

Webcam.set({
				// live preview size 
				width: 360,
        height: 640,
				// // device capture size
				// dest_width: 240,
				// dest_height: 320,
				
				// // final cropped size
				// crop_width: 240,
				// crop_height: 320,
        image_format: 'png',
  		  // flip horizontal (mirror mode) 不翻轉
				flip_horiz: false,
        constraints: {
				width: { exact: 720 },
				height: { exact: 1280 }
        }
  
	


			});
			Webcam.attach( '#my_camera' );




//	<!-- Code to handle taking the snapshot and displaying it locally -->
	
		// preload shutter audio clip
		// var shutter = new Audio();
		// shutter.autoplay = false;
		// shutter.src = navigator.userAgent.match(/Firefox/) ? 'shutter.ogg' : 'shutter.mp3';
		
		function preview_snapshot() {
			// // play sound effect
			// try { shutter.currentTime = 0; } catch(e) {;} // fails in IE
			// shutter.play();
			
			// freeze camera so user can preview current frame
			Webcam.freeze();
			
			// swap button sets
			document.getElementById('pre_take_buttons').style.display = 'none';
			document.getElementById('post_take_buttons').style.display = '';
		}
		
		function cancel_preview() {
			// cancel preview freeze and return to live camera view
			Webcam.unfreeze();
			
			// swap buttons back to first set
			document.getElementById('pre_take_buttons').style.display = '';
			document.getElementById('post_take_buttons').style.display = 'none';
		}
		
		function save_photo() {
			// actually snap photo (from preview freeze) and display it
			Webcam.snap( function(data_uri) {
				// display results in page
				document.getElementById('results').innerHTML = 
					'<h2>Here is your large, cropped image:</h2>' + 
					'<img src="'+data_uri+'"/><br/></br>' + 
					'<a href="'+data_uri+'" target="_blank">Open image in new window...</a>';
				
				// shut down camera, stop capturing
				Webcam.reset();
				
				// show results, hide photo booth
				document.getElementById('results').style.display = '';
				document.getElementById('my_photo_booth').style.display = 'none';
			} );
		}
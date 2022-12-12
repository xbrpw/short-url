var FindDifferences = function() {
  var original_canvas, modified_canvas, original_ctx, modified_ctx;
  var has_original_image = false;
  var has_modified_image = false;
  
  this.init = function() {
    var self = this;
    $("#original").change(function(){
      self.upload(this, 'original');
    });
    $("#modified").change(function(){
      self.upload(this, 'modified');
    });
  }
  
  
  this.upload = function(input, canvas_name) {
    var self = this;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      var image_width = 0;
      var image_height = 0;

      reader.onload = function (e) {
        //$('#blah').attr('src', e.target.result);
        var image = new Image();
        image.src = e.target.result;
        image.onload = function() {
          image_width = this.width;
          image_height = this.height;
          
          if (canvas_name == 'original') {
            var id = "original_canvas";
            original_canvas = document.createElement('canvas');
            original_canvas.id = "original_canvas";
            original_canvas.width = image_width;
            original_canvas.height = image_height;
            original_ctx = original_canvas.getContext("2d");
            original_ctx.drawImage(image, 0, 0);
            document.querySelectorAll(".canvases")[0].appendChild(original_canvas);
            has_original_image = true;
          } else {
            modified_canvas = document.createElement('canvas');
            modified_canvas.id = "modified_canvas";
            modified_canvas.width = image_width;
            modified_canvas.height = image_height;
            modified_ctx = modified_canvas.getContext("2d");
            modified_ctx.drawImage(image, 0, 0);
            modified_ctx.fillStyle = "red";
            document.querySelectorAll(".canvases")[0].appendChild(modified_canvas);
            has_modified_image = true;
          }
          
          
          if (has_original_image && has_modified_image) {
            self.go();
          }
        }
      }

      reader.readAsDataURL(input.files[0]);
    }
  }
  
  this.go = function() {
    var original_data = original_ctx.getImageData(0, 0, original_canvas.width, original_canvas.height).data;
    var modified_data = modified_ctx.getImageData(0, 0, original_canvas.width, original_canvas.height).data;
    
    var errors = this.checkData(original_data, modified_data);
    this.drawErrors(errors);
  }
  
  this.checkData = function(arr_1, arr_2) {
    var errors = [];
    for (var i=0, l=arr_1.length; i < l; i+=4) {
      if(arr_1[i] - arr_2[i] > 30 || arr_1[i] - arr_2[i] < -30) {
        errors.push(i);
      }
    }
    return errors;
  }
  
  this.drawErrors = function( errors ) {
    for (var i = 0, l = errors.length; i < l; i++) {
      var ce = errors[i] / 4;
      var posX = ce % original_canvas.width;
      var posY = (Math.floor(ce / original_canvas.width) * original_canvas.width) / original_canvas.width;
      modified_ctx.fillRect(posX, posY, 1, 1);
    }
  }
  
  this.init();
}


var finDifferences = new FindDifferences();
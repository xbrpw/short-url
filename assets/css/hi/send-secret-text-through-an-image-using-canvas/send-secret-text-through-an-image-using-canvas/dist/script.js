var Encoder = function() {
  this.message = null;
  this.canvas = document.getElementById('encryptCanvas');
  this.ctx = null;
  
  this.init = function() {
    var message = document.getElementById("input-msg").value;
    this.encodeTextToCanvas( message )
  };
  
  this.encodeTextToCanvas = function( message ) {
    var hexArray = [];
    for (var i = 0, l = message.length ; i < l ; i++ ) {
       hexArray.push(message.charCodeAt(i).toString(16));
    }
    this.createColors( hexArray );
  }
  
  this.createColors = function( hexArray ) {
    var colors = [];
    for ( var i = 0 , l = hexArray.length ; i < l ; i += 3 ) {
      hexArray[i+1] = hexArray[i+1] == undefined ? 20 : hexArray[i+1];
      hexArray[i+2] = hexArray[i+2] == undefined ? 20 : hexArray[i+2];
      colors.push("#" + hexArray[i] + hexArray[i + 1] + hexArray[i + 2])
    }
    this.createCanvas( colors );
    this.renderToCanvas( colors );
  }
  
  this.createCanvas = function( colors ) {
    var container = document.getElementById("canvas-container");
    this.canvas = this.canvas || document.createElement('canvas');
    this.canvas.id     = "encryptCanvas";
    this.canvas.width  = 10;
    this.canvas.height = (Math.floor(colors.length / 10) + 1);
    this.ctx = this.canvas.getContext("2d");
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    container.appendChild(this.canvas);

  }
  /** remember to handle undefined*/
  this.renderToCanvas = function( colors ) {
    for ( var i = 0 , l = colors.length ; i < l ; i++ ) {
      this.ctx.fillStyle = colors[i];
      this.ctx.fillRect((i % 10), (Math.floor( i / 10)), 1, 1 );
    }
    var url = this.canvas.toDataURL();
    document.getElementById("result").src = url;
    var downloadIt = document.getElementById("download")
    downloadIt.classList.remove("inactive");
    downloadIt.href = url;
  }
  
  this.init();
};

function cancelEvent(event) {
   if (event.preventDefault) { 
      event.preventDefault();
   } else {
      event.returnValue = false; 
   }
}

var go = document.getElementById("go");
go.onmousedown = function(e) {
  var encoder = new Encoder();
  alert('image generated');
  cancelEvent(e)
};



var Decoder = function( img ) {

  this.init = function() {
    var wholeText = [];
    this.createCanvas();
    var colors = this.getColors();
    for ( var i = 0 , l = colors.length ; i <l ; i++ ) {
      var letter1 = colors[i].substr(0,2);
      var letter2 = colors[i].substr(2,2);
      var letter3 = colors[i].substr(4,2);
      wholeText.push(this.convertToASCII(letter1));
      wholeText.push(this.convertToASCII(letter2));
      wholeText.push(this.convertToASCII(letter3));
      //
    }
    wholeText = wholeText.join('');
    document.getElementById("output-text").innerHTML = wholeText;
  }
  
  this.convertToASCII = function(hex) { 
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
  
  this.createCanvas = function() {
    var container = document.getElementById("decode-canvas-container");
    this.canvas = this.canvas || document.createElement('canvas');
    this.canvas.id     = "decryptCanvas";
    this.canvas.width  = img.width;
    this.canvas.height = img.height;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.drawImage(img,0,0,img.width, img.height);
    container.appendChild(this.canvas);
  }
  
  this.getColors = function() {
    var colors = [];
    
    for (var i = 0 ; i < this.canvas.width * this.canvas.height  ; i++ ) {
      var currentColor = this.ctx.getImageData( i % 10, Math.floor(i / 10), 1, 1).data;
      var currentHex = this.convertToHex(currentColor[0], currentColor[1], currentColor[2])
      colors.push(currentHex);
    }
    
    return colors;
  }
  
  this.convertToHex = function(r, g, b) {
        var rgb = b | (g << 8) | (r << 16);
        return (0x1000000 | rgb).toString(16).substring(1);
  }
  
  this.init();
}

var input = document.getElementById("file_input")
input.addEventListener('change', function(e) {
  var img = new Image;
  img.src = URL.createObjectURL(e.target.files[0]);
  img.onload = function() {
    var decoder = new Decoder( img );
  }
});

document.getElementById('sample-title').onmousedown = function() {
  document.getElementById("input-msg").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}
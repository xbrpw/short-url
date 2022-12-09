(function($) {

  var $image = $('#imageInput'),
      $reset = $('.js-reset'),
      $download = $('.js-download'),
      $photo = $('.photo'),
      $placeholder = $('.placeholder'),
      $effectCode = $('.effect-code'),
      $effect = $('.effects__item'),
      $effectImg = $('.effects__img'),
      $codeBtn = $('.code__btn'),
      $copy = $('.js-copy'),
      $css = $('.js-css'),
      $scss = $('.js-scss'),
      $copyText = $('.js-copy-text'),
      currentEffect = null,
      imageData = 'http://tools.css-tricks.ir/image-effects/img/bg.jpg';
      imageWidth = null;
      imageHeight = null;

  var sheet = (function() {
    var style = document.createElement("style");

    // WebKit hack :(
    style.appendChild(document.createTextNode(""));

    document.head.appendChild(style);

    return style.sheet;
  })();      

  var cleanRules = function() {
    var i = sheet.cssRules.length - 1 ;

    while(i >= 0){
      
      if("deleteRule" in sheet) { sheet.deleteRule(i); }
      else if("removeRule" in sheet) { sheet.removeRule(i); }
      
      i--;
      
    }
  }


  var setImageSrc = function(imageData) {
    $placeholder.attr('src', imageData);
    imageWidth = $placeholder.get(0).naturalWidth;
    imageHeight = $placeholder.get(0).naturalHeight;
  }

  $image.change(function(){
    var im = document.querySelector("input[type=file]").files[0];
    var file = new FileReader;
    if (im) {
      file.readAsDataURL(im);
    } else {
      alert("pick a photo");
    }

    file.onloadend = function() {
      imageData = file.result;
      cleanRules();
      insertRules(imageData);
      $reset.show();
      $download.show();
      setImageSrc(imageData);
    }

    var insertRules = function(image) {      
      sheet.insertRule('.photo.none-effect { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.none-effect { background-image: url(' + image + ') !important}', 0);
      

      sheet.insertRule('.photo.pencil-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.pencil-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.watercolor-effect { background-image: url(' + image + ')}', 0);
      sheet.insertRule('.effects__img.watercolor-effect { background-image: url(' + image + ')}', 0);
      sheet.insertRule('.photo.watercolor-effect::before { background-image: url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.watercolor-effect::before { background-image: url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.photo.watercolor-effect::after { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.watercolor-effect::after { background-image: url(' + image + ') !important}', 0);

      sheet.insertRule('.photo.emboss-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.emboss-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.colored-pencil-effect { background-image: url(' + image + ')}', 0);
      sheet.insertRule('.effects__img.colored-pencil-effect { background-image: url(' + image + ')}', 0);
      sheet.insertRule('.photo.colored-pencil-effect::before { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.colored-pencil-effect::before { background-image: url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.chalkboard-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.chalkboard-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);

      sheet.insertRule('.photo.colored-chalkboard-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.colored-chalkboard-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.airbrush-effect { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.airbrush-effect { background-image: url(' + image + ') !important}', 0);

      sheet.insertRule('.photo.hallucination-effect { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.hallucination-effect { background-image: url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.flannel-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.flannel-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.low-ink-x-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.low-ink-x-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.low-ink-y-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.low-ink-y-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);

  
      sheet.insertRule('.photo.collage-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + '), url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.collage-effect { background-image: url(' + image + '), url(' + image + '), url(' + image + '), url(' + image + '), url(' + image + '), url(' + image + ') !important}', 0);

      
      sheet.insertRule('.photo.mosaic-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.mosaic-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);
       
      sheet.insertRule('.photo.photo-border-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.photo-border-effect { background-image: url(' + image + '), url(' + image + ') !important}', 0);
 
    
      sheet.insertRule('.photo.infrared-effect { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.infrared-effect { background-image: url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.night-vision-effect { background-image: url(' + image + '), radial-gradient(#0F0, #000), repeating-linear-gradient(transparent 0, rgba(0, 0, 0, 0.1) 2.5px, transparent 5px) !important}', 0);
      sheet.insertRule('.effects__img.night-vision-effect { background-image: url(' + image + '), radial-gradient(#0F0, #000), repeating-linear-gradient(transparent 0, rgba(0, 0, 0, 0.1) 2.5px, transparent 5px) !important}', 0);

      sheet.insertRule('.photo.warhol-effect { background-image: linear-gradient(#14EBFF 0, #14EBFF 50%, #FFFF70 50%, #FFFF70 100%), linear-gradient(#FF85DA 0, #FF85DA 50%, #AAA 50%, #AAA 100%), url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.warhol-effect { background-image: linear-gradient(#14EBFF 0, #14EBFF 50%, #FFFF70 50%, #FFFF70 100%), linear-gradient(#FF85DA 0, #FF85DA 50%, #AAA 50%, #AAA 100%), url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.selective-color-effect { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.selective-color-effect { background-image: url(' + image + ') !important}', 0);

      
      sheet.insertRule('.photo.mirror-x-effect { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.mirror-x-effect { background-image: url(' + image + ') !important}', 0);


      sheet.insertRule('.photo.mirror-y-effect { background-image: url(' + image + ') !important}', 0);
      sheet.insertRule('.effects__img.mirror-y-effect { background-image: url(' + image + ') !important}', 0);
    }
  });


  $reset.on('click', function(){
    cleanRules();
    $(this).hide();
    $download.hide();
    setImageSrc('http://tools.css-tricks.ir/image-effects/img/bg.jpg');
  });

  $effect.on('click', function(){
    $effect.removeClass('selected');
    $(this).addClass('selected');
    ef = this.getAttribute("data-name");
    currentEffect = ef.replace("-effect", "");
    $effectCode.hide();
    $('#'+currentEffect).show();
    $('#'+currentEffect+' .css').addClass('is-selected');
    $copy.attr( "data-clipboard-target", "#"+currentEffect+"_css" );
    $scss.removeClass('is-selected');
    $css.addClass('is-selected');

    $photo.removeClass();
    $photo.addClass('photo ' + ef);
  });

  $css.on('click', function(e){
    e.preventDefault();
    $codeBtn.removeClass('is-selected');
    $css.addClass('is-selected');
    $('#'+currentEffect+' .scss').hide();
    $('#'+currentEffect+' .scss').removeClass('is-selected');
    $('#'+currentEffect+' .css').show();    
    $('#'+currentEffect+' .css').addClass('is-selected');
    $copy.attr( "data-clipboard-target", "#"+currentEffect+"_css" );
  });

  $scss.on('click', function(e){
    e.preventDefault();
    $codeBtn.removeClass('is-selected');
    $scss.addClass('is-selected');
    $('#'+currentEffect+' .css').hide();
    $('#'+currentEffect+' .css').removeClass('is-selected');
    $('#'+currentEffect+' .scss').show();    
    $('#'+currentEffect+' .scss').addClass('is-selected');
    $copy.attr( "data-clipboard-target", "#"+currentEffect+"_scss" );
  });

  /**
   * Copy to clipboard
   */
  var clipboard = new Clipboard('.js-copy');

  clipboard.on('success', function(e) {
    $copyText.text('Copied!');
    setTimeout(function() {
      $copyText.text('Copy');
      e.clearSelection();
      
    }, 2000)
  });  


  var getEffectStyle = function () {

    switch (currentEffect) {
      case 'pencil': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;position:relative;background-size: cover;background-position: center;background-image: url('+imageData+'), url('+imageData+');background-blend-mode: difference;background-position: calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px);filter: brightness(2) invert(1) grayscale(1);box-shadow: inset 0 0 0 1px black;}';
      break;

      case 'watercolor': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;position: relative;overflow: hidden;background-image:url('+imageData+');background-size:cover;background-position:center}.final:after,.final:before{display:block;content:"";position:absolute;top:0;left:0;right:0;bottom:0;background-size:cover}.final:before{background-image:url('+imageData+'),url('+imageData+');background-blend-mode:difference;background-position:calc(50% - 1px) calc(50% - 1px),calc(50% + 1px) calc(50% + 1px);filter:brightness(2) invert(1) grayscale(1);box-shadow:inset 0 0 0 1px #000}.final:after{background-image:url('+imageData+');background-position:center;mix-blend-mode:multiply;filter:brightness(1.3) blur(2px) contrast(2);}';
      break;

      case 'emboss': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-size: cover;background-position: center;background-image: url('+imageData+'), url('+imageData+'), url('+imageData+');background-blend-mode: difference, screen;background-position: calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px), center;filter: brightness(2) invert(1) grayscale(1);}';
      break;

      case 'colored-pencil': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: url('+imageData+');background-size: cover;background-position: center;position: relative;}.final:before, .final:after {display: block;content: "";position: absolute;top: 0;left: 0;right: 0;bottom: 0;background-size: cover;box-shadow: inset 0 0 0 1px black;}.final:before {background-image: url('+imageData+'), url('+imageData+');background-blend-mode: difference;background-position: calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px);filter: brightness(2) invert(1) grayscale(1);}.final:after {background: inherit;mix-blend-mode: color;}';
      break;

      case 'chalkboard': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-size: cover;background-image: url('+imageData+'), url('+imageData+');background-blend-mode: difference;background-position: calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px);filter: brightness(1.5) grayscale(1);}';
      break;

      case 'colored-chalkboard': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: url('+imageData+'), url('+imageData+'), url('+imageData+');background-size: cover;background-position: calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px), center;background-blend-mode: color, difference;filter: brightness(2);}';
      break;     

      case 'airbrush': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: url('+imageData+');background-size: cover;background-position: center;position: relative;overflow: hidden;}.final:after {display: block;content: "";position: absolute;top: 0;left: 0;right: 0;bottom: 0;background: inherit;filter: brightness(1.5) saturate(100) blur(5px) contrast(5);mix-blend-mode: multiply;}';
      break;     

      case 'hallucination': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: url('+imageData+');background-size: cover;background-position: center;position: relative;overflow: hidden;background-color: magenta;background-blend-mode: screen;}.final:before, .final:after {display: block;content: "";position: absolute;top: 0;left: 0;right: 0;bottom: 0;background: inherit;mix-blend-mode: multiply;transform: scale(1.05);}.final:before {background-color: yellow;background-blend-mode: screen;transform-origin: top left;}.final:after {background-color: cyan;background-blend-mode: screen;transform-origin: bottom right;}';
      break;     

      case 'flannel': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: url('+imageData+'), url('+imageData+'), url('+imageData+');background-position: center;background-size: 100%, 100000% 100%, 100% 100000%;background-blend-mode: overlay;}';
      break;     

      case 'low-ink-x': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-position: center;background-image: url('+imageData+'), url('+imageData+'), url('+imageData+');background-size: 100% 100%, 10000% 100%;background-blend-mode: screen, overlay;}';
      break;     

      case 'low-ink-y': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-position: center;background-image: url('+imageData+'), url('+imageData+'), url('+imageData+');background-size: 100% 100%, 100% 1000%;background-blend-mode: screen, overlay;}';
      break;     

      case 'collage': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: url('+imageData+'), url('+imageData+'), url('+imageData+'), url('+imageData+'), url('+imageData+'), url('+imageData+');background-size: 200%, 80%, 60%, 50%, 40%, 100%;background-position: 50%, 80%, 30%, 0;background-blend-mode: overlay;background-repeat: no-repeat;}';
      break;     

      case 'mosaic': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: url('+imageData+'), url('+imageData+');background-size: cover, 5% 5%;background-position: center;background-blend-mode: overlay;}';
      break;     

      case 'photo-border': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: url('+imageData+'), url('+imageData+');background-position: center;background-size: 60%, 20%;background-repeat: no-repeat, repeat;}';
      break;     

      case 'infrared': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: url('+imageData+');background-size: cover;background-position: center;filter: hue-rotate(180deg) saturate(2);}';
      break;     

      case 'night-vision': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: url('+imageData+'), radial-gradient(#0F0, #000), repeating-linear-gradient(transparent 0, rgba(0, 0, 0, 0.1) 2.5px, transparent 5px);background-size: cover;background-position: center;background-blend-mode: overlay;}';
      break;     

      case 'warhol': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: linear-gradient(#14EBFF 0, #14EBFF 50%, #FFFF70 50%, #FFFF70 100%), linear-gradient(#FF85DA 0, #FF85DA 50%, #AAA 50%, #AAA 100%), url('+imageData+');background-size: 50% 100%, 50% 100%, 50% 50%;background-position: top left, top right;background-repeat: no-repeat, no-repeat, repeat;background-blend-mode: color;}';
      break;     

      case 'selective-color': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: url('+imageData+');background-size: cover;background-position: center;position: relative;}.final:before, .final:after {   display: block;   content: "";   position: absolute;   top: 0;   left: 0;   right: 0;   bottom: 0;   background: inherit;   background-color: red;   background-blend-mode: screen;   mix-blend-mode: color;filter: brightness(3);}';
      break;     

      case 'mirror-x': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: url('+imageData+');background-size: cover;background-position: center;position: relative;}.final:before, .final:after {   display: block;   content: "";   position: absolute;   top: 0;   bottom: 0;   background: inherit;}.final:before {   left: 0;   right: 50%; transform: scaleX(-1);}.final:after {   left: 50%;   right: 0;}';
      break;     

      case 'mirror-y': return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: url('+imageData+');background-size: cover;background-position: center;position: relative;}.final:before, .final:after {display: block;content: "";position: absolute;left: 0;right: 0;background: inherit;}.final:before {top: 0;bottom: 50%;transform: scaleY(-1);}.final:after {top: 50%;bottom: 0;}';
      break;     

      default:  return '.final{ height:'+imageHeight+'px; width:'+imageWidth+'px;background-image: url('+imageData+');}';
    }
  }


  $download.on('click', function() {
    function toDataUrl(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
          callback(reader.result);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.send();
    }


    var canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.width = imageWidth;
    canvas.height = imageHeight;

    // document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');

    var data = '<svg xmlns="http://www.w3.org/2000/svg" width="'+imageWidth+'" height="'+imageHeight+'">' +
               '<foreignObject width="'+imageWidth+'" height="'+imageHeight+'px">' +
               '<div style="width: '+imageWidth+'px; height:'+imageHeight+'px" xmlns="http://www.w3.org/1999/xhtml">' +
               '<style>'+getEffectStyle()+'</style>' +
                 '<div class="final"></div>' + 
               '</div>' +
               '</foreignObject>' +
               '</svg>';

    var DOMURL = window.URL || window.webkitURL || window;

    var img = new Image();
    var svg = new Blob([data], {type: 'image/svg+xml'});
    var url = DOMURL.createObjectURL(svg);

    img.onload = function () {
      DOMURL.revokeObjectURL(url);
      ctx.drawImage(img, 0, 0);      
      var dataURL = canvas.toDataURL("image/png");          

      var link = document.createElement('a');
          link.download = 'hola-'+currentEffect+'.png';
          link.href = dataURL;
          link.click();       
    };

    toDataUrl(url, function(base64Img) {
      img.src = base64Img;      
    });
  });


})(jQuery);
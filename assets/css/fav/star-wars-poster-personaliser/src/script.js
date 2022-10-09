const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const hint = document.getElementById('hint')

const anchor = document.getElementById('download');
anchor.addEventListener('click', () => {
  anchor.href = canvas.toDataURL()
})


const layerBottom = new Image();
const layerTop = new Image();

canvas.width = 600;
canvas.height = 900;

let videoSize = {
  width: 0,
  height: 0
};

console.clear();

(function() {
  if (window.location.protocol !== "https:") {
    document.body.innerHTML = "Must be https.";
    return;
  }
  
  // TODO: Update with this new method:
  // const getCam = navigator.mediaDevices.getUserMedia();
  
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  if (!navigator.getUserMedia) {
    return false;
  }

  var width = canvas.width,
    height = canvas.height;

  const video = document.createElement("video");
  // track;
  // const video = document.querySelector('video');
  let track, loopFrame;
  video.setAttribute("autoplay", true);

  video.addEventListener("loadedmetadata", function() {
    videoSize.width = video.videoWidth;
    videoSize.height = video.videoHeight; // 600 x 450?
    console.log("loadedmetadata", video.videoWidth, video.videoHeight);
    // width = canvas.width = video.videoWidth;
    // height = canvas.height = video.videoHeight;
    startLoop();
  });

  function desaturate() {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height),
      pixels = imageData.data,
      i,
      l,
      r,
      g,
      b,
      a,
      average;

    for (i = 0, l = pixels.length; i < l; i += 4) {
      a = pixels[i + 3];
      if (a === 0) {
        continue;
      } // skip if pixel is transparent

      r = pixels[i];
      g = pixels[i + 1];
      b = pixels[i + 2];

      average = ((r + g + b) / 3) >>> 0; // quick floor
      pixels[i] = pixels[i + 1] = pixels[i + 2] = average;
    }

    ctx.putImageData(imageData, 0, 0);
  }

  function colorize(color, alpha) {
    ctx.save();
    ctx.globalCompositeOperation = "source-atop";
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // reset
    // ctx.globalCompositeOperation = "source-over";
    ctx.globalCompositeOperation = "color-dodge";
    ctx.globalAlpha = 1.0;
    ctx.restore();
  }
  function getWebcam() {
    console.log("getting webcam");
    navigator.getUserMedia(
      { video: true, audio: false },
      function(stream) {
        hint.innerHTML = "Click to save the poster"
        video.srcObject = stream;
        // URL.createObjectURL
        // video.src = URL.createObjectURL(stream);
        // track = stream.getTracks()[0];
      },
      function(e) {
        console.error("Rejected!", e);
      }
    );
  }

  function loop() {
    loopFrame = requestAnimationFrame(loop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    // ctx.globalAlpha = 1;
    // videoSize.width
    // videoSize.height
    ctx.drawImage(layerBottom, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = .5;
    ctx.drawImage(video, -videoSize.width * 0.5, -videoSize.height * 0.25, videoSize.width * 2, videoSize.height * 2);
    desaturate();
    colorize('#0d1e42', 0.5);
    ctx.restore();
    ctx.drawImage(layerTop, 0, 0, canvas.width, canvas.height);
  }

  function startLoop() {
    loopFrame = loopFrame || requestAnimationFrame(loop);
  }
  // getWebcam();

  layerBottom.crossOrigin = "Anonymous";
  layerTop.onload = getWebcam;
  layerBottom.src =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/159368/starwars.jpg";
  layerTop.crossOrigin = "Anonymous";
  layerTop.src =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/159368/starwars-top.png?v=1000";
})();

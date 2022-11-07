var video = $("#videoElem");
var webcamJscii = null;
var dotsPerRow = 150;

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      video[0].srcObject = stream;
      // example using webrtc media stream in video element
      var vidWidth = video.outerWidth();
      console.log("vidWidth: " + vidWidth);
      webcamJscii = new Jscii({
        width: dotsPerRow,
        container: document.getElementById("asciiElem"),
        // interval: 200,
        el: document.getElementById("videoElem"),
        webrtc: true
        // purpgreen: true
      });
    })
    .catch(function (err0r) {
      console.log("Algo esta mal, vámos de nuevo!", err0r);
    });
}
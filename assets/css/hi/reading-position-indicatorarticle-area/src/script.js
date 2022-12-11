var ReadingPositionIndicator = window.ReadingPositionIndicator;
var rpi;
setTimeout(function waitUntilDomIsReadyLoadingCustomFontsMightOffsetThis() {
  rpi = new ReadingPositionIndicator({
    rpiArea: "[data-rpi-area]", // optional
    progressBar: {
      // optional
      show: true,
      color: "rgba(0, 120, 120, .5)"
    },
    percentage: {
      // optional
      show: true,
      displayBeforeScroll: false,
      opacity: 0.3,
      color: "#000"
    }
  }).init();
}, 500);
/* Wait until DOM has fully rendered the rpiArea to get the calculations correct. 
If rpiArea is not used, then this should not be important. */

// rpi.destroy(); // use when to be removed
// rpi.update(); // optional force update, usage example: if you have updated the DOM and need to refresh the indicator

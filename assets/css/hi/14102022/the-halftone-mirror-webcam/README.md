# The Halftone Mirror 🔮 (Webcam)

A Pen created on CodePen.io. Original URL: [https://codepen.io/tomhermans/pen/GRMPPBN](https://codepen.io/tomhermans/pen/GRMPPBN).

This effect is achieved in the following way:
1. Offscreen video element that loads up with the user's webcam stream.
2. JS creates a temporary canvas element representing the current frame of the video as an image.
3. JS converts the image to ASCII (uses http://enotionz.github.com/jscii/)
4. A custom font is used for the ASCII output, rendering circular glyphs instead of the usual text.
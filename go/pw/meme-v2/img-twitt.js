let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = 1300;
canvas.height = 850;

const wrapText = function(ctx, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';
    let testLine = '';
    let wordArray = [];
    let totalLineHeight = 0;
    for(var n = 0; n < words.length; n++) {
        testLine += `${words[n]} `;
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            wordArray.push([line, x, y]);
            y += lineHeight;
            totalLineHeight += lineHeight;
            line = `${words[n]} `;
            testLine = `${words[n]} `;
        }
        else {
            line += `${words[n]} `;
        }
        if(n === words.length - 1) {
            wordArray.push([line, x, y]);
        }
    }
    return [ wordArray, totalLineHeight ];
}

// Add gradient
let grd = ctx.createLinearGradient(0, 853, 1352, 0);
grd.addColorStop(0, '#00a0ff');
grd.addColorStop(1, '#12cba6');
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1342, 853);

// Write text
ctx.fillStyle = 'white';
ctx.font = '95px Inter';
ctx.fillText('👍', 85, 700);

// More text
ctx.font = '700 95px Inter';
ctx.fillStyle = 'white';
let wrappedText = wrapText(ctx, "memeGenerator! ", 85, 753, 1200, 100);
wrappedText[0].forEach(function(item) {
    ctx.fillText(item[0], item[1], item[2] - wrappedText[1] - (200)); // 200 is height of emoji
})

// And more
ctx.font = '200 50px Inter';
ctx.fillStyle = 'rgba(255,255,255,0.8)';
ctx.fillText("Twittbanner v1.1", 85, 553 - wrappedText[1] - 100); // 853 - 200 for emoji, -100 for line height of 1

document.getElementById('download').addEventListener('click', function(e) {
  let canvasUrl = canvas.toDataURL("image/jpeg", 0.5);
  console.log(canvasUrl);
  const createEl = document.createElement('a');
  createEl.href = canvasUrl;
  createEl.download = "download-this-canvas";
  createEl.click();
  createEl.remove();
});
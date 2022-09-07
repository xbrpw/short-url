const timestamp = document.getElementById("timestamp");
const postText = document.getElementById("post-text");
const postUrl = document.getElementById("post-url");
const postImage = document.getElementById("post-image");
const code = document.getElementById("code");

const params = new URLSearchParams(location.search);
postText.value = params.get("t") || "";

render();

postText.addEventListener("input", render);
postUrl.addEventListener("input", render);
postImage.addEventListener("input", render);

function render() {
  const time = Date.now();
  timestamp.innerText = time;
  const text = postText.value;
  const url = postUrl.value;
  const image = postImage.checked;
  const urlString = url ? `\n  "url": "${url}",` : "";
  const imageString = image ? `\n  "image": {
    "url": "https://www.xbr.pw/image.jpg",
    "alt": "Titulo descriptivo de la imagen",
    "height": 100,
    "width": 100,
  },` : "";
  code.innerHTML = `{
  "text": "${text}",${urlString}${imageString}
  "time": ${time}
}`;
}
const _id = e => document.getElementById(e),
generate = _id("generate"),
output = _id("output"),
header = _id("header"),
paragrahps = _id("paragrahps"),
size = _id("size"),
decorate = _id("decorate"),
link = _id("link"),
ul = _id("ul"),
ol = _id("ol"),
dl = _id("dl"),
bq = _id("bq"),
code = _id("code"),
prude = _id("prude"),
text = _id("text"),
allcaps = _id("allcaps");

function generateLink() {
  let a = `https://loripsum.net/api/${header.checked ? "headers/" : ""}${
  paragrahps.value ? paragrahps.value + "/" : "1/"
  }${size.value ? size.value + "/" : "/"}${decorate.checked ? "decorate/" : ""}${
  link.checked ? "link/" : ""
  }${ul.checked ? "ul/" : ""}${ol.checked ? "ol/" : ""}${
  dl.checked ? "dl/" : ""
  }${bq.checked ? "bq/" : ""}${code.checked ? "code/" : ""}${
  text.checked ? "plaintext/" : ""
  }${prude.checked ? "prude/" : ""}${allcaps.checked ? "allcaps/" : ""}`.trim();
  output.src = a;
}
generateLink();
generate.addEventListener("click", e => generateLink(), false);
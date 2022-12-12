// console.clear();

[...document.querySelectorAll("[data-size]")].forEach(async (el) => {
  let img = el.querySelector("img");
  let url = img.src;

  let filesize = await fetch(url, { mode: "cors" })
    .then((response) => response.blob())
    .then((blob) => Math.round(blob.size / 10) / 100);

  el.dataset.dimensions = `${img.naturalWidth}x${img.naturalHeight}`;
  el.dataset.size = `${filesize}kb`;
  img.title = url;
});

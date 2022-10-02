// Layout will not be affected after remove below javascript code

// Handle Image Gallery
const galleryMask = document.querySelector(".gallery-mask");
const maskImage = document.querySelector(".mask-image");
const galleryImgs = document.querySelectorAll(".image-item");

galleryMask.addEventListener("click", () => {
	galleryMask.classList.add("mask-off");
});

galleryImgs.forEach((item) => {
	item.addEventListener("click", () => {
		let styleValue = item.getAttribute("style");
		maskImage.setAttribute(
			"src",
			styleValue.slice(styleValue.indexOf(": url(") + 7, -3)
		);
		galleryMask.classList.remove("mask-off");
	});
});

// Handle Publish Date
const dateData = document.getElementById("dateData");
const sinceData = document.getElementById("sinceData");
let publishDate = "2022-04-26";

dateData.innerHTML = moment(publishDate).format("LL");
sinceData.innerHTML = moment(publishDate).fromNow();
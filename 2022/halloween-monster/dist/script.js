//cpc-happy-halloween codepenchallenge

const params = new URLSearchParams(window.location.search);
const sliderId = 0;
const nameInput = document.getElementById("nameInput");
const authorInput = document.getElementById("authorInput");
const link = document.getElementById("link");
const name = document.getElementById("name");
const text = document.getElementById("text");
const author = document.getElementById("author");
const gift = document.getElementById("gift");
const card = document.getElementById("card");

setTimeout(function () {
	card.classList.add("active");
}, 1000);
const slides = [
	"https://github.com/AnnaBaturaS/3d/blob/cb2db6900209dc320c67b952f34715576ce00484/img/Brawada_3D_cute_pink_monster.png?raw=true",
	"https://github.com/AnnaBaturaS/3d/blob/cb2db6900209dc320c67b952f34715576ce00484/img/Brawada_3D_cute_aqua_monster.png?raw=true",
	"https://github.com/AnnaBaturaS/3d/blob/cb2db6900209dc320c67b952f34715576ce00484/img/Brawada_3D_cute_green_monster.png?raw=true",
	"https://github.com/AnnaBaturaS/3d/blob/cb2db6900209dc320c67b952f34715576ce00484/img/Brawada_3D_cute_fluffy_monster.png?raw=true",
	"https://github.com/AnnaBaturaS/3d/blob/cb2db6900209dc320c67b952f34715576ce00484/img/Brawada_3D_cute_blue_monster.png?raw=true",
	"https://github.com/AnnaBaturaS/3d/blob/cb2db6900209dc320c67b952f34715576ce00484/img/Brawada_3D_cute_yellow_monster.png?raw=true"
];

const status = params.get("status");
if (status === "sent") {
	card.classList.add("sent-off");
	console.log(params.get("name"));
	name.innerHTML = params.get("name") || "dear friend";
	author.innerHTML = params.get("author") || "Brawada";
	const sliderId = +params.get("slider_id") || 0;
	text.src = slides[sliderId];
} else {
	const slideWrapper = document.getElementById("wrapper");
	slides.forEach((slideText) => {
		const swiperSlide = document.createElement("div");
		swiperSlide.setAttribute("class", "swiper-slide");
		const slide = document.createElement("img");
		slide.setAttribute("class", "m-slide");
		slide.src = slideText;
		swiperSlide.appendChild(slide);
		slideWrapper.appendChild(swiperSlide);
	});

	const mySwiper = new Swiper(".swiper-container", {
		grabCursor: true,
		mousewheel: true,
		speed: 600,
		parallax: true,
		direction: "horizontal",

		centeredSlides: true,
		slidesPerView: "auto",
		initialSlide: sliderId,

		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		breakpoints: {
			1024: {
				direction: "vertical"
			}
		}
	});
	mySwiper.on("slideChange", function () {
		console.log("slide changed");
	});
	mySwiper.slideTo(1, 0);

	function stateChange() {
		const name = encodeURIComponent(nameInput.value);
		const author = encodeURIComponent(authorInput.value);
		const index = mySwiper.realIndex;
		//link.href = `https://codepen.io/Anna_Batura/full/eYKpvWv?name=${name}&author=${author}&slider_id=${index}&status=sent`;
		link.href = `https://www.xbr.pw/regalos/monster/eYKpvWv?name=${name}&author=${author}&slider_id=${index}&status=sent`;
	}

	mySwiper.on("slideChange", stateChange);
	nameInput.addEventListener("input", stateChange);
	authorInput.addEventListener("input", stateChange);
}

gift.addEventListener("click", () => {
	gift.classList.add("active-monster");
});
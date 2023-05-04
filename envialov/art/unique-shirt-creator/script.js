$(".textiles__option").on("click", function () {
	$(".textiles__option").removeClass("active");
	$(this).addClass("active");
	if ($(this).hasClass("textiles__option--clear")) {
		$(".shirt__overlay").fadeOut("fast");
	} else {
		const pattern = $(this).find("img").attr("src");
		if ($(".shirt__overlay:visible").length) {
			$(".shirt__overlay__pattern").fadeOut("fast", function () {
				$(".shirt__overlay__pattern")
					.css("background-image", "url(" + pattern + ")")
					.fadeIn("slow");
			});
		} else {
			$(".shirt__overlay__pattern").css(
				"background-image",
				"url(" + pattern + ")"
			);
			$(".shirt__overlay").fadeIn("fast");
		}
	}
});

const rando = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createRandomPatterns = (theId) => {
	let R2R = rando(-50, 50) / 10;
	let G2R = rando(-50, 50) / 10;
	let B2R = rando(-50, 50) / 10;
	let A2R = rando(-50, 50) / 10;
	let ROff = rando(-50, 50) / 10;
	let R2G = rando(-50, 50) / 10;
	let G2G = rando(-50, 50) / 10;
	let B2G = rando(-50, 50) / 10;
	let A2G = rando(-50, 50) / 10;
	let GOff = rando(-50, 50) / 10;
	let R2B = rando(-50, 50) / 10;
	let G2B = rando(-50, 50) / 10;
	let B2B = rando(-50, 50) / 10;
	let A2B = rando(-50, 50) / 10;
	let BOff = rando(-50, 50) / 10;
	let R2A = rando(-50, 50) / 10;
	let G2A = rando(-50, 50) / 10;
	let B2A = rando(-50, 50) / 10;
	let A2A = rando(-50, 50) / 10;
	let AOff = rando(-50, 50) / 10;
	let extraBF = "";
	let extraBFProb = rando(0, 100);
	//80% of the time only have 1 baseFrequency
	if (extraBFProb > 80) {
		extraBF = " " + rando(1, 10000) / 100000;
	}
	let bfRand = rando(1, 10000) / 100000 + extraBF;
	let randOct = rando(1, 10);
	let svgId = rando(0, 1000) + "-" + rando(0, 1000);
	let randSeed = rando(0, 1000);
	// let bgColor = "rgb(255,255,255)";
	let rRand = rando(0, 255);
	let gRand = rando(0, 255);
	let bRand = rando(0, 255);

	let rgb = `rgb(${rRand},${gRand},${bRand})`;
	let svg = `<svg xmlns="http://www.w3.org/2000/svg" height="1000px" width="1000px">
    <filter id="filter-${svgId}">
        <feTurbulence baseFrequency="${bfRand}" numOctaves="${randOct}" seed="${randSeed}"/>
        <feColorMatrix values="${R2R} ${G2R} ${B2R} ${A2R} ${ROff} ${R2G} ${G2G} ${B2G} ${A2G} ${GOff} ${R2B} ${G2B} ${B2B} ${A2B} ${BOff} ${R2A} ${G2A} ${B2A} ${A2A} ${AOff}"/>
		</filter>
    <rect width="100%" height="100%" fill="${rgb}" class="bgRect"/>
    <rect width="100%" height="100%" filter="url(#filter-${svgId})"/>
	</svg>
	`;
	let btoa = window.btoa(svg);
	let svgg = "data:image/svg+xml;base64," + btoa;
	$(theId).attr("src", svgg);
	return svgg;
};

const newPatterns = () => {
	createRandomPatterns("#img1");
	createRandomPatterns("#img2");
	createRandomPatterns("#img3");
	createRandomPatterns("#img4");
	createRandomPatterns("#img5");
	createRandomPatterns("#img6");
	createRandomPatterns("#img7");
};
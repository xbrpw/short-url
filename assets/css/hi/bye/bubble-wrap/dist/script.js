// for the pop sounds
document.addEventListener("DOMContentLoaded",() => {
	let bubbleWrap = document.getElementById("bw"),
		popSound = new Howl({
			src: [
				"https://cdn.sndup.net/77wc/bubble_wrap_mp3.mp3?token=gzpPrErq2rndDEvro4Yg0RWQh6tsn3etRRRE3HK3RI8&token_path=%2F77wc%2F&expires=1622297760",
				"https://cdn.sndup.net/8vb8/bubble_wrap_ogg.ogg?token=4XU5-uXRaFK9I-r5wF6tMGNlocvMGKxTFbjWgWuyUek&token_path=%2F8vb8%2F&expires=1622297851"
			],
			autoplay: false,
			loop: false,
			volume: 1.0
		});
	bubbleWrap.addEventListener("change",() => {
		popSound.play();
	});
});
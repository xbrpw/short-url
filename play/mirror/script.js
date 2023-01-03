const images = [
	"https://data.whicdn.com/images/251238216/original.gif",
	"https://i.pinimg.com/originals/3d/22/45/3d224511a5e13317e46e37bee1d249dd.gif",
	"https://i.pinimg.com/originals/b0/10/e9/b010e954f94acbd034917b2d6931bd79.gif",
	"https://64.media.tumblr.com/5f4c0252b15dda55028536c5a8923c7d/b691a90722d7bbb5-c8/s500x750/34aac55dfd7302e41fec400ba9636edeadb1890a.gif",
	"https://64.media.tumblr.com/746e848c8b0cf90bc7938599421e6b4e/tumblr_pbhfk0rEth1txe8seo1_500.gif",
	"https://media2.giphy.com/media/Wm9XlKG2xIMiVcH4CP/giphy.gif"
];

$(document).ready(function () {
	let current = 0;
	$("#mirror-content").on("click", function () {
		$(this).css({
			"background-image": `url(${images[++current % images.length]})`
		});
	});
});
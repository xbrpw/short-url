$(function () {
	$("button").click(function () {
		$(".info").text((i, t) =>
			t == "Spread the love by liking our page."
				? "Feeling loved!"
				: "Spread the love by liking our page."
		);
		$(this).toggleClass("special");
	});
});
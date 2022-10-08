var balanceEls = document.querySelectorAll(".balance");
balanceEls.forEach((el) => {
	const rows = Math.round(
		el.scrollHeight / parseInt(getComputedStyle(el).lineHeight)
	);
	el.innerHTML = el.innerHTML.replace(
		/(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
		"<span style='writing-mode: horizontal-tb; display: block; padding-inline-end: 0.1em'>$&</span>"
	);
	el.style.columnCount = rows;
	el.style.columnGap = 0;
	el.style.writingMode = "vertical-lr";
});

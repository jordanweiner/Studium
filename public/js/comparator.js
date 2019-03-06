function goBack() {
	window.history.back();
}

function initializePage() {
	$(".backButtonComparator").click(buttonClick);
}

function buttonClick(e) {
	console.log("button clicked");
	e.preventDefault();
	ga("send", "event", "HomeButton", "click");
}

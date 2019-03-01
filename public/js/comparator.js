function goBack() {
	window.history.back();
}

function initializePage() {
	$(".home-button").click(buttonClick);
}

function buttonClick(e) {
	console.log("button clicked");
	e.preventDefault();
	ga("send", "event", "HomeButton", "click");
}
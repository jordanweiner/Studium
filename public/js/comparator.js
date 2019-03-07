function goBack() {
	ga( 'create', 'UA-134936315-2', 'auto' ); 
	ga('send', 'event', "Button", "Click");
	window.history.back();
}

function initializePage() {
	//$(".backButtonComparator").click(buttonClick);
}

/*function buttonClick(e) {
	console.log("button clicked");
	e.preventDefault();
	ga("send", "event", "HomeButton", "click");
}*/

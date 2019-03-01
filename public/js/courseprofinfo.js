// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
}

function goBack() {
	window.history.back();
}

function renderData(course) {
	
}

function getUserSearchInput() {
	var x = document.getElementById("search-input").value;
	renderData(x);
}


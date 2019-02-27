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

function renderData() {
	var info;
	// //console.log("hey");
	// $.getJSON("../../data/cleandata.json", function(json) {
	//     info = json;
	//     console.log(info); // this will show the info it in firebug console
	// });

	// var i;
	// var instr;
	// for (i = 0; i < info.Instructor.length; i++) {
	// 	instr = info.Instructor[i];
	// 	console.log(instr.name);
	// }
}

function getUserSearchInput() {
	var x = document.getElementById("search-input").value;
	renderData();
	//console.log("search-input is: " + x);

}


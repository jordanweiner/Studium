$.getJSON( "data/data.json", function( json ) {
    console.log( "JSON Data received, name is " + json.name);
});

function getUserSearchInput() {
	var x = document.getElementById("search-input").value;
	console.log("search-input is: " + x);
}
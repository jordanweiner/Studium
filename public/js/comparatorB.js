function goBack() {
	window.history.back();
}

function lnameLetterButtonPressed() {
	var chosenletter = document.getElementById('lnameletter');
	var value = chosenletter[chosenletter.selectedIndex].value;
	$(".container comparator-page").hide();
}

$(".but").click(lnameLetterButtonPressed);

document.getElementById('lnameprof').addEventListener('click',lnameLetterButtonPressed);
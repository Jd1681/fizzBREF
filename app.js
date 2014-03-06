$(document).ready(function(){
	promptUser();
});

function promptUser(){
	var userInput = +prompt("Enter a number");

	if(isNaN(userInput) || $.trim(userInput) == '') {
		promptUser()
	} else {
		fizz(userInput);
	}
}


function fizz(a) {
	for(var counter = 1; counter <= a; counter++) {
		if (counter % 3 == 0) {
			if (counter % 5 == 0) {	
				$(".buz").append("fizz buzz, ");
				counter++;
			}
			$(".buz").append("fizz, ");
			counter++;
		}
		if (counter % 5 == 0) {
			$(".buz").append("buzz, ");
		}
	else {
		$(".buz").append(counter).append(", ");
		}
	}
}
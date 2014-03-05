$(document).ready(function(){

var userInput = +prompt("Enter a number");

evalInteger(userInput);

for(var counter = 1; counter <= userInput; counter++) {
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
	$(".buz").append(counter);
	$(".buz").append(", ");
	}
}

var evalInteger = function(userInput){
	if(userInput === "NaN"){
	userInput = +prompt("Enter a number");
}
});
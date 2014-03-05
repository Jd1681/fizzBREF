$(document).ready(function(){

for(var counter = 1; counter <= 100; counter++) {
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

});
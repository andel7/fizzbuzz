$(document).ready(function(){
	var end_number=prompt("Please enter a number");
	console.log("entered "+end_number);

	for (var i = 1; i <= end_number; i++) {
		if ((i%5==0)&&(i%3==0)){
			console.log('fizzBuzz');
		}
		else if (i%5==0){
			console.log('buzz');
		} else if (i%3==0) {
			console.log('fizz');
		} else {
			console.log(i);
		}

	};
})
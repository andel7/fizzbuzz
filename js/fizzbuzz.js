$(document).ready(function(){
	var end_number;
	function do_the_thing(value){
		if ((value%5==0)&&(value%3==0)){
			console.log('fizzBuzz');
		}
		else if (value%5==0){
			console.log('buzz');
		} else if (value%3==0) {
			console.log('fizz');
		} else {
			console.log(value);
		}
		
	}
	function get_a_number(){
		end_number=prompt("Please enter a number");
		while(end_number % 1 != 0) {
			alert("This is not a decimal number enter another one");
			end_number=prompt("Please enter a number");

		}
		console.log("entered "+end_number);
	}

	get_a_number();

	for (var i = 1; i <= end_number; i++) {
		do_the_thing(i);
	};
})
function add(){
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	console.log(sum);
}
function largest() {
	var max;
	if(arguments.length > 1){
		max = arguments[0];
		for (var i = 0; i < arguments.length; i++) {
			if(arguments[i] > max)
				max = arguments[i];
		}
	}
	console.log("Largest: " + max);
}

add(1,23,2,3,4,545,6,5);
add(1,23);
largest(234,234,4235,235,23,324,234,234,23423);
largest(234,234,5,6,7);

function sleep(){
	console.log("******Sleeping");
	for (var i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}
sleep();
sleep(12);
sleep(14,"hours");
sleep(7,"days",24,7);
sleep(false);
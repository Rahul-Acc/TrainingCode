//Higher order function

function confuseInParts(){
	function ok(){ 
		console.log("OK");
	}
	return ok;
}
function confuse(){
	return function(){
		console.log("Thoroughly confused");
	};
}
confuse()();

function doSomething(something){
	something();
}
doSomething(function(){
	console.log("Please leave us");
});

var eat = function(){
	console.log("Eating");
}
doSomething(eat);

eat();

var work = function(){
	console.log("Working");
}
doSomething(work);
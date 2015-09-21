var arr = [];
var numbers = [1,2,3,3,4];
var myArr = [1,23.45,true,null,"WTH"];
for(var i=0;i<myArr.length;i++){
	console.log(myArr[i]);
}
var countries = [];
countries["India"] = "New Delhi";
countries["USA"] = "Washington DC";
countries["UK"] = "London";
for(var key in countries){
	console.log(key + " : " + countries[key]);
}
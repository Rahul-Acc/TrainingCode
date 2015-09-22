var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
	var url = req.url;
	if(url.match(/info/)){
		getCountryInfo(req,res);	
	}
	else{
		var filePath = url.substring(1);
		loadFile(filePath,res);
	}
});
function getCountryInfo(req,res){
	var queryString = require("url").parse(req.url,true).query;
	var country = queryString.country;
	var capital = {capital:"NA",continent:"NA",population:"NA"};
	if(country == "India")
		capital = {capital:"New Delhi",continent:"Asia",population:"1.2 billion"};
	else if(country == "USA")
		capital = {capital:"Washington DC",continent:"NA",population:"50 million"};
	res.end(JSON.stringify(capital));
}
function loadFile(filePath,res){
	fs.readFile(filePath,function(err,data){
		if(err)
			res.end("File not found " + err);
		else
			res.end(data);
	});
}
server.listen(8080);
console.log("Server started and running in 8080");
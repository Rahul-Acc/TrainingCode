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
	var capital = "NA";
	if(country == "India")
		capital = "New Delhi";
	else if(country == "USA")
		capital = "Washington DC";
	res.end(capital);
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
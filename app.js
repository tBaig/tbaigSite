const express = require('express');
const path = require('path');
const fs = require('fs');	
const app = express();


app.use(express.static('./build'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, './build', 'index.html'));
})

/*app.get('/resume', function(req, res){
	res.download(__dirname + '/src/resume/MirzaBaigResume.pdf', 'MirzaBaigResume.pdf');
})*/

app.get('/resume', function(req, res){
	var tempFile = __dirname + '/src/resume/MirzaBaigResume.pdf';
	fs.readFile(tempFile, function(err, data){
		res.contentType("application/pdf");
		res.send(data);
	})
	//res.download(__dirname + '/src/resume/MirzaBaigResume.pdf', 'MirzaBaigResume.pdf');
})

app.listen(8080, function(){
	console.log("App is live on part 8080");
})
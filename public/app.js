const express = require('express');
const path = require('path');
const app = express();


//app.use(express.static('./build'));
app.use(express.static('./public'));

app.get('/*', function(req, res){
	//res.sendFile(path.join(__dirname, './build', 'index.html'));
	console.log(__dirname);
	res.sendFile(path.join(__dirname, './public', 'index.html'));
})

app.listen(8080, function(){
	console.log("App is live on part 8080");
})

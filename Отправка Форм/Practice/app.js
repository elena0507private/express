const express    = require("express");
const bodyParser = require("body-parser");
const path       = require('path');
const app        = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get("/hello", (req, res) => {
	//res.send("Hello World!");
	res.sendFile(path.join(__dirname + '/hello.html'));
});

app.post("/hello", (req, res) => {
	console.log(req.body);
	let name = req.body.name;
	res.send(`Hi, ${name}`);
});

app.listen(3000);

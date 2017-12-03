const express = require("express");

const app = express();
const fs  = require("fs");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
console.log('req.params=', req.query);

	let range = [];
	let data  = fs.readFileSync("./users.json", "utf8");

	if ( data.trim() != '') {
		range  = JSON.parse(data);		
	}
	
	range.push(req.query);
	console.log('req.query = ', req.query);
	console.log('data = ', data);
	console.log('range = ', range);

        
	fs.writeFileSync("./users.json", JSON.stringify(range), "utf8");

	res.render("hello.hbs",{
		'name' : '',
	});
});

app.listen(3000);

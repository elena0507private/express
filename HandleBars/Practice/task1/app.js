const express = require("express");

const app = express();
app.set("view engine", "hbs");

app.get("/", (req, res) => {
console.log('req.params=', req.query);

	let firstParam  = (typeof req.query.firstParam != "undefined")? parseInt(req.query.firstParam) : 0;
    let secondParam = (typeof req.query.secondParam != "undefined")? parseInt(req.query.secondParam) : 0;
	let range = [];
	
	let n = firstParam;
	while (n <= secondParam) {	  
	  range.push(n);
	  n++;
	}
   res.render("hello.hbs",{
     "range" : range,
   });
});
app.listen(3000);

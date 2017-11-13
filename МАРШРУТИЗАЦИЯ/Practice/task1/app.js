const express = require("express");
const app = express();


app.get("/", (req, res) => {
	res.send("Hello World!");
});


app.get("/about", (req, res) => {
	res.send("About");
});


app.get("/contact", (req, res) => {
	res.send("Contacts");
});


app.listen(3000);

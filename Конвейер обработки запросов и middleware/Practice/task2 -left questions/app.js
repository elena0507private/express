const express = require("express");
const app     = express();

app.get("/hello/tom", (req, res) => {
	res.send("Hello Tom!");
});

app.get("/hello", (req, res) => {
	res.send("Hello!");
});

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(3000);

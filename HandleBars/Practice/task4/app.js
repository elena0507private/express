const express = require("express");
const hbs = require("hbs");
const header = require("./helpers/header");
const footer = require("./helpers/footer");
const app     = express();
hbs.registerHelper("header", header);
hbs.registerHelper("footer", footer);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("hello.hbs",{
		"name" : 'Vasya',
    });
});
app.listen(3000);

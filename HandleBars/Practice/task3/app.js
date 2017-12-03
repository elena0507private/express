const express = require("express");
const hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials");
const app     = express();
app.set("view engine", "hbs");

app.get("/", (req, res) => {

    res.render("hello.hbs",{
		"name" : 'Petya',
    });
});
app.listen(3000);

const express = require("express");
const app     = express();
	app.get("/name", (req, res) => {
    console.log('req', req)
	res.send("Hello Ella!");
});

app.listen(3000);

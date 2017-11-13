const express = require("express");
const app     = express();
app.use((req, res, next) => {
   const fs = require("fs");
   let now = new Date();
   let hour = now.getHours();
   let minutes = now.getMinutes();
   let seconds = now.getSeconds();
   let data    = `${hour}:${minutes}:${seconds}`;
   fs.writeFileSync("./time-work-begin.txt", data, "utf8");   
   next();
});

app.use((req, res, next) => {
	if (req.method == "GET") {
       console.log("GET");
    } else {
		next();
    }
	
});

app.use((req, res, next) => {
	res.send("Hello World!");
});

app.listen(3000);

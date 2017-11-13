const express = require("express");
const app     = express();
app.use("/public", express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/files"));
app.listen(3000);

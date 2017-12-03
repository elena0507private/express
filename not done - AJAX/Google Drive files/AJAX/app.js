const express = require("express");
const userApiRouter = require("./user/userApiRouter");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(userApiRouter);

app.listen(3000);
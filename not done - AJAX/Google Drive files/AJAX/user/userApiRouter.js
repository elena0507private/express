const express = require("express");
const bodyParser = require("body-parser");
const userApiController = require("./userApiController");

let userApiRouter = express.Router();

module.exports = userApiRouter;

userApiRouter.use("/api/users/:id", (req, res, next) => {
   req.id = Number(req.params.id);
   next();
});

userApiRouter.use("/api/users", bodyParser.json());

userApiRouter.route("/api/users/:id")
.get(userApiController.get)
.put(userApiController.put)
.delete(userApiController.delete);

userApiRouter.route("/api/users")
.get(userApiController.getAll)
.post(userApiController.post);
const express = require('express');
const Controller = require("../controller/student.controller");
const auth = require("../controller/auth.controller");

const StudentRouter = express.Router();

const {authMiddleware} = require("../middleware/index")
StudentRouter.get("/", Controller.getAll);
StudentRouter.get("/:sId", Controller.getById);
StudentRouter.post("/signin", Controller.addStudent);
StudentRouter.put("/:sId/update", Controller.update);
StudentRouter.delete("/:sId/delete", Controller.delete);
StudentRouter.post("/login", Controller.login);

module.exports = StudentRouter;
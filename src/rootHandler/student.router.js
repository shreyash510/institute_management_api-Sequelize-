const express = require('express');
const Controller = require("../controller/student.controller");

const StudentRouter = express.Router();

StudentRouter.get("/", Controller.getAll);
StudentRouter.get("/:sId", Controller.getById);
StudentRouter.post("/", Controller.addStudent);
StudentRouter.put("/:sId", Controller.update);
StudentRouter.delete("/:sId", Controller.delete);

module.exports = StudentRouter;
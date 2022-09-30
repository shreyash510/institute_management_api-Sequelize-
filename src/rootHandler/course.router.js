const express = require('express');
const Controller = require("../controller/course.controller");

const CourseRouter = express.Router();

CourseRouter.get("/", Controller.getAll);
CourseRouter.get("/:cId", Controller.getById);
CourseRouter.post("/add", Controller.addCourse);
CourseRouter.put("/:cId/update", Controller.update);
CourseRouter.delete("/:cId/delete", Controller.delete);

module.exports = CourseRouter;
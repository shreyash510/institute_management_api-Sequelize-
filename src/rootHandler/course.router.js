const express = require('express');
const Controller = require("../controller/course.controller");

const CourseRouter = express.Router();

CourseRouter.get("/", Controller.getAll);
CourseRouter.get("/:cId", Controller.getById);
CourseRouter.post("/", Controller.addCourse);
CourseRouter.put("/:cId", Controller.update);
CourseRouter.delete("/:cId", Controller.delete);

module.exports = CourseRouter;
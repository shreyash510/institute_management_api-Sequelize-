const express = require('express');
const Controller = require("../controller/staff.controller");

const StaffRouter = express.Router();

StaffRouter.get("/", Controller.getAll);
StaffRouter.get("/:s_id", Controller.getById);
StaffRouter.post("/", Controller.addStaff);
StaffRouter.put("/:s_id", Controller.update);
StaffRouter.delete("/:s_id", Controller.delete);

module.exports = StaffRouter;
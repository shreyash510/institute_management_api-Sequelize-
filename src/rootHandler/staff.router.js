const express = require('express');
const Controller = require("../controller/staff.controller");

const StaffRouter = express.Router();

StaffRouter.get("/", Controller.getAll);
StaffRouter.get("/:s_id", Controller.getById);
StaffRouter.post("/signin", Controller.addStaff);
StaffRouter.put("/:s_id/update", Controller.update);
StaffRouter.delete("/:s_id/delete", Controller.delete);

module.exports = StaffRouter;
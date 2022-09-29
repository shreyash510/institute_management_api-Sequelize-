const mysql = require('mysql2');
const appConfig = require('../constant/constant');
const {Model, Sequelize, DataType} = require('sequelize');

const StudentModelFn = require('./student.model');
const CourseModelFn = require('./course.model');
const StaffModelFn = require('./staff.model');

const sequelize = new Sequelize(
    appConfig.db.db,
    appConfig.db.username,
    appConfig.db.password,
    {
        dialect: appConfig.db.dialect,
        host: appConfig.db.host,
        port: appConfig.db.port,
    }
)

const Student = StudentModelFn(sequelize);
const Course = CourseModelFn(sequelize);
const Staff = StaffModelFn(sequelize);

module.exports = {
    Staff,
    Course,
    Student,
    db : sequelize
}
const { json } = require("sequelize");
const service = require("../services/course.services");

module.exports = {
    getAll: async function (req, res) {
        try {
            let course = await service.getAll();
            res.statusCode = 200;
            res.send(course);
            // res.send(JSON.stringify(Course))
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    getById: async function (req, res) {
        const id = req.params.cId;
        // console.log(id);
        try {
            let course = await service.getById(id);
            res.statusCode = 200;
            res.send(course);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    addCourse: async function (req, res) {
        try {
            let course = await service.addCourse(req.body);
            res.statusCode = 200;
            res.send(course);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    update: async function (req, res) {
        // console.log('its working..')
        try {
            const CourseId = req.params.cId;
            const body = req.body;
            let course = await service.update(CourseId, body);
            res.statusCode = 200;
            res.send(course);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    delete: async function (req, res) {
        try {
            const CourseId = req.params.sId;
            let course = await service.delete(CourseId);
            res.statusCode = 200;
            res.send(course);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    }
}
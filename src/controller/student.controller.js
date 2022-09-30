const { json } = require("sequelize");
const service = require("../services/student.services");

module.exports = {
    getAll: async function (req, res) {
        try {
            let student = await service.getAll();
            res.statusCode = 200;
            res.send(student);
            // res.send(JSON.stringify(student))
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    getById: async function (req, res) {
        const id = req.params.sId;
        try {
            let student = await service.getById(id);
            res.statusCode = 200;
            res.send(student);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    update: async function (req, res) {
        // console.log('its working..')
        try {
            const studentId = req.params.sId;
            const body = req.body;
            let student = await service.update(studentId, body);
            res.statusCode = 200;
            res.send(student);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    delete: async function (req, res) {
        try {
            const studentId = req.params.sId;
            let student = await service.delete(studentId);
            res.statusCode = 200;
            res.send(student);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    login: async function (req, res) {
        const { email, password } = req.body;
        try {
            const student = await service.login(req.body);
            res.statusCode = 200;
            res.send(student);            
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message)
        }
    },
    addStudent: async function (req, res) {
        try {
            let student = await service.addStudent(req.body);
            res.statusCode = 200;
            res.send(student);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    }
}
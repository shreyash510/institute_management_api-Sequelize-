const { json } = require("sequelize");
const service = require("../services/staff.services");

module.exports = {
    getAll: async function (req, res) {
        try {
            let staff = await service.getAll();
            res.statusCode = 200;
            res.send(staff);
            // res.send(JSON.stringify(student))
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    getById: async function (req, res) {
        const id = req.params.s_id;
        try {
            let staff = await service.getById(id);
            res.statusCode = 200;
            res.send(staff);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    addStaff: async function (req, res) {
        try {
            let staff = await service.addStaff(req.body);
            res.statusCode = 200;
            res.send(staff);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    update: async function (req, res) {
        // console.log('its working..')
        try {
            const staffId = req.params.s_id;
            const body = req.body;
            let staff = await service.update(staffId, body);
            res.statusCode = 200;
            res.send(staff);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    delete: async function (req, res) {
        try {
            const staffId = req.params.s_id;
            let staff = await service.delete(staffId);
            res.statusCode = 200;
            res.send(staff);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    }
}
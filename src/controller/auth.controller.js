const service = require("../services/auth.services");

module.exports = {
    login: async function (req, res) {
    //    console.log( req.body)
        try {
            const user = await service.login(req.body);
            res.send(user);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    register: async function (req, res) {
        try {
            let course = await service.authRegister(req.body);
            res.statusCode = 200;
            res.send(course);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    }

}
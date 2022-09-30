const service = require("../services/auth.services");

module.exports = {
    login: async function (req, res) {
        try {
            const user = await service.login(req.body);
            res.send(user);
        } catch (error) {
            res.statusCode = 500;
            res.send(error.message);
        }
    },
    // signIn: async function (req, res) {
    //     try {

    //     } catch (error) {
    //         res.statusCode = 500;
    //         res.send(error.message);
    //     }
    // }

}
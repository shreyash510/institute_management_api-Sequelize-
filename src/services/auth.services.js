const { Auth } = require('../model/index');
const jsonWebToken = require('jsonWebToken');
const constants = require('../constant/constant')

module.exports = {
    login: async function (data) {
        let auth = await Auth.findOne({
            where: { AuthEmail: data.email }
        });
        if (auth) {
            let exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24;
            let token = jsonWebToken.sign(
                { exp: exp },
                constants.SECRETE_KEY
            );
            // console.log(token);
            return auth.AuthPassword == data.password ?
                [token, "login successfully"] : "Invalid Username and password";
        } else {
            return "Unknown User"
        }
    }
}
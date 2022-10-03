const { User } = require('../model/index');
const jsonWebToken = require('jsonWebToken');
const constants = require('../constant/constant')

module.exports = {
    login: async function (data) {
        const {authEmail, authPassword} = data;
        let auth = await User.findOne({
            where: { authEmail: authEmail }
        });
        // console.log(auth);

        if (auth) {
            let exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24;
            let token = jsonWebToken.sign(
                { exp: exp, data: data },
                constants.SECRETE_KEY
            );
            // console.log(token);
            return auth.authPassword == authPassword ?
                {
                    token: token, auth: {
                        authId: auth.authId,
                        authEmail : auth.authEmail
                    }
                } : "Invalid Username and password";
        } else {
            return "Unknown User"
        }
    }
    ,
    authRegister : async function (data) {
        console.log(data)
        let authRegister = await User.create(data);
        return authRegister? "Auth Inserted Successfully" : "Insertion failed!"  
    }
}
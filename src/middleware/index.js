const jwt = require('jsonwebtoken');
const constants = require('../constant/constant');
const { Auth } = require('../model/index');

const authMiddleware = async (req, res, next) => {
    let token = req.headers["token"];
    try {
        let verifiedToken = jwt.verify(token, constants.SECRETE_KEY);
        let data = verifiedToken.data;
        let user = await Auth.findOne({
            where: {
                AuthEmail: data.email,
            }
        });
        req.Auth = user;
        next();
        return;
    }
    catch (error) {
        res.statusCode = 401;
        res.send("Unauthorised 2");
    }
}

module.exports = {
    authMiddleware
}
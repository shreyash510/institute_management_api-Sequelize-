const jwt = require('jsonwebtoken');
const constants = require('../constant/constant');
const { User } = require('../model/index');

const authMiddleware = async (req, res, next) => {
    let token = req.headers["token"];
    try {
        let verifiedToken = jwt.verify(token, constants.SECRETE_KEY);
        let data = verifiedToken.data;
        console.log(data)
        let userData = await User.findOne({
            where: {
                authEmail: data.authEmail,
            }
        });
        req.User = userData;
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
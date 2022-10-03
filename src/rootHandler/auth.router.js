const express = require('express');
const authRoute = express();
const controller = require('../controller/auth.controller');

authRoute.post('/login',controller.login);
authRoute.post('/register', controller.register);

module.exports = authRoute;
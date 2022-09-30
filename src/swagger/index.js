const AppConfig = require("../constant/constant");
const Student = require("./contents/student.docs");
const Staff = require("./contents/staff.docs");
const Course = require("./contents/course.doc");
const Auth = require('./contents/auth.docs')

module.exports = {
    "swagger": "2.0",
    info: {
        version: "1.0.0",
        title: "Institute Manegement",
        description: "Institute Manegement",
        license: {
            name: "MIT",
            url: "https://opensource.org/licenses/MIT",
        },
    },
    host: AppConfig.swaggerPORT,
    basePath: "/",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    // tags -------------------------------------------------------
    tags: [
        // optional
        // {
        //     name: "User",
        //     description: "users API"
        // },
    ],
    // Security Definitions ---------------------------------------------------
    securityDefinitions: {
        JWT: {
            type: "apiKey",
            name: "token",
            in: "header",
        },
    },
    // // definitions -----------------------------------------------------------------
    definitions: {
        ...Student.definations,
        ...Staff.definations,
        ...Course.definations,
        ...Auth.definations
    },
    paths: {
        ...Student.path,
        ...Staff.path,
        ...Course.path,
        ...Auth.path
    }
}
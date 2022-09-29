const AppConfig = require("../constant/constant");
module.exports = {
    swagger: "2.0",
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
        ...Student.defination
    }
    }
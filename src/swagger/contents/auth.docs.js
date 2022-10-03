exports.definations = {
    authLogin: {
        required: [],
        properties: {
            authEmail : {
                type : "string",
                example : "yogesh@gmail.com"
            },
            authPassword : {
                type : "string",
                example : "Admin@123"
            }
        }
    },
}


exports.path = {
    "/auth/login" : {
        post : {
            tag : ["Auth"],
            operationId : "/auth/login",
            summary : "Login",
            parameters : [
                {
                    name: "User Login",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "User login",
                    schema: {
                      $ref: `#/definitions/authLogin`,
                    },
                  },
                
            ],
            responses : {
                200 : {
                    description : "login",
                    schema : {
                        $ref : "#/definations/authLogin"
                    },
                }
            }
        }
    }
}
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
                example : "yogesh@123"
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
                    name: "AuthIdId",
                    in: "headers",
                    required: true,
                    type: "number",
                },
                
            ],
            responses : {
                200 : {
                    description : "login",
                    schema : {
                        $ref : "#/definations/authlogin"
                    },
                }
            }
        }
    }
}
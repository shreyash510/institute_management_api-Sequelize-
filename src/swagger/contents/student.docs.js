exports.definations = {
    getAll: {
        required: [],
        properties: {}
    },
    getById: {
        required: [],
        properties: {}
    },
    signIn: {
        required: [],
        properties: {
            studentId: {
                type: "number",
                example: "1",
            },
            name: {
                type: "string",
                example: "shreyash Kolhe",
            },
            courseId: {
                type: "number",
                example: 1
            },
            age: {
                type: "number",
                example: 23
            },
            email: {
                type: "string",
                example: "shreyash@gmail.com"
            },
            password: {
                type: "string",
                example: "sk@@11"
            }
        }
    },
    studentUpdate: {
        required: [],
        properties: {
            // studentId: {
            //     type: "number",
            //     example: "1",
            // },
            name: {
                type: "string",
                example: "shreyash Kolhe",
            },
            courseId: {
                type: "number",
                example: 1
            },
            age: {
                type: "number",
                example: 23
            },
            email: {
                type: "string",
                example: "shreyash@gmail.com"
            }
        }
    }, 
    delete : {
        required: [],
        properties: {}
    }
}

exports.path = {
    "/student": {
        get: {
            tags: ["Student"],
            operationId: "/student",
            summary: "Get all Student",
            security: [{ JWT: [] }],
            parameters: [],
            responses: {
                200: {
                    // description: "Recived all student",
                    schema: {
                        // $ref: "#/definitions/register"
                    },
                },
            },
        }
    },
    "/student/{id}": {
        get: {
            tags: ["Student"],
            operationId: "/student/{id}",
            summary: "Get Student by id",
            security: [{ JWT: [] }],
            parameters: [
                {
                    name: "studentId",
                    in: "path",
                    required: true,
                    type: "number",
                },
            ],
            responses: {
                200: {
                    description: "get student by Id",
                    schema: {
                        // $ref: "#/definitions/signIn"
                    },
                },
            },
        }
    },
    "/student/signin": {
        post: {
            tags: ["Student"],
            operationId: "/student/add",
            summary: "Insert Student Details",
            description: "Insert Student Details",
            security: [{ JWT: [] }],
            parameters: [
                {
                    name: "Student Registration",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Add new Student information.",
                    schema: {
                      $ref: `#/definitions/signIn`,
                    },
                  },
            ],
            responses: {
                200: {
                    description: "Registeration Completed Successfully",
                    schema: {
                        // $ref: "#/definitions/register"
                    },
                },
            },
        }
    },
    "/student/{StudentId}/update": {
        put: {
            tags: ["Student"],
            operationId: "/student/{StudentId}/update",
            summary: "Update Student Details",
            security: [{ JWT: [] }],
            parameters: [
                {
                    name: "StudentId",
                    in: "path",
                    required: true,
                    type: "number",
                },
                {
                    name: "Student Update",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "update information.",
                    schema: {
                      $ref: `#/definitions/studentUpdate`,
                    },
                  },
            ],
            responses: {
                200: {
                    description: "Update Student Successfully..",
                    schema: {
                        // $ref: "#/definitions/update"
                    },
                },
            },
        }
    },
    "/student/{id}/delete" : {
        delete: {
            tags: ["Student"],
            operationId: "/student/{id}/delete",
            summary: "delete Student by id",
            description: "delete Student by id",
            security: [{ JWT: [] }],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    type: "number",
                },
            ],
            responses: {
                200: {
                    description: "Record Deleted Successfully..",
                    schema: {
                        // $ref: "#/definitions/delete"
                    },
                },
            },
        }
    }
}
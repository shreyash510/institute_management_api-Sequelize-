exports.definations = {
    getAll: {
        required: [],
        properties: {}
    },
    getById: {
        required: [],
        properties: {}
    },
    register: {
        required: [],
        properties: {
            courseId: {
                type: "number",
                example: "1",
            },
            name: {
                type: "string",
                example: "shreyash Kolhe",
            },
            fees: {
                type: "number",
                example: 25000
            },
            duration: {
                type: "number",
                example: 3
            },
        }
    },
    update: {
        required: [],
        properties: {
            name: {
                type: "string",
                example: "shreyash Kolhe",
            },
            fees: {
                type: "number",
                example: 25000
            },
            duration: {
                type: "number",
                example: 3
            },
        }
    }, 
    delete : {
        required: [],
        properties: {}
    }
}

exports.path = {
    "/course": {
        get: {
            tags: ["Course"],
            operationId: "/course",
            summary: "Get all course",
            // security: [{ JWT: [] }],
            parameters: [],
            responses: {
                200: {
                    // description: "Recived all course",
                    schema: {
                        // $ref: "#/definitions/register"
                    },
                },
            },
        }
    },
    "/course/{id}": {
        get: {
            tags: ["Course"],
            operationId: "/course/{id}",
            summary: "Get course by id",
            // security: [{ JWT: [] }],
            parameters: [
                {
                    name: "courseId",
                    in: "path",
                    required: true,
                    type: "number",
                },
            ],
            responses: {
                200: {
                    description: "get course by Id",
                    schema: {
                        $ref: "#/definitions/register"
                    },
                },
            },
        }
    },
    "/course/resister": {
        post: {
            tags: ["Course"],
            operationId: "/course/resister",
            summary: "Insert course Details",
            description: "Insert course Details",
            // security: [{ JWT: [] }],
            parameters: [
                {
                    name: "course Registration",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Add new course information.",
                    schema: {
                      $ref: `#/definitions/register`,
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
    "/course/{courseId}/update": {
        put: {
            tags: ["Course"],
            operationId: "/course/{courseId}/update",
            summary: "Update course Details",
            // security: [{ JWT: [] }],
            parameters: [
                {
                    name: "courseId",
                    in: "path",
                    required: true,
                    type: "number",
                },
                {
                    name: "course Update",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "update information.",
                    schema: {
                      $ref: `#/definitions/update`,
                    },
                  },
            ],
            responses: {
                200: {
                    description: "Update course Successfully..",
                    schema: {
                        // $ref: "#/definitions/update"
                    },
                },
            },
        }
    },
    "/course/{id}/delete" : {
        delete: {
            tags: ["Course"],
            operationId: "/course/{id}/delete",
            summary: "delete course by id",
            description: "delete course by id",
            // security: [{ JWT: [] }],
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
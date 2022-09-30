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
            staffId: {
                type: "number",
                example: "1",
            },
            name: {
                type: "string",
                example: "Yogesh",
            },
            courseId: {
                type: "number",
                example: 1
            },
            gender: {
                type: "string",
                example: "Male"
            },
            age: {
                type: "number",
                example: "26"
            },
        }
    },
    update: {
        required: [],
        properties: {
            name: {
                type: "string",
                example: "Yogesh",
            },
            courseId: {
                type: "number",
                example: 1
            },
            gender: {
                type: "string",
                example: "Male"
            },
            age: {
                type: "number",
                example: "26"
            },
        }
    },
    delete: {
        required: [],
        properties: {}
    }
}

exports.path = {
    "/staff": {
        get: {
            tags: ["Staff"],
            operationId: "/staff",
            summary: "Get all staff",
            // security: [{ JWT: [] }],
            parameters: [],
            responses: {
                200: {
                    // description: "Recived all staff",
                    schema: {
                        // $ref: "#/definitions/register"
                    },
                },
            },
        }
    },
    "/staff/{id}": {
        get: {
            tags: ["Staff"],
            operationId: "/staff/{id}",
            summary: "Get staff by id",
            // security: [{ JWT: [] }],
            parameters: [
                {
                    name: "staffId",
                    in: "path",
                    required: true,
                    type: "number",
                },
            ],
            responses: {
                200: {
                    description: "get staff by Id",
                    schema: {
                        $ref: "#/definitions/register"
                    },
                },
            },
        }
    },
    "/staff/signin": {
        post: {
            tags: ["Staff"],
            operationId: "/staff/resister",
            summary: "Insert staff Details",
            description: "Insert staff Details",
            // security: [{ JWT: [] }],
            parameters: [
                {
                    name: "staff Registration",
                    required: true,
                    in: "body",
                    type: "object",
                    description: "Add new staff information.",
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
    "/staff/{staffId}/update": {
        put: {
            tags: ["Staff"],
            operationId: "/staff/{staffId}/update",
            summary: "Update staff Details",
            // security: [{ JWT: [] }],
            parameters: [
                {
                    name: "staffId",
                    in: "path",
                    required: true,
                    type: "number",
                },
                {
                    name: "staff Update",
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
                    description: "Update staff Successfully..",
                    schema: {
                        // $ref: "#/definitions/update"
                    },
                },
            },
        }
    },
    "/staff/{id}/delete": {
        delete: {
            tags: ["Staff"],
            operationId: "/staff/{id}/delete",
            summary: "delete staff by id",
            description: "delete staff by id",
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
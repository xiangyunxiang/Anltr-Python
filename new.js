var a = {
    type: "FileInput",
    value: [
        {
            type: "CompoundStatement",
            value: {
                type: "ClassDefinition",
                arglist: [],
                body: [
                    {
                        type: "CompoundStatement",
                        value: {
                            type: "FunctionDef",
                            name: "__init__",
                            parameters: [
                                {
                                    type: "Parameter",
                                    name: "self",
                                    default: null,
                                },
                            ],
                            body: [
                                {
                                    type: "SimpleStatement",
                                    value: [
                                        {
                                            type: "Assignment",
                                            left: {
                                                type: "Trailer",
                                                base: {
                                                    type: "Name",
                                                    value: "self",
                                                },
                                                trailer: [
                                                    {
                                                        type: "Property",
                                                        value: "b",
                                                    },
                                                ],
                                            },
                                            right: {
                                                type: "Integer",
                                                value: 1,
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
};

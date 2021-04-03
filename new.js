var a = {
    type: "FileInput",
    value: [
        {
            type: "CompoundStatement",
            value: {
                type: "FunctionDef",
                name: "f",
                parameters: [{ type: "Parameter", name: "a", default: null }],
                body: [
                    {
                        type: "SimpleStatement",
                        value: [
                            {
                                type: "ReturnStatement",
                                returned: [
                                    {
                                        type: "BinaryExpression",
                                        operator: "+",
                                        left: { type: "Name", value: "a" },
                                        right: { type: "Integer", value: 1 },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
        {
            type: "SimpleStatement",
            value: [
                {
                    type: "Trailer",
                    base: { type: "Name", value: "f" },
                    trailer: [
                        {
                            type: "ArgList",
                            value: [
                                {
                                    type: "Argument",
                                    key: { type: "Name", value: "a" },
                                    value: { type: "Integer", value: 1 },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

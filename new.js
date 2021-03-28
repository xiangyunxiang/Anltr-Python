var a = {
    type: "FileInput",
    value: [
        {
            type: "CompoundStatement",
            value: {
                type: "WhileStatement",
                condition: {
                    type: "BinaryExpression",
                    operator: ">",
                    left: { type: "Name", value: "a" },
                    right: { type: "Integer", value: 0 },
                },
                body: [
                    {
                        type: "SimpleStatement",
                        value: [{ type: "Integer", value: 1 }],
                    },
                ],
                else: [
                    {
                        type: "SimpleStatement",
                        value: [{ type: "Integer", value: 2 }],
                    },
                ],
            },
        },
    ],
};

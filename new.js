var a = {
    type: "FileInput",
    value: [
        {
            type: "CompoundStatement",
            value: {
                type: "TryStatement",
                exceptlist: [
                    {
                        body: [
                            {
                                type: "SimpleStatement",
                                value: [{ type: "Integer", value: 2 }],
                            },
                        ],
                    },
                    {
                        condition: { type: "Except", test: null },
                        body: [
                            {
                                type: "SimpleStatement",
                                value: [{ type: "Integer", value: 6 }],
                            },
                        ],
                    },
                ],
                else: [
                    {
                        type: "SimpleStatement",
                        value: [{ type: "Integer", value: 3 }],
                    },
                ],
                finally: [
                    {
                        type: "SimpleStatement",
                        value: [{ type: "Integer", value: 4 }],
                    },
                ],
            },
        },
    ],
};

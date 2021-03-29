var a = {
    type: "FileInput",
    value: [
        {
            type: "SimpleStatement",
            value: [
                {
                    type: "Assignment",
                    left: { type: "Name", value: "a" },
                    right: { type: "String", value: "1234" },
                },
            ],
        },
        {
            type: "SimpleStatement",
            value: [
                {
                    type: "Trailer",
                    base: { type: "Name", value: "a" },
                    trailer: [
                        {
                            type: "SubscriptList",
                            value: [
                                {
                                    type: "SubscriptExpression",
                                    start: null,
                                    end: null,
                                    sep: false,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

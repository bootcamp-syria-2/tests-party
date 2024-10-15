const { filterAndSort1, filterAndSort2, filterAndSort3 } = require("./exercise1.js");

const input = [    
    { name: "Product 1", value: 50 },
    { name: "Product 2", value: 30 },
    { name: "Product 3", value: 80 }
]
const min = 40

const trueResult = [
    {
        "name": "Product 1",
        "value": 50,
    },
    {
        "name": "Product 3",
        "value": 80,
    },
]



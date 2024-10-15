const { filterAndSort1, filterAndSort2, filterAndSort3 } = require("./exercise1.js");

//The values `data` and `min` are the inputs to test the Junior Developer's code with.
const data = [    
    { name: "Product 1", value: 50 },
    { name: "Product 2", value: 30 },
    { name: "Product 3", value: 80 }
]
const min = 40

//The expected (correct) results when running the functions
const expectedResults = [
    {
        "name": "Product 1",
        "value": 50,
    },
    {
        "name": "Product 3",
        "value": 80,
    },
]

//Write your code here


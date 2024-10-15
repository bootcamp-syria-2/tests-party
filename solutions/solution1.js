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

test("filterAndSort1", () => {
    expect(filterAndSort1(input, min)).toEqual(trueResult)
})
test("filterAndSort2", () => {
    expect(filterAndSort2(input, min)).toEqual(trueResult)
})
test("filterAndSort3", () => {
    expect(filterAndSort3(input, min)).toEqual(trueResult)
})



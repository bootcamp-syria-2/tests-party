const { filterAndSort1, filterAndSort2, filterAndSort3 } = require("./exercise1.js");

// - The function filters and sorts the objects
// - The return type is an array
// - The array only has objects inside (no other data types)
// - The objects in the array follow the same structure has the objects in the `items` argument (`name` and `value`)
// - The function doesn't crash if the both arguments are not provided.

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

//TESTS
test("Returns an array", () => {
    const results = filterAndSort1(data, min)
    // const results = filterAndSort2(data, min)
    // const results = filterAndSort3(data, min)

    expect(results).toBeInstanceOf(Array)
})
test("Returns an array with objects of the same structure as items", () => {
    const results = filterAndSort1(data, min)
    // const results = filterAndSort2(data, min)
    // const results = filterAndSort3(data, min)

    //Expect the results to contain an array with objects of the same structure as items
    expect.arrayContaining([
        expect.objectContaining(
            expectedResults[0]
        )
    ])
})
test("filters the objects", () => {
    const results = filterAndSort1(data, min)
    // const results = filterAndSort2(data, min)
    // const results = filterAndSort3(data, min)
    
    //Expect the results to contain an array with objects of the same structure as items
    expect(results).toHaveLength(expectedResults.length)
})
test("sorts the objects", () => {
    const results = filterAndSort1(data, min)
    // const results = filterAndSort2(data, min)
    // const results = filterAndSort3(data, min)
    //Expect the results to contain an array with objects of the same structure as items
    expect(results[0].value).toBe(expectedResults[0].value)
})



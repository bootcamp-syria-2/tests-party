# Exercise 1 - Difficulty Grading - 1
### **Exercise: Test the multiple `filterAndSort` Function**

#### **Task Description:**
3 juniors that wrote code for a function `filterAndSort`. It's your objective to write tests for the same function with Jest to see which one is the correct one.
To do that, you must not change the code in `exercise1.js`, you must only write code in `exercise1.test.js`.
To test their code with the tests you wrote, run `npm run test`

The function has 2 arguments `items` and `minValue`, items is an array of objects with 2 properties: `name` and `value`, the function should return ONLY the objects with a value greater than minValue, and they should be sorted from lowest to highest value.

One way to solve the exercise is to create atleast 1 test, to check if the result is correct, but the more you create the more confident you can be that the code works.
Things you can (should) test are:

- The return type is an array
- The array only has objects inside (no other data types)
- The objects in the array follow the same structure has the objects in the `items` argument (`name` and `value`)
- The function doesn't crash if the both arguments are not provided.

# Exercise 2 - Difficulty Grading - 2
### **Exercise: Implement the `formatUserNames` Function**

#### **Task Description:**
In this exercise, the test have already been written, you just need to write the function and test it untill it's working.
To test your functions, run `npm run test`.
Try to understand what the tests require for you to pass them. Trying to understand code someone else wrote is a good habit to develop your logical thinking.

# Exercise 3 - Difficulty Grading - 3
### **Exercise: Test and Implement the `filterByAge` Function**

#### **Task Description:**
In this exercise you have to make this function and the correct tests for it, if you miss some tests is ok :)
You need to create a function called `filterByAge` that takes an array of user objects and a minimum age, and returns a new array containing only users who are above or equal to the specified age.

Each user object contains the following fields:
- `name`: The name of the user (string)
- `age`: The age of the user (number)

### **Steps:**

1. **Write the Jest tests** to verify that the function works as expected.
2. **Implement the `filterByAge` function** to pass the tests.

#### **Requirements:**
- The function should return a new array containing only users whose age is greater than or equal to the minimum age.
- If no users meet the age requirement, the function should return an empty array.
- If the input array is empty, the function should return an empty array.
- Handle edge cases, such as when users have an invalid or missing age (skip these users).

---

### **Step 1: Write the Jest Tests**

Create test cases that verify the function's behavior in different scenarios. Write the tests before writing the function.

#### Test Cases:
- Should return users who are at least the given age.
- Should return an empty array if no users meet the age criteria.
- Should return an empty array if the input array is empty.
- Should skip users with invalid or missing age.

---

### **Step 2: Implement the Function**

After writing the tests, implement the `filterByAge` function to make the tests pass.

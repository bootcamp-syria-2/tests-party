Exercicio 1 (EASY):
### **Exercise: Test the multiple `filterAndSort` Function**

#### **Task Description:**
We have 3 juniors that made a piece of the code. Its your objective to test with Jest every function to see with one is the right one


Exercicio 2 (HARD):
### **Exercise: Implement the `formatUserNames` Function**

#### **Task Description:**
In this exercise we have the tests allready made you just need to make the function following the tests

Exercise 3 (HARD):
### **Exercise: Implement and Test the `filterByAge` Function**

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

// TESTS
describe('filterByAge', () => {
    // Test 1: Filters users who are at least the given age
    it('should return users who are 18 or older', () => {
      const users = [
        { name: 'Alice', age: 22 },
        { name: 'Bob', age: 16 },
        { name: 'Charlie', age: 18 }
      ];
  
      const result = filterByAge(users, 18);
  
      expect(result).toEqual([
        { name: 'Alice', age: 22 },
        { name: 'Charlie', age: 18 }
      ]);
    });
  
    // Test 2: Returns an empty array when no users meet the age criteria
    it('should return an empty array if no users are old enough', () => {
      const users = [
        { name: 'Alice', age: 15 },
        { name: 'Bob', age: 14 }
      ];
  
      const result = filterByAge(users, 18);
  
      expect(result).toEqual([]);
    });
  
    // Test 3: Returns an empty array when given an empty array
    it('should return an empty array if the user list is empty', () => {
      const result = filterByAge([], 18);
  
      expect(result).toEqual([]);
    });
  
    // Test 4: Skips users with missing or invalid age
    it('should skip users with missing or invalid age', () => {
      const users = [
        { name: 'Alice', age: 22 },
        { name: 'Bob', age: null },
        { name: 'Charlie', age: undefined },
        { name: 'David', age: 'twenty' },
      ];
  
      const result = filterByAge(users, 18);
  
      expect(result).toEqual([{ name: 'Alice', age: 22 }]);
    });
  });


// FUNCTION

function filterByAge(users, minAge) {
    return users
      .filter(user => typeof user.age === 'number' && user.age >= minAge);
}
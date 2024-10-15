const { formatUserNames } = require("./exercise2.js");

describe('formatUserNames', () => {
    // Test 1: Format a list of users with first and last names
    it('should format an array of user objects into an array of full names', () => {
      const users = [
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jane', lastName: 'Smith' },
        { firstName: 'Emily', lastName: 'Johnson' }
      ];
  
      const result = formatUserNames(users);
  
      expect(result).toEqual(['John Doe', 'Jane Smith', 'Emily Johnson']);
    });
  
    // Test 2: Handle users with missing last names
    it('should handle users with missing last names by returning only the first name', () => {
      const users = [
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jane', lastName: null },
        { firstName: 'Emily', lastName: '' }
      ];
  
      const result = formatUserNames(users);
  
      expect(result).toEqual(['John Doe', 'Jane', 'Emily']);
    });
  
    // Test 3: Handle an empty array of users
    it('should return an empty array when given no users', () => {
      const result = formatUserNames([]);
  
      expect(result).toEqual([]);
    });
  
    // Test 4: Handle users with missing first names
    it('should skip users with no first name', () => {
      const users = [
        { firstName: null, lastName: 'Doe' },
        { firstName: '', lastName: 'Smith' },
        { firstName: 'Emily', lastName: 'Johnson' }
      ];
  
      const result = formatUserNames(users);
  
      expect(result).toEqual(['Emily Johnson']);
    });
  });
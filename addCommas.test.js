const { addCommas } = require("./addCommas");

describe('addCommas', () => {
  test('should add commas to a positive integer', () => {
      expect(addCommas(1234)).toBe('1,234');
  });

  test('should add commas to a large positive integer', () => {
      expect(addCommas(1000000)).toBe('1,000,000');
  });

  test('should add commas to a very large positive integer', () => {
      expect(addCommas(9876543210)).toBe('9,876,543,210');
  });

  test('should add commas to a single digit integer', () => {
      expect(addCommas(6)).toBe('6');
  });

  test('should add commas to a negative integer', () => {
      expect(addCommas(-10)).toBe('-10');
  });

  test('should add commas to a negative integer with multiple digits', () => {
      expect(addCommas(-5678)).toBe('-5,678');
  });
});
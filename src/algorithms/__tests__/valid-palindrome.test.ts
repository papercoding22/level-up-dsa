import { isPalindrome } from '../valid-palindrome';

// Create unit tests for the isPalindrome function
describe('isPalindrome', () => {
  it('should return true for empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('should return true for single character string', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('should return true for palindrome string with lowercase letters', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('should return true for palindrome string with uppercase letters', () => {
    expect(isPalindrome('MADAM')).toBe(true);
  });

  it('should return true for palindrome string with mixed case letters', () => {
    expect(isPalindrome('NoOn')).toBe(true);
  });

  it('should return false for non-palindrome string', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should ignore non-alphanumeric characters', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });
});

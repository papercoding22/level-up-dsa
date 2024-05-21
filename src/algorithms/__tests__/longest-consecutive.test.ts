import { longestConsecutive } from '../longest-consecutive';

describe('longestConsecutive', () => {
  it('should return 0 for an empty array', () => {
    expect(longestConsecutive([])).toBe(0);
  });

  it('should return 1 for an array with a single element', () => {
    expect(longestConsecutive([5])).toBe(1);
  });

  it('should return the length of the longest consecutive sequence', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
    expect(longestConsecutive([1, 2, 3, 4, 5])).toBe(5);
    expect(longestConsecutive([9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(9);
  });

  it('should handle duplicate elements correctly', () => {
    expect(longestConsecutive([1, 2, 2, 3, 4, 4, 5])).toBe(5);
    expect(longestConsecutive([1, 1, 1, 1, 1])).toBe(1);
  });

  it('should handle negative numbers correctly', () => {
    expect(longestConsecutive([-3, -2, -1, 0, 1, 2, 3])).toBe(7);
    expect(longestConsecutive([-5, -4, -3, -2, -1])).toBe(5);
  });
});

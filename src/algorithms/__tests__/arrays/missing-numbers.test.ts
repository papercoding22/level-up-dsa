import { missingNumbers, missingNumbersOptimized } from '../../arrays/missing-numbers';

describe('missingNumbers', () => {
  it('should return an array of missing numbers', () => {
    const nums = [1, 4, 3];
    const result = missingNumbers(nums);
    expect(result).toEqual([2, 5]);
  });

  it('should return an empty array if no numbers are missing', () => {
    const nums = [1, 2, 3];
    const result = missingNumbers(nums);
    expect(result).toEqual([4, 5]);
  });

  it('should return an empty array if the input array is empty', () => {
    const nums: number[] = [];
    const result = missingNumbers(nums);
    expect(result).toEqual([1, 2]);
  });
});

describe('missingNumbersOptimized', () => {
  it('should return an array of missing numbers', () => {
    const nums = [1, 4, 3];
    const result = missingNumbersOptimized(nums);
    expect(result).toEqual([2, 5]);
  });

  it('should return an empty array if no numbers are missing', () => {
    const nums = [1, 2, 3];
    const result = missingNumbersOptimized(nums);
    expect(result).toEqual([4, 5]);
  });

  it('should return an empty array if the input array is empty', () => {
    const nums: number[] = [];
    const result = missingNumbersOptimized(nums);
    expect(result).toEqual([1, 2]);
  });
});

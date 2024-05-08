import { closestNumbers } from '../closest-numbers';

describe('closestNumbers', () => {
  test('should return an array of numbers with the smallest difference', () => {
    expect(closestNumbers([4, 2, 1, 3])).toEqual([1, 2, 2, 3, 3, 4]);
    expect(closestNumbers([5, 4, 3, 2])).toEqual([2, 3, 3, 4, 4, 5]);
    expect(closestNumbers([1, 3, 6, 4, 10, 15])).toEqual([3, 4]);
    expect(
      closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]),
    ).toEqual([-20, 30]);
  });
});

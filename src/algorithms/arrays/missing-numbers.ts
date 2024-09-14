export function missingNumbers(nums: number[]) {
  const n = nums.length + 2;
  const missingNumbers = [];
  for (let i = 1; i <= n; i++) {
    if (!nums.includes(i)) {
      missingNumbers.push(i);
    }
  }
  return missingNumbers;
}

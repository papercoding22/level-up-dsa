export function missingNumbers(nums: number[]) {
  // Naive solution: O(n²) time complexity
	const n = nums.length + 2;
  const missingNumbers = [];
  for (let i = 1; i <= n; i++) {
    if (!nums.includes(i)) {
      missingNumbers.push(i);
    }
  }
  return missingNumbers;
}

export function missingNumbersOptimized(nums: number[]) {
	// Optimized solution: O(n) time complexity
	const n = nums.length + 2;
	const missingNumbers = [];
	const numSet = new Set(nums);
	for (let i = 1; i <= n; i++) {
		if (!numSet.has(i)) {
			missingNumbers.push(i);
		}
	}
	return missingNumbers;
}
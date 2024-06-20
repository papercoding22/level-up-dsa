export function isPalindrome(s: string): boolean {
  const transformedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  const len = transformedString.length;

  let left = 0;
  let right = len - 1;

  let isPalindrome = true;

  while (left < right) {
    const leftItem = transformedString[left];
    const rightItem = transformedString[right];

    if (leftItem !== rightItem) {
      isPalindrome = false;
      break;
    }

    left++;
    right--;
  }

  return isPalindrome;
}

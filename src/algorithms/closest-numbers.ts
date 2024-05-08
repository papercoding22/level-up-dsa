export function closestNumbers(arr: number[]): number[] {
  // Write your code here
  const sortedArr = arr.sort((a, b) => a - b);
  // const pairDiffs = new Map<number, number[]>();

  let minDiff = null;
  let results: number[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const currentItem = sortedArr[i];
    const nextItem = sortedArr[i + 1];
    const diff = nextItem - currentItem;

    if (!minDiff) {
      minDiff = diff;
    }

    // The algorithm
    if (diff < minDiff) {
      minDiff = diff;
      results = [currentItem, nextItem];
    } else if (diff === minDiff) {
      results = [...results, currentItem, nextItem];
    }

    // if (pairDiffs.has(diff)) {
    //   const diffItems = pairDiffs.get(diff);
    //   pairDiffs.set(diff, [...diffItems, currentItem, nextItem]);
    // } else {
    //   pairDiffs.set(diff, [currentItem, nextItem]);
    // }
    // minDiff = Math.min(minDiff, diff);
  }

  // return pairDiffs.get(minDiff);

  return results;
}

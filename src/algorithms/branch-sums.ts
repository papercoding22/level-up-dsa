class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function branchSums(root: BinaryTree): number[] {
  // Write your code here
  const result: number[] = [];
  const traverseAndSum = (node: BinaryTree | null, sum: number) => {
    if (!node) {
      return;
    }

    sum = sum + node.value;

    if (!node.left && !node.right) {
      result.push(sum);
      return;
    }

    traverseAndSum(node.left, sum);
    traverseAndSum(node.right, sum);
  };

  traverseAndSum(root, 0);

  return result;
}

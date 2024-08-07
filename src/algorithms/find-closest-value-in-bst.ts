export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findClosestValueInBst(tree: BinaryTree, target: number) {
  let closestNode = tree;
  function traverse_dfs(currentNode: BinaryTree | null) {
    if (currentNode === null) {
      return;
    }

    const runningDiff = closestNode === null ? Infinity : Math.abs(target - closestNode.value);
    const diff = Math.abs(target - currentNode.value);

    closestNode = diff < runningDiff ? currentNode : closestNode;

    traverse_dfs(currentNode.left);
    traverse_dfs(currentNode.right);
  }

  traverse_dfs(tree);

  return closestNode.value;
}

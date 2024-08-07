import TreeNode from './TreeNode';

export default class BinaryTree<T extends number | string> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.getValue()) {
        if (current.getLeft() === null) {
          current.setLeft(newNode);
          break;
        }
        current = current.getLeft() as TreeNode<T>;
      } else {
        if (current.getRight() === null) {
          current.setRight(newNode);
          break;
        }
        current = current.getRight() as TreeNode<T>;
      }
    }
  }

  traverse_dfs(node: TreeNode<T> | null, result: T[]): void {
    if (node === null) {
      return;
    }

    if (node.getLeft() === null && node.getRight() === null) {
      result.push(node.getValue());
      return;
    }

    // back from left
    this.traverse_dfs(node.getLeft(), result);
    this.traverse_dfs(node.getRight(), result);
    result.push(node.getValue());
  }

  traverse_bfs(node: TreeNode<T> | null, result: T[]): void {
    if (node === null) {
      return;
    }

    const queue: TreeNode<T>[] = [];
    queue.push(node);

    while (queue.length > 0) {
      const current = queue.shift() as TreeNode<T>;
      result.push(current.getValue());

      if (current.getLeft() !== null) {
        queue.push(current.getLeft() as TreeNode<T>);
      }

      if (current.getRight() !== null) {
        queue.push(current.getRight() as TreeNode<T>);
      }
    }
  }

  print() {
    const result: T[] = [];
    this.traverse_dfs(this.root, result);
    console.log(result.join(' '));
  }
}

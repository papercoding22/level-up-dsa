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

  traverse(node: TreeNode<T> | null, result: T[]): void {
    if (node === null) {
      return;
    }

    if (node.getLeft() === null && node.getRight() === null) {
      result.push(node.getValue());
      return;
    }

    // back from left
    this.traverse(node.getLeft(), result);
    this.traverse(node.getRight(), result);
    result.push(node.getValue());
  }

  print() {
    const result: T[] = [];
    this.traverse(this.root, result);
    console.log(result.join(' '));
  }
}

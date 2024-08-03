class BinarySearchTree<T extends number | string> {
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
}
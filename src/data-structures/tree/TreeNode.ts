class TreeNode<T> {
	private value: T;
	private left: TreeNode<T> | null;
	private right: TreeNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	getValue(): T {
		return this.value;
	}

	getLeft(): TreeNode<T> | null {
		return this.left;
	}

	getRight(): TreeNode<T> | null {
		return this.right;
	}

	setLeft(node: TreeNode<T>): void {
		this.left = node;
	}

	setRight(node: TreeNode<T>): void {
		this.right = node;
	}
}
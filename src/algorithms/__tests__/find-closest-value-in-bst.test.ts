import { findClosestValueInBst, BinaryTree } from '../find-closest-value-in-bst';

describe('findClosestValueInBst', () => {
  test('should find closest value in BST', () => {
    const tree = new BinaryTree(10);
    tree.left = new BinaryTree(5);
    tree.right = new BinaryTree(15);
    tree.left.left = new BinaryTree(2);
    tree.left.right = new BinaryTree(5);
    tree.left.left.left = new BinaryTree(1);
    tree.right.left = new BinaryTree(13);
    tree.right.right = new BinaryTree(22);
    tree.right.left.right = new BinaryTree(14);

    expect(findClosestValueInBst(tree, 12)).toBe(13);
  });

	test('should find closest value in BST', () => {
		const tree = new BinaryTree(10);
		tree.left = new BinaryTree(5);
		tree.right = new BinaryTree(15);
		tree.left.left = new BinaryTree(2);
		tree.left.right = new BinaryTree(5);
		tree.left.left.left = new BinaryTree(1);
		tree.right.left = new BinaryTree(13);
		tree.right.right = new BinaryTree(22);
		tree.right.left.right = new BinaryTree(14);

		expect(findClosestValueInBst(tree, 1)).toBe(1);
	});

	test('should find closest value in BST', () => {
		const tree = new BinaryTree(10);
		tree.left = new BinaryTree(5);
		tree.right = new BinaryTree(15);
		tree.left.left = new BinaryTree(2);
		tree.left.right = new BinaryTree(5);
		tree.left.left.left = new BinaryTree(1);
		tree.right.left = new BinaryTree(13);
		tree.right.right = new BinaryTree(22);
		tree.right.left.right = new BinaryTree(14);

		expect(findClosestValueInBst(tree, 5)).toBe(5);
	});

	test('should find closest value in BST', () => {
		const tree = new BinaryTree(10);
		tree.left = new BinaryTree(5);
		tree.right = new BinaryTree(15);
		tree.left.left = new BinaryTree(2);
		tree.left.right = new BinaryTree(5);
		tree.left.left.left = new BinaryTree(1);
		tree.right.left = new BinaryTree(13);
		tree.right.right = new BinaryTree(22);
		tree.right.left.right = new BinaryTree(14);

		expect(findClosestValueInBst(tree, 15)).toBe(15);
	});

	test('should find closest value in BST', () => {
		const tree = new BinaryTree(10);
		tree.left = new BinaryTree(5);
		tree.right = new BinaryTree(15);
		tree.left.left = new BinaryTree(2);
		tree.left.right = new BinaryTree(5);
		tree.left.left.left = new BinaryTree(1);
		tree.right.left = new BinaryTree(13);
		tree.right.right = new BinaryTree(22);
		tree.right.left.right = new BinaryTree(14);

		expect(findClosestValueInBst(tree, 22)).toBe(22);
	});

	test('should find closest value in BST', () => {
		const tree = new BinaryTree(10);
		tree.left = new BinaryTree(5);
		tree.right = new BinaryTree(15);
		tree.left.left = new BinaryTree(2);
		tree.left.right = new BinaryTree(5);
		tree.left.left.left = new BinaryTree(1);
		tree.right.left = new BinaryTree(13);
		tree.right.right = new BinaryTree(22);
		tree.right.left.right = new BinaryTree(14);

		expect(findClosestValueInBst(tree, 23)).toBe(22);
	});
});

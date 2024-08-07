import { BinaryTree, branchSums } from '../branch-sums';

describe('BranchSums', () => {
  test('Calculate branch sums for a binary tree with multiple nodes', () => {
    // Create a binary tree with multiple nodes
    const tree = new BinaryTree(1);
    tree.left = new BinaryTree(2);
    tree.right = new BinaryTree(3);
    tree.left.left = new BinaryTree(4);
    tree.left.right = new BinaryTree(5);
    tree.right.left = new BinaryTree(6);
    tree.right.right = new BinaryTree(7);

    // Calculate branch sums
    const sums = branchSums(tree);
    console.log('TCL: sums', sums);

    // Verify the expected branch sums
    expect(sums).toEqual([7, 8, 10, 11]);
  });

  test('Calculate branch sums for a binary tree with only one node', () => {
    // Create a binary tree with only one node
    const tree = new BinaryTree(1);

    // Calculate branch sums
    const sums = branchSums(tree);

    // Verify the expected branch sums
    expect(sums).toEqual([1]);
  });

  test('Calculate branch sums for an empty binary tree', () => {
    // Create an empty binary tree
    const tree = null;

    // Calculate branch sums
    const sums = branchSums(tree);

    // Verify the expected branch sums
    expect(sums).toEqual([]);
  });
});

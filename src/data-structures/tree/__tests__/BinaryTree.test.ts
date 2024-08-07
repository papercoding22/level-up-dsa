import BinaryTree from '../BinaryTree';

describe('BinaryTree', () => {
  test('should create binary tree', () => {
    const binaryTree = new BinaryTree<number>();
    expect(binaryTree.root).toBeNull();
  });

  test('should insert values to binary tree', () => {
    const binaryTree = new BinaryTree<number>();
    binaryTree.insert(10);
    binaryTree.insert(5);
    binaryTree.insert(15);
    binaryTree.insert(17);
    binaryTree.insert(3);

    expect(binaryTree.root?.getValue()).toBe(10);

    const leftNode = binaryTree.root?.getLeft();
    expect(leftNode?.getValue()).toBe(5);
    expect(leftNode?.getLeft()?.getValue()).toBe(3);

    const rightNode = binaryTree.root?.getRight();
    expect(rightNode?.getValue()).toBe(15);
    expect(rightNode?.getRight()?.getValue()).toBe(17);
  });

  test('traverse binary tree using depth-first search', () => {
    const binaryTree = new BinaryTree<number>();
    binaryTree.insert(10);
    binaryTree.insert(5);
    binaryTree.insert(15);
    binaryTree.insert(17);
    binaryTree.insert(3);

    const result: number[] = [];
    binaryTree.traverse_dfs(binaryTree.root, result);
    expect(result).toEqual([3, 5, 17, 15, 10]);
  });

  test('should print binary tree', () => {
    const binaryTree = new BinaryTree<number>();
    binaryTree.insert(10);
    binaryTree.insert(5);
    binaryTree.insert(15);
    binaryTree.insert(17);
    binaryTree.insert(3);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    binaryTree.print();
    expect(consoleSpy).toHaveBeenCalledWith('3 5 17 15 10');
  });
});

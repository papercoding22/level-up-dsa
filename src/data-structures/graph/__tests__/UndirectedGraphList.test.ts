import UndirectedGraphList from '../UndirectedGraphList';

describe('UndirectedGraph', () => {
  let graph: UndirectedGraphList;

  beforeEach(() => {
    graph = new UndirectedGraphList();
  });

  test('addNode', () => {
    graph.addNode('A');
    expect(graph.getAdjacencyList().has('A')).toBe(true);
  });

  test('addEdge', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addEdge('A', 'B');
    expect(graph.hasEdge('A', 'B')).toBe(true);
  });

  test('removeEdge', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addEdge('A', 'B');
    graph.removeEdge('A', 'B');
    expect(graph.hasEdge('A', 'B')).toBe(false);
  });

  test('hasEdge', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addEdge('A', 'B');
    expect(graph.hasEdge('A', 'B')).toBe(true);
    expect(graph.hasEdge('B', 'A')).toBe(true);
    expect(graph.hasEdge('A', 'C')).toBe(false);
  });
});

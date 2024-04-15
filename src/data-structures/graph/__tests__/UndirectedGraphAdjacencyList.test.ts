import UndirectedGraphList from '../UndirectedGraphAdjacencyList';

// Create unit test for UndirectedGraphList class

describe('UndirectedGraphList', () => {
  let graph: UndirectedGraphList;

  beforeEach(() => {
    graph = new UndirectedGraphList(5);
  });

  it('should add edges correctly', () => {
    graph.addEdge(0, 1);
    graph.addEdge(0, 3);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);

    expect(graph.getAdjacencyList()).toEqual([[1, 3], [0, 2], [1, 3], [0, 2, 4], [3]]);
  });

  it('should remove edges correctly', () => {
    graph.addEdge(0, 1);
    graph.addEdge(0, 3);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);

    graph.removeEdge(1, 2);
    graph.removeEdge(3, 4);
    
    const result = graph.getAdjacencyList();
    const expected = [[1, 3], [0], [3], [0, 2], []];
    expect(result).toEqual(expected);
  });
});

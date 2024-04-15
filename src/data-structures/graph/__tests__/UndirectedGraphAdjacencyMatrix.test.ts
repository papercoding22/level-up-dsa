import UndirectedGraph from '../UndirectedGraphAdjacencyMatrix';

describe('UndirectedGraph', () => {
  let graph: UndirectedGraph;

  beforeEach(() => {
    graph = new UndirectedGraph(5);
  });

  it('should add edges correctly', () => {
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);

    expect(graph.getAdjacencyMatrix()).toEqual([
      [0, 1, 0, 0, 0],
      [1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 1],
      [0, 0, 0, 1, 0],
    ]);
  });

  it('should remove edges correctly', () => {
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);

    graph.removeEdge(1, 2);
    graph.removeEdge(3, 4);

    expect(graph.getAdjacencyMatrix()).toEqual([
      [0, 1, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });

  // Write unit test for graph.findMaxDegree() method
  it('should find the maximum degree correctly', () => {
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);

    expect(graph.findMaxDegree()).toBe(2);
  });

  // Write unit test for graph.findMinDegree() method
  it('should find the minimum degree correctly', () => {
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);

    expect(graph.findMinDegree()).toBe(1);
  });
});

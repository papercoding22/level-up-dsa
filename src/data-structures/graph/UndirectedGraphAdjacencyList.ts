export default class UndirectedGraph {
  private adjacencyList: Map<string, Set<string>>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(vertex: string): void {
    this.adjacencyList.set(vertex, new Set());
  }

  addEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList.get(vertex1)?.add(vertex2);
    this.adjacencyList.get(vertex2)?.add(vertex1);
  }

  removeEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList.get(vertex1)?.delete(vertex2);
    this.adjacencyList.get(vertex2)?.delete(vertex1);
  }

  hasEdge(vertex1: string, vertex2: string): boolean {
    return this.adjacencyList.get(vertex1)?.has(vertex2) || false;
  }

  getAdjacencyList(): Map<string, Set<string>> {
    return this.adjacencyList;
  }

  displayGraph(): void {
    for (const [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} -> ${Array.from(edges).join(', ')}`);
    }
  }
}

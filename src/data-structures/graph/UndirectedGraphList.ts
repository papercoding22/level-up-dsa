export default class UndirectedGraphList {
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

  visit(vertex: string): void {
    console.log(vertex);
  }

  neighbors(vertex: string): Set<string> {
    return this.adjacencyList.get(vertex) || new Set();
  }

  dfsHelper(vertex: string, visited: Set<string>): void {
    visited.add(vertex);
    const neighbors = this.adjacencyList.get(vertex);
    if (neighbors) {
      for (const neighbor of Array.from(neighbors)) {
        // back tracking
        if (!visited.has(neighbor)) {
          // deep dive to current vertext's first neighbor
          this.dfsHelper(neighbor, visited);
        }
      }
    }
  }

  dfs(startingVertex: string): void {
    const visited = new Set<string>();
    this.dfsHelper(startingVertex, visited);
  }

  bfs_iterative(startingVertex: string): void {
    const visited = new Set<string>();
    const queue = [];
    queue.push(startingVertex);
    while (queue.length > 0) {
      const currentVertex = queue.shift() as string;
      if (!visited.has(currentVertex)) {
        this.visit(currentVertex);
        visited.add(currentVertex);
        const neighbors = this.neighbors(currentVertex);
        for (const neighbor of Array.from(neighbors)) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
  }

  dfs_iterative(startingVertex: string): void {
    const visited = new Set<string>();
    const stack = [];
    stack.push(startingVertex);
    while (stack.length > 0) {
      const currentVertex = stack.pop() as string;
      if (!visited.has(currentVertex)) {
        visited.add(currentVertex);
        this.visit(currentVertex);
        const neighbors = this.neighbors(currentVertex);
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }
  }
}

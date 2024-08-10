export default class UndirectedGraphMatrix {
  private adjacencyMatrix: number[][];

  static CONNECTED = 1;
  static NOT_CONNECTED = 0;

  constructor() {
    this.adjacencyMatrix = [];
  }

  get numVertices(): number {
    return this.adjacencyMatrix.length;
  }

  getAdjacencyMatrix(): number[][] {
    return this.adjacencyMatrix;
  }

  normalizeGraph(): void {
    for (let i = 0; i < this.numVertices; i++) {
      for (let j = 0; j < this.numVertices; j++) {
        if (this.adjacencyMatrix[i][j] === undefined) {
          this.adjacencyMatrix[i][j] = UndirectedGraphMatrix.NOT_CONNECTED;
        }
      }
    }
  }

  addEdge(vertex1: number, vertex2: number): void {
    // if the vertex is not in the adjacency matrix, add it
    if (this.adjacencyMatrix[vertex1] === undefined) {
      this.adjacencyMatrix[vertex1] = [];
    }
    if (this.adjacencyMatrix[vertex2] === undefined) {
      this.adjacencyMatrix[vertex2] = [];
    }

    this.adjacencyMatrix[vertex1][vertex2] = UndirectedGraphMatrix.CONNECTED;
    this.adjacencyMatrix[vertex2][vertex1] = UndirectedGraphMatrix.CONNECTED;
    this.normalizeGraph();
  }

  removeEdge(vertex1: number, vertex2: number): void {
    // Check if the vertices exist in the adjacency matrix
    if (this.adjacencyMatrix[vertex1] === undefined || this.adjacencyMatrix[vertex2] === undefined) {
      return;
    }
    this.adjacencyMatrix[vertex1][vertex2] = UndirectedGraphMatrix.NOT_CONNECTED;
    this.adjacencyMatrix[vertex2][vertex1] = UndirectedGraphMatrix.NOT_CONNECTED;
  }

  // find the edge between two vertices
  hasEdge(vertex1: number, vertex2: number): boolean {
    return this.adjacencyMatrix[vertex1][vertex2] === UndirectedGraphMatrix.CONNECTED;
  }

  // find the vertice that has the most edges
  // Explain what is degree of a vertex in a graph
  // The degree of a vertex is the number of edges connected to it
  // Example: A has 3 edges connected to it, so the degree of A is 3
  findMaxDegree(): number {
    let maxDegree = 0;
    for (let i = 0; i < this.numVertices; i++) {
      let degree = 0;
      for (let j = 0; j < this.numVertices; j++) {
        if (this.adjacencyMatrix[i][j] === 1) {
          degree++;
        }
      }
      if (degree > maxDegree) {
        maxDegree = degree;
      }
    }
    return maxDegree;
  }

  findVertexWithMaxDegree(): number {
    let maxDegree = 0;
    let vertexWithMaxDegree = 0;
    for (let i = 0; i < this.numVertices; i++) {
      let degree = 0;
      for (let j = 0; j < this.numVertices; j++) {
        if (this.adjacencyMatrix[i][j] === 1) {
          degree++;
        }
      }
      if (degree > maxDegree) {
        maxDegree = degree;
        vertexWithMaxDegree = i;
      }
    }
    return vertexWithMaxDegree;
  }

  // find min degree, min degree is the vertex with the least edges
  findMinDegree(): number {
    let minDegree = this.numVertices;
    for (let i = 0; i < this.numVertices; i++) {
      let degree = 0;
      for (let j = 0; j < this.numVertices; j++) {
        if (this.adjacencyMatrix[i][j] === 1) {
          degree++;
        }
      }
      if (degree < minDegree) {
        minDegree = degree;
      }
    }
    return minDegree;
  }

  drawGraph(): void {
    for (let i = 0; i < this.numVertices; i++) {
      let row = '';
      for (let j = 0; j < this.numVertices; j++) {
        row += this.adjacencyMatrix[i][j] + ' ';
      }
      console.log(row);
    }
  }
}

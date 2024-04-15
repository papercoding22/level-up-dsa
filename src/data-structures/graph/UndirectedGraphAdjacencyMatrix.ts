export default class UndirectedGraph {
  private adjacencyMatrix: number[][];

  constructor(private numVertices: number) {
    this.adjacencyMatrix = [];
    for (let i = 0; i < this.numVertices; i++) {
      this.adjacencyMatrix[i] = [];
      for (let j = 0; j < this.numVertices; j++) {
        this.adjacencyMatrix[i][j] = 0; // Initialize with 0 (no edges)
      }
    }
  }

  addEdge(vertex1: number, vertex2: number): void {
    // Adding edge between vertex1 and vertex2 (undirected graph)
    this.adjacencyMatrix[vertex1][vertex2] = 1;
    this.adjacencyMatrix[vertex2][vertex1] = 1; // Since it's undirected, add edge in both directions
  }

  removeEdge(vertex1: number, vertex2: number): void {
    // Removing edge between vertex1 and vertex2
    this.adjacencyMatrix[vertex1][vertex2] = 0;
    this.adjacencyMatrix[vertex2][vertex1] = 0;
  }

  // find the edge between two vertices
  hasEdge(vertex1: number, vertex2: number): boolean {
    return this.adjacencyMatrix[vertex1][vertex2] === 1;
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

  // find min degree
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

  printGraph(): void {
    for (let i = 0; i < this.numVertices; i++) {
      let row = '';
      for (let j = 0; j < this.numVertices; j++) {
        row += this.adjacencyMatrix[i][j] + ' ';
      }
      console.log(row);
    }
  }

  // create a function to draw the graph in the console
  drawGraph(): void {
    for (let i = 0; i < this.numVertices; i++) {
      let row = '';
      for (let j = 0; j < this.numVertices; j++) {
        row += this.adjacencyMatrix[i][j] + ' ';
      }
      console.log(row);
    }
  }

  getAdjacencyMatrix(): number[][] {
    return this.adjacencyMatrix;
  }

  // Display this graph with i = 0 equal to A, i = 1 equal to B, and so on
  // Example: A -> B -> C -> D -> E
  displayGraph(): void {
    for (let i = 0; i < this.numVertices; i++) {
      let row = '';
      for (let j = 0; j < this.numVertices; j++) {
        if (this.adjacencyMatrix[i][j] === 1) {
          const letter = String.fromCharCode(65 + i);
          const nextLetter = String.fromCharCode(65 + j);
          row += letter + ' -> ' + nextLetter + ' ';
        }
      }
      if (row !== '') {
        console.log(row);
      }
    }
  }
}

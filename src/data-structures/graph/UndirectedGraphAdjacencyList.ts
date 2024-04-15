export default class UndirectedGraph {
  private adjacencyList: Map<number, number[]>;

  constructor(private numberVertices: number) {
    this.adjacencyList = new Map();
    for (let i = 0; i < this.numberVertices; i++) {
      this.adjacencyList.set(i, []);
    }
  }

  addEdge(vertex1: number, vertex2: number): void {
    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1);
  }

  removeEdge(vertex1: number, vertex2: number): void {
    const list1 = this.adjacencyList.get(vertex1);
    const list2 = this.adjacencyList.get(vertex2);
    if (list1) {
      const index1 = list1.indexOf(vertex2);
      if (index1 !== -1) {
        list1.splice(index1, 1);
      }
    }
    if (list2) {
      const index2 = list2.indexOf(vertex1);
      if (index2 !== -1) {
        list2.splice(index2, 1);
      }
    }
  }

  hasEdge(vertex1: number, vertex2: number): boolean {
    const listOfVertex1 = this.adjacencyList.get(vertex1);
    return !!listOfVertex1?.includes(vertex2);
  }

  getAdjacencyList(): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < this.numberVertices; i++) {
      result.push(this.adjacencyList.get(i) as number[]);
    }
    return result;
  }

  // Display this graph with i = 0 equal to A, i = 1 equal to B, and so on
  // Example: A -> B -> C -> D -> E
  displayGraph(): void {
    for (let i = 0; i < this.numberVertices; i++) {
      let row = '';
      const list = this.adjacencyList.get(i) as number[];
      const letter = String.fromCharCode(65 + i);
      for (const j of list) {
        const nextLetter = String.fromCharCode(65 + j);
        row += letter + ' --> ' + nextLetter + ' ';
      }
      if (row !== '') {
        console.log(row);
      }
    }
  }
}

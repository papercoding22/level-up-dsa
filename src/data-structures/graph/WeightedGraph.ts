import PriorityQueue from '../queues/PriorityQueue';

export default class WeightedGraph {
  private adjacencyList: Map<string, Map<string, number>>;

  constructor() {
    this.adjacencyList = new Map();
  }

	getAdjacencyList(): Map<string, Map<string, number>> {
		return this.adjacencyList;
	}

  addNode(vertex: string): void {
    this.adjacencyList.set(vertex, new Map());
  }

  addEdge(vertex1: string, vertex2: string, weight: number): void {
    this.adjacencyList.get(vertex1)?.set(vertex2, weight);
    this.adjacencyList.get(vertex2)?.set(vertex1, weight);
  }

  shortestPath(source: string): Map<string, number> {
    const priorityQueue = new PriorityQueue<string>();
    const distances: Map<string, number> = new Map();
    const visited = new Set();

    // Initialize distances
    for (const vertex of this.adjacencyList.keys()) {
      distances.set(vertex, Infinity);
    }

    distances.set(source, 0);
    priorityQueue.enqueue(source, 0);

    while (!priorityQueue.isEmpty()) {
      const currentVertex = priorityQueue.dequeue();

      if (!currentVertex || visited.has(currentVertex)) {
        continue;
      }

      visited.add(currentVertex);

      const neighbors = this.adjacencyList.get(currentVertex) || new Map();
      for (const [neighbor, weight] of neighbors) {
				const distance = distances.get(currentVertex);
        const totalDistance = distance + weight;
        if (!visited.has(neighbor) && totalDistance < (distances.get(neighbor) || Infinity)) {
          distances.set(neighbor, totalDistance);
          priorityQueue.enqueue(neighbor, totalDistance);
        }
      }
    }

    return distances;
  }

  shortestPathTo(source: string, destination: string): number {
    const distances = this.shortestPath(source);
    return distances.get(destination) || 0;
  }

  shortestDirection(source: string, destination: string): string[] {
    const priorityQueue = new PriorityQueue<string>();
    const distances: Map<string, { distance: number; nearestVertex: string }> = new Map();
    const visited = new Set();

    // Initialize distances
    for (const vertex of this.adjacencyList.keys()) {
      distances.set(vertex, { distance: Infinity, nearestVertex: '' });
    }

    distances.set(source, { distance: 0, nearestVertex: '' });
    priorityQueue.enqueue(source, 0);

    while (!priorityQueue.isEmpty()) {
      const currentVertex = priorityQueue.dequeue();

      if (!currentVertex || visited.has(currentVertex)) {
        continue;
      }

      visited.add(currentVertex);

      const neighbors = this.adjacencyList.get(currentVertex) || new Map();
      for (const [neighbor, weight] of neighbors) {
        const { distance } = distances.get(currentVertex) || { distance: Infinity, nearestVertex: '' };
        const totalDistance = distance + weight;

        if (totalDistance < (distances.get(neighbor)?.distance || Infinity)) {
          distances.set(neighbor, { distance: totalDistance, nearestVertex: currentVertex });
          priorityQueue.enqueue(neighbor, totalDistance);
        }
      }
    }

    const shortestDirection: string[] = [];
    // backtrack from destination to source
    let currentVertex = destination;
    while (currentVertex !== source) {
      shortestDirection.push(currentVertex);
      currentVertex = distances.get(currentVertex)?.nearestVertex || '';
    }
    shortestDirection.push(source);
    return shortestDirection.reverse();
  }
}

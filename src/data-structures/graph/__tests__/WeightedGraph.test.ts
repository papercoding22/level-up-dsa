import WeightedGraph from '../WeightedGraph';

describe('WeightedGraph', () => {
	let graph: WeightedGraph;

	beforeEach(() => {
		graph = new WeightedGraph();
	});

	it('should add nodes correctly', () => {
		graph.addNode('A');
		graph.addNode('B');
		graph.addNode('C');

		expect(graph.getAdjacencyList()).toEqual(new Map([['A', new Map()], ['B', new Map()], ['C', new Map()]]));
	});

	it('should add edges correctly', () => {
		graph.addNode('A');
		graph.addNode('B');
		graph.addNode('C');
		graph.addEdge('A', 'B', 5);
		graph.addEdge('B', 'C', 10);

		expect(graph.shortestPath('A')).toEqual(new Map([['A', 0], ['B', 5], ['C', 15]]));
		expect(graph.shortestPath('B')).toEqual(new Map([['B', 0], ['A', 5], ['C', 10]]));
		expect(graph.shortestPath('C')).toEqual(new Map([['C', 0], ['B', 10], ['A', 15]]));
	});

	it('should calculate the shortest path correctly', () => {
		graph.addNode('A');
		graph.addNode('B');
		graph.addNode('C');
		graph.addNode('D');
		graph.addEdge('A', 'B', 5);
		graph.addEdge('B', 'C', 10);
		graph.addEdge('C', 'D', 15);

		expect(graph.shortestPathTo('A', 'D')).toBe(30);
	});

	it('should calculate the shortest direction correctly', () => {
		graph.addNode('A');
		graph.addNode('B');
		graph.addNode('C');
		graph.addNode('D');
		graph.addEdge('A', 'B', 5);
		graph.addEdge('B', 'C', 10);
		graph.addEdge('C', 'D', 15);

		expect(graph.shortestDirection('A', 'D')).toEqual(['A', 'B', 'C', 'D']);
		expect(graph.shortestDirection('B', 'D')).toEqual(['B', 'C', 'D']);
		expect(graph.shortestDirection('C', 'A')).toEqual(['C', 'B', 'A']);
	});
});

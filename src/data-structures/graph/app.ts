import { select, Separator } from '@inquirer/prompts';

import UndirectedGraphMatrix from './UndirectedGraphMatrix';
import UndirectedGraphList from './UndirectedGraphList';

export default async function main() {
  const menu = [
    {
      name: 'Display Graph implemented with Adjacency Matrix',
      value: '1',
    },
    {
      name: 'Display Graph implemented with Adjacency List',
      value: '2',
    },
    new Separator(),
    { name: 'Exit', value: 'exit' },
  ];

  const answer = await select({
    message: 'Select an option:',
    choices: menu,
  });

  switch (answer) {
    case '1':
      const graphMatrix = new UndirectedGraphMatrix();
      graphMatrix.addEdge(0, 1);
      graphMatrix.addEdge(1, 2);
      graphMatrix.addEdge(2, 3);
      graphMatrix.addEdge(3, 4);
      graphMatrix.drawGraph();
      break;
    case '2':
      const graphList = new UndirectedGraphList();
      graphList.addNode('A');
      graphList.addNode('B');
      graphList.addNode('C');
      graphList.addNode('D');
      graphList.addEdge('A', 'B');
      graphList.addEdge('A', 'C');
      graphList.addEdge('A', 'D');
      graphList.addEdge('B', 'C');
      graphList.displayGraph();
      break;
    default:
      break;
  }
}

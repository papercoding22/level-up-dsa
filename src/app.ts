import { select, Separator } from '@inquirer/prompts';
import chalk from 'chalk';

import { isValidSudoku } from './algorithms/valid-sudoku-hash-map';
import UndirectedGraphMatrix from './data-structures/graph/UndirectedGraphAdjacencyMatrix';
import UndirectedGraphList from './data-structures/graph/UndirectedGraphAdjacencyList';

const log = console.log;

async function main() {
  log(chalk.blue('Hello') + ' World' + chalk.red('!'));
  const menuChoices = [
    {
      name: 'Display Undirected Graph Adjacency Matrix',
      value: 'displayUndirectedGraphAdjacencyMatrix',
    },
    {
      name: 'Display Undirected Graph Adjacency List',
      value: 'displayUndirectedGraphAdjacencyList',
    },
    {
      name: 'Valid Sudoku',
      value: 'validSudoku',
    },
    new Separator(),
    { name: 'Exit', value: 'exit' },
  ];

  const answer = await select({
    message: 'Select an option:',
    choices: menuChoices,
  });

  switch (answer) {
    case 'displayUndirectedGraphAdjacencyMatrix':
      log(chalk.green('Display Undirect Graph Adjacency Matrix...'));
      const graphMatrix = new UndirectedGraphMatrix(5);
      graphMatrix.addEdge(0, 1);
      graphMatrix.addEdge(1, 2);
      graphMatrix.addEdge(2, 3);
      graphMatrix.addEdge(3, 4);
      graphMatrix.displayGraph();
      break;
    case 'displayUndirectedGraphAdjacencyList':
      log(chalk.green('Display Undirect Graph Adjacency List...'));
      const graphList = new UndirectedGraphList();
      graphList.addNode('A');
      graphList.addNode('B');
      graphList.addNode('C');
      graphList.addNode('D');
      graphList.addEdge('A', 'B');
      graphList.addEdge('A', 'C');
      graphList.addEdge('A', 'D');
      graphList.addEdge('B', 'C');
      log(chalk.yellow('Adjacency List - DFS: Start from A'));
      graphList.dfs('A');
      break;
    case 'validSudoku':
      log(chalk.green('Running isValidSudoku function...'));
      isValidSudoku([
        ['5', '3', '.', '.', '7', '.', '.', '4', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ]);
      break;
    case 'exit':
      log(chalk.yellow('Exiting...'));
      process.exit(0);
      break;
  }
}

main();

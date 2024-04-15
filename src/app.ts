import { select, Separator } from '@inquirer/prompts';
import chalk from 'chalk';

import { isValidSudoku } from './algorithms/valid-sudoku-hash-map';
import UndirectedGraph from './data-structures/graph/UndirectedGraphAdjacencyMatrix';

const log = console.log;

async function main() {
  log(chalk.blue('Hello') + ' World' + chalk.red('!'));
  const menuChoices = [
    {
      name: 'Display Undirected Graph Adjacency Matrix',
      value: 'displayUndirectedGraphAdjacencyMatrix',
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
      const graph = new UndirectedGraph(5);
      graph.addEdge(0, 1);
      graph.addEdge(1, 2);
      graph.addEdge(2, 3);
      graph.addEdge(3, 4);
      graph.displayGraph();
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

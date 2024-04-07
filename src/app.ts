import { select, Separator } from '@inquirer/prompts';
import chalk from 'chalk';

import { testDrive } from './data-structures/graph/undirected-graph-adjacency-matrix';
import { isValidSudoku } from './algorithms/valid-sudoku-hash-map';

const log = console.log;

async function main() {
  log(chalk.blue('Hello') + ' World' + chalk.red('!'));
  const menuChoices = [
    { name: 'Run testDrive function', value: 'testDrive' },
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
    case 'testDrive':
      log(chalk.green('Running testDrive function...'));
      testDrive();
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

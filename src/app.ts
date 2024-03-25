import { select, Separator } from '@inquirer/prompts';
import chalk from 'chalk';
import { testDrive } from './data-structures/graph/undirected-graph-adjacency-matrix';

const log = console.log;

async function main() {
  log(chalk.blue('Hello') + ' World' + chalk.red('!'));
  const menuChoices = [
    { name: 'Run testDrive function', value: 'testDrive' },
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
    case 'exit':
      log(chalk.yellow('Exiting...'));
      process.exit(0);
      break;
  }
}

main();

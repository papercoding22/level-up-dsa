import { select, Separator } from '@inquirer/prompts';
import chalk from 'chalk';

import { app as graphApp } from './data-structures/graph';

const log = console.log;

async function main() {
  while (true) {
    const menu = [
      {
        name: 'Graphs',
        value: '1',
      },
      new Separator(),
      { name: 'Exit', value: 'exit' },
    ];

    const answer = await select({
      message: 'Please select an application you want to run:',
      choices: menu,
    });

    switch (answer) {
      case '1':
        await graphApp();
        break;
      case 'exit':
        log(chalk.yellow('Exiting...'));
        process.exit(0);
    }
  }
}

main();

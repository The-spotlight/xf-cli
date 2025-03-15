import {program} from 'commander';

import { create } from './commands/base/create';
import { build } from './commands/base/build';
import { serve } from './commands/base/serve';
import { greet } from './commands/base/greet';
import { info } from './commands/base/info';

// export const run = (args: string[]) => {  
//   const [, , ...runArgs] = args;
//   const [command, commandArgs] = runArgs;
  
//   switch (command) {
//     case 'create':
//       create();
//       break;
//     case 'build':
//       build();
//       break;
//     case 'serve':
//       serve();
//       break;
//     default:
//       console.log('Command not found'); 
//   }
// }
program.version('0.0.1').name('xf-cli');
// 创建项目
program.command('create').description('Create a new project').action(create);
// 构建项目
program.command('build').description('Build project').action(build);
// 启动项目
program.command('serve').description('Serve project').action(serve);
// greet
program.command('greet').description('Greet').action(greet);
// info
program.command('info').description('Info').action(info);
export const run = (args: string[]) => { 
  program.parse(args);
}

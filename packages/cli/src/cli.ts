import {program} from 'commander';
import './commands'

export const run = (args: string[]) => { 
  program.parse(args);
}

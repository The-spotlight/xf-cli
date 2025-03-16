import type { Command } from 'commander'
import { spawn } from 'node:child_process'
import { logger } from '../../utils/logger'

export function serve(program: Command) {
  return program
    .createCommand('serve')
    .description('Serve CLI')
    .action(() => {
      logger.log('Serving CLI')

      const command = 'npm'
      const params = ['run', 'dev']

      const child = spawn(command, params, {
        cwd: process.cwd(), 
        stdio: 'inherit'
      })

      child.on('close', code => {
        logger.log('子进程退出，退出码 ' + code)
      })
    })
}

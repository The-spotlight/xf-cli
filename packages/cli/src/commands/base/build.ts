import type { Command } from 'commander'
import { logger } from '../../utils/logger'
import { spawn } from 'node:child_process'

export function build(program: Command) {
  return program
    .createCommand('build')
    .description('Build CLI')
    .action(() => {
      logger.log('Building CLI')

      const command = 'npm'
      const params = ['run', 'build']

      const child = spawn(command, params, {
        stdio: 'inherit'
      })

      child.on('close', code => {
        logger.log('子进程退出，退出码 ' + code)
      })
    })
}

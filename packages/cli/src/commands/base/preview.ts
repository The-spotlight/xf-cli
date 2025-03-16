import type { Command } from 'commander'
import { logger } from '../../utils/logger'
import { spawn } from 'node:child_process'

export function preview(program: Command) {
  return program
    .createCommand('preview')
    .description('preview CLI')
    .action(() => {
      logger.log('preview CLI')

      const command = 'npm'
      const params = ['run', 'preview']

      const child = spawn(command, params, {
        stdio: 'inherit'
      })

      child.on('close', code => {
        logger.log('子进程退出，退出码 ' + code)
      })
    })
}

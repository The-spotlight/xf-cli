import type { Command } from 'commander'
import { execSync } from 'node:child_process'
import { logger } from '../../utils/logger'

export function serve(program: Command) {
  return program
    .createCommand('serve')
    .description('Serve CLI')
    .action(() => {
      logger.log('Serving CLI')

      // const command = 'npm'
      // const params = ['run', 'dev']

      // const child = spawn(command, params, {
      //   cwd: __dirname,
      //   stdio: 'inherit',
      // })
      // child.on('close', code => {
      //   logger.log('子进程退出，退出码 ' + code)
      // })

      execSync('npm run dev', {
        stdio: 'inherit'
      })
    })
}

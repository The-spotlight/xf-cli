import prompts from 'prompts'
import { logger } from '../../utils/logger'
import type { Command } from 'commander'

export function greet(program: Command) {
  return program
    .createCommand('greet')
    .description('Greet')
    .action(async () => {
      // 提问
      const nameRes = await prompts({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
      })

      const hobbyRes = await prompts({
        type: 'select',
        name: 'hobby',
        message: 'What is your hobby?',
        choices: [
          { title: '🎮', value: 'game' },
          { title: '📚', value: 'book' },
          { title: '🎨', value: 'painting' }
        ]
      })
      // 打印日志
      logger.info(`Hello, ${nameRes.name}`)
      logger.success(`Your hobby is ${hobbyRes.hobby}`)
    })
}

import { run } from './cli'
import { logger } from './utils/logger'

export const defineConfig = () => {
  logger.log('Defining config')
}

export const runCLI = () => {
  run(process.argv)
}

// 入口文件，保持足够简洁

import type { Command } from 'commander'
import { logger } from '../../utils/logger'
import { loadTemplate } from '../../utils/loadTemplate'
import prompts from 'prompts'

export function create(program: Command) {
  // 创建项目
  return program
    .createCommand('create')
    .description('Create CLI')
    .arguments('<name>')
    .option('-t, --template <template>', 'Template')
    .action(async (projectName, option) => {
      let { template } = option
      if (!template) {
       const templateRes = await prompts({
         type: 'select',
         name: 'template',
         message: '请选择一个模版',
         choices: [
           { title: 'Vue', value: 'vue' },
           { title: 'Vue-ts', value: 'vue-ts' },
           { title: 'React', value: 'react' },
           { title: 'React-ts', value: 'react-ts' },
           { title: 'Vanilla', value: 'vanilla' },
           { title: 'Vanilla-ts', value: 'vanilla-ts' },
          ]
        })
        template = templateRes.template
      }
      logger.log('Creating CLI')
      loadTemplate({projectName, templateName: template, local: false})
    })
  // 拉模版
  // 加载本地模版
}

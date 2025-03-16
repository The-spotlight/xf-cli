import { join } from 'node:path'
import { copy } from 'fs-extra'
import { downloadTemplate } from 'giget'

interface LoadTemplateOptions {
  projectName: string
  templateName: string
  local?: boolean
}

const loadRemoteTemplate = async (options: Omit<LoadTemplateOptions, 'local'>) => {
  // 从远程拉取模板
  const { projectName } = options
  const {dir} = await downloadTemplate('https://codeload.github.com/design-sparx/antd-multipurpose-dashboard/tar.gz/refs/heads/main', {dir: `${process.cwd()}/.temp`})
  copy(dir, `${process.cwd()}/${projectName}`)
}

const loadLocalTemplate = (options: Omit<LoadTemplateOptions, 'local'>) => {
  // 将模板拷贝到当前目录下
  const { projectName, templateName } = options
  copy(join(__dirname, `../templates/template-${templateName}`), `${process.cwd()}/${projectName}`)
}

export function loadTemplate(options: LoadTemplateOptions) {
  const { local, ...restOptions } = options
  if (local) {
    loadLocalTemplate(restOptions)
  } else {
    loadRemoteTemplate(restOptions)
  }
}

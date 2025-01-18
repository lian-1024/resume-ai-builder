import type { Template } from '@resume-schema'

const getTemplate = (template: Template) => {
  return import(`./${template}`)
}

export default getTemplate

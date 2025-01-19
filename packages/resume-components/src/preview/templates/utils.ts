
import type { Template } from '@lianqq/resume-schema';


import Simple from './simple/index.vue';

export const getTemplate = async (template: Template) => {
  switch (template) {
    case 'simple':
      return Simple
  }
}

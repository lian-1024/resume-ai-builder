
import type { TemplateKey } from '@lianqq/resume-schema';

import Simple from './simple/index.vue';

export const getTemplate = async (template: TemplateKey) => {
  switch (template) {
    case 'simple':
      return Simple
  }
}
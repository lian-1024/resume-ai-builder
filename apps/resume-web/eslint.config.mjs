import sharedConfig from '@resume/config/eslint/nuxt'
import nuxtConfig from './.nuxt/eslint.config.mjs'

export default [
  ...sharedConfig(),
  ...nuxtConfig(),
  {
    ignores: [
      'dist',
      '.nuxt',
      'node_modules',
      '.output',
      '.git',
      'pnpm-lock.yaml'
    ]
  },
]

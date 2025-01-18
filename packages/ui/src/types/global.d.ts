declare module 'vue' {
  export interface GlobalComponents {
    Button: typeof import('@/components/button/button.vue')['default'],

  }
}

export { };


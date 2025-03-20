<script lang="ts" setup>
  import type { MotionProps } from 'motion-v'

  const props = withDefaults(defineProps<MotionProps>(), {
    initial: () => ({
      opacity: 0,
      y: 100
    }),
    inView: () => ({
      opacity: 1,
      y: 0
    }),
    inViewOptions: () => ({
      once: true
    }),
    transition: () => ({
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.3
    })
  })
</script>

<template>
  <Motion v-bind="props">
    <slot />
  </Motion>
</template>

<style lang="less" scoped></style>

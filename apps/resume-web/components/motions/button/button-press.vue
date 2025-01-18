<script lang="ts" setup>
  import type { MotionProps } from 'motion-v'

  const props = withDefaults(defineProps<MotionProps>(), {
    press: () => ({
      scale: 0.9
    })
  })
</script>

<template>
  <Motion v-bind="props">
    <slot />
  </Motion>
</template>

<style lang="less" scoped></style>

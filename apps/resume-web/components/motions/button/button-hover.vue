<script lang="ts" setup>
  import type { MotionProps } from 'motion-v'
  const props = withDefaults(defineProps<MotionProps>(), {
    hover: () => ({
      scale: 1.1
    })
  })
</script>

<template>
  <Motion v-bind="props">
    <slot />
  </Motion>
</template>

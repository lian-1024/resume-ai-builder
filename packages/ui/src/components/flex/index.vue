<script lang="ts" setup>
import { computed } from 'vue';

defineOptions({
  name: 'Flex'
})

const props = withDefaults(defineProps<{
  direction?: 'row' | 'column',
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline',
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
  gap?: 'small' | 'medium' | 'large',
  width?: string,
}>(), {
  direction: 'row',
  justify: 'start',
  align: 'start',
  wrap: 'nowrap',
  gap: 'small',
})

const gapMap = {
  small: 8,
  medium: 16,
  large: 24,
}

const gap = computed(() => {
  return props.gap ? gapMap[props.gap] : 0;
})

const styles = computed(() => {
  return {
    display: 'flex',
    flexDirection: props.direction,
    justifyContent: props.justify,
    alignItems: props.align,
    flexWrap: props.wrap,
    gap: gap.value,
    width: props.width,
  }
})

</script>

<template>
  <div :style="styles" class="flex">
    <slot />
  </div>
</template>

<style lang="less" scoped></style>
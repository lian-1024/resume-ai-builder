<script lang="ts" setup>
import { useConfig } from '@/componsables/useConfig';
import {type CSSProperties, computed } from 'vue';

defineProps<{
  title: string
}>()

defineOptions({
  name:"Section"
})

const { config } = useConfig()

const styles = computed<CSSProperties>(() => ({
  color: config.value.primaryColor,
  borderColor: config.value.primaryColor,
}))

</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <h1 class="text-xl font-bold border-b border-primary-500 pb-2" :style="styles">{{ title }}</h1>
    <slot/>
  </div>
</template>

<style lang="less" scoped>
</style>
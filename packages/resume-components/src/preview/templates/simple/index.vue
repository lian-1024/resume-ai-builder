<script lang="ts" setup>
import type { SectionKey } from '@lianqq/resume-schema';
import type { Component } from 'vue';
import Basic from './basic.vue';

defineProps<{
  sections: SectionKey[]
}>()

// 获取根据组件key渲染对应的组件
const getSectionMap: Partial<Record<SectionKey, Component>> = {
  'basics': Basic
}

</script>

<template>
  <div class="flex flex-col">
    <template v-for="section in sections">
      <component :is="getSectionMap[section]" />
    </template>
  </div>
</template>

<style lang="less" scoped>
</style>
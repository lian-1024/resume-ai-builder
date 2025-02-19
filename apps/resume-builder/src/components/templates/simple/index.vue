<script lang="ts" setup>
import type { SectionKey } from '@lianqq/resume-schema';
import type { Component } from 'vue';
import Basics from './basic.vue';
import Wrapper from '@/components/templates/components/wrapper.vue';
import Skills from './skill.vue';
import Education from './education.vue';
import Project from './project.vue';
defineOptions({
  name: "Simple"
})

defineProps<{
  sections: SectionKey[]
}>()

// 获取根据组件key渲染对应的组件
const getSectionMap: Partial<Record<SectionKey, Component>> = {
  'basics': Basics,
  'skills': Skills,
  "education": Education,
  "projects": Project
}

</script>

<template>
  <Wrapper>
    <template v-for="section in sections">
      <component :is="getSectionMap[section]" />
    </template>
  </Wrapper>
</template>

<style lang="less" scoped>
</style>
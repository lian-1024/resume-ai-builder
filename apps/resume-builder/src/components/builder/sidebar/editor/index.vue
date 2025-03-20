<script lang="ts" setup>
// 导入所需的组件和类型
import {
  Separator,
  SidebarInset,
  SidebarTrigger,
  ColorModeButton
} from '@lianqq/resume-ui'
import { type EditorIdValueType } from '../constants'
import { ref, defineExpose, type ComponentPublicInstance } from 'vue'
import { EditorSectionBasics, EditorSectionSkill, EditorSectionProject, EditorSectionEducation } from './sections';

import { EditorIdMap } from '../constants';

// 容器引用
const containerRef = ref<HTMLElement | null>(null)

// 定义引用类型
type RefType = ComponentPublicInstance | HTMLElement | Element | null

// 存储各个编辑器部分的引用
const itemRefs = {
  [EditorIdMap.BASICS]: ref<RefType>(null),
  [EditorIdMap.EDUCATION]: ref<RefType>(null),
  [EditorIdMap.SKILL]: ref<RefType>(null),
  [EditorIdMap.PROJECT]: ref<RefType>(null),
}

// 处理滚动到指定元素的方法
const handleScrollToElement = (id: EditorIdValueType) => {
  const target = itemRefs[id].value
  if (!target) return
  console.log("target",target)
  // 判断目标是组件实例还是DOM元素
  const element = ('$el' in target) ? target.$el : target
  // 滚动元素到可视区域
  element?.scrollIntoView({ behavior: 'smooth' })
}

// 暴露滚动方法给父组件
defineExpose({
  scrollToElement: handleScrollToElement
})
</script>

<template>
  <!-- 侧边栏内容区域 -->
  <SidebarInset class="bg-white dark:bg-neutral-950 overflow-y-auto h-screen">
    <!-- 顶部头部区域 -->
    <header
      class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div class="flex items-center gap-2 px-4">
        <SidebarTrigger class="-ml-1" />
        <Separator orientation="vertical" class="mr-2 h-4" />
        <ColorModeButton />
      </div>
    </header>
    <!-- 主要内容区域 -->
    <div ref="containerRef" class="flex flex-1 flex-col gap-8 px-4 my-4 pt-0 overflow-y-auto">
      <!-- 基本信息编辑器 -->
      <EditorSectionBasics :ref="(el) => itemRefs[EditorIdMap.BASICS].value = el" :id="EditorIdMap.BASICS" />
      <!-- 教育经历编辑器 -->
      <EditorSectionEducation :ref="(el) => itemRefs[EditorIdMap.EDUCATION].value = el" :id="EditorIdMap.EDUCATION" />
      <!-- 技能编辑器 -->
      <EditorSectionSkill :ref="(el) => itemRefs[EditorIdMap.SKILL].value = el" :id="EditorIdMap.SKILL" />
      <!-- 项目经历编辑器 -->
      <EditorSectionProject :ref="(el) => itemRefs[EditorIdMap.PROJECT].value = el" :id="EditorIdMap.PROJECT" />
    </div>
  </SidebarInset>
</template>

<style lang="less" scoped></style>

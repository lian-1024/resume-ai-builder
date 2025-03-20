<script lang="ts" setup>
import { SidebarProvider, toast } from '@lianqq/resume-ui';
import Editor from './editor/index.vue';
import Sections from './sections/index.vue';
import { ref } from 'vue';
import type { EditorIdValueType } from './constants';
defineOptions({
  name: 'BuilderSidebar'
})

const editorRef = ref<InstanceType<typeof Editor>>()

/**
 * 滚动到指定元素
 * @param id 元素id
 */
const handleScrollTo = (id: EditorIdValueType) => {
  
  if (!editorRef.value) return toast({
    title: '操作失败',
    description: '请稍后再试'
  })
  editorRef.value.scrollToElement(id)
}
</script>
<template>
  <SidebarProvider class="flex max-w-[666px] border-r border-zinc-200 dark:border-zinc-800" :defaultOpen="false">
    <Sections @scrollTo="handleScrollTo" />
    <Editor ref="editorRef" />
  </SidebarProvider>
</template>

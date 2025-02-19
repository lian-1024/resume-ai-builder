<script lang="ts" setup>
  import { SidebarProvider } from '@lianqq/resume-ui';
import Editor from './editor/index.vue';
import Sections from './sections/index.vue';

  defineOptions({
    name:'BuilderSidebar'
  })
</script>
<template>
  <SidebarProvider
    class="flex max-w-[666px] border-r border-zinc-200 dark:border-zinc-800"
    :defaultOpen="false"
  >
    <Sections />
    <Editor />
  </SidebarProvider>
</template>

<style lang="less" scoped></style>

<script lang="ts" setup>
  import {
    Separator,
    SidebarInset,
    SidebarTrigger,
    ColorModeButton
  } from '@lianqq/resume-ui' 

  import {EditorSectionBasics} from './sections';
</script>

<template>
  <SidebarInset class="bg-white dark:bg-neutral-950">
    <header
      class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
    >
      <div class="flex items-center gap-2 px-4">
        <SidebarTrigger class="-ml-1" />
        <Separator
          orientation="vertical"
          class="mr-2 h-4"
        />
        <ColorModeButton/>
      </div>
    </header> 
    <div class="flex flex-1 flex-col gap-4 px-4 my-4 pt-0">
      <EditorSectionBasics/>
    </div>
  </SidebarInset>
</template>

<style lang="less" scoped></style>

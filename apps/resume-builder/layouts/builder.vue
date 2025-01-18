<script lang="ts" setup>
  defineOptions({
    name: 'BuilderLayout'
  })
</script>
<template>
  <div class="flex w-full h-full dark:bg-zinc-950">
    <div class="min-w-[666px]">
      <slot name="sidebar">
        <div>
          sidebar
        </div>
      </slot>
    </div>
    <div class="flex-1 flex flex-col">
      <slot name="header">
        <div>
          header
        </div>
      </slot>
      <slot name="content">
        <div>
          content
        </div>
      </slot>
    </div>
  </div>
</template>

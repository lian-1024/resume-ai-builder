<script lang="ts" setup>
</script>

<template>
  <NuxtLayout name="builder">
    <template #header>
      <BuilderHeader />
    </template>
    <template #sidebar>
      <BuilderSidebar />
    </template>
    <template #content>
       <iframe src="http://localhost:3003/resume/preview" class="bg-zinc-100 dark:bg-zinc-950 relative left-0 top-0 bottom-0 right-0 w-full flex-1" />
    </template>
  </NuxtLayout>
</template>

<style lang="less" scoped></style>
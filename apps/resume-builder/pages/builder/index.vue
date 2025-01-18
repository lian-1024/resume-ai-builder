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
     <div class="h-[calc(100vh-64px)] w-full relative overflow-auto flex-1">
       <iframe src="http://localhost:3003/resume/preview" class="absolute left-0 top-0 bottom-0 right-0 w-screen  h-[calc(100vh-64px)]" />
     </div>
    </template>
  </NuxtLayout>
</template>

<style lang="less" scoped></style>
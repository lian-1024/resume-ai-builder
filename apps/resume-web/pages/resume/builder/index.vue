<script lang="ts" setup>
  import BuilderHeader from '../../../../resume-builder/components/builder/header/index.vue';
import BuilderSidebarLeft from '../../../../resume-builder/components/builder/sidebar/index.vue';
import BuilderLayout from '../../../../resume-builder/layouts/default.vue';

  definePageMeta({
    layout: false
  })

  defineOptions({
    name: 'ResumeBuilder'
  })
</script>

<template>
  <BuilderLayout>
    <template #sidebar>
      <BuilderSidebarLeft />
    </template>
    <template #header>
      <BuilderHeader />
    </template>
    <template #content>
      <iframe src="www.baidu.com" />
    </template>
  </BuilderLayout>
</template>


<script lang="ts" setup>
import { getTemplate } from '@lianqq/resume-components/preview';
import type { SectionKey } from '@lianqq/resume-schema';
import { Suspense } from 'vue';

// 页面大小
const pageSize = 'a4'

// 渲染的section
const sections = ref<SectionKey[]>(['basics'])

// 异步加载模板组件
const ResumeTemplate = defineAsyncComponent(async () => {
  const template = await getTemplate('Simple')
  return template
})
</script>

<template>
  <PreviewPage :page-size="pageSize">
    <div class="w-full h-full p-6 bg-white">
      <Suspense>
        <ResumeTemplate :sections="sections" />
        <template #fallback>
          loading
        </template>
      </Suspense>
    </div>
  </PreviewPage>
</template>

<style lang="less" scoped></style>
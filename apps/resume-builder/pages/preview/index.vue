<script lang="ts" setup>
import { getTemplate } from '@/components/templates';
import type { SectionKey } from '@lianqq/resume-schema';
import { Suspense } from 'vue';
import { IframeMessageTypeMap, type IframeMessageType } from '@/composables/use-iframe';
import { ResumeProvider } from '~/components/preview/provider';
// 页面大小
const pageSize = 'a4'

// 渲染的section
const sections = ref<SectionKey[]>(['basics', 'skills', 'education', 'projects'])
// 异步加载模板组件
const ResumeTemplate = defineAsyncComponent(async () => {
  const template = await getTemplate('simple')
  return template
})


</script>

<template>
  <PreviewPage :page-size="pageSize">
    <ResumeProvider>
      <div class="w-full h-full p-6 bg-white">
      <Suspense>
        <ResumeTemplate :sections="sections" />
        <template #fallback>
          loading
        </template>
      </Suspense>
    </div>
    </ResumeProvider>
  </PreviewPage>
</template>

<style lang="less" scoped></style>
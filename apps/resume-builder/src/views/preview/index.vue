<script lang="ts" setup>
import { getTemplate } from '@/components/templates';
import type { SectionKey } from '@lianqq/resume-schema';
import { onMounted, Suspense } from 'vue';
import { defineAsyncComponent, ref } from 'vue';
import { ResumeProvider } from '@/components/preview/provider';
import PreviewPage from '@/components/preview/page.vue';
import { useRoute } from 'vue-router';
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
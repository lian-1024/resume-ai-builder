<script lang="ts" setup>
import BuilderHeader from '@/components/builder/header/index.vue'
import BuilderSidebar from '@/components/builder/sidebar/index.vue'
import { useResumeStore } from '@/stores/modules/resume';
import { useIframeResume, IframeMessageTypeMap } from '@/composables/use-iframe'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ResumeActions } from '@/components/feature/resume-actions'
import { useResumeAI } from '@/composables/resume/use-resume-ai';
import { extractCodeBlock } from '@lianqq/resume-utils';
import type { ResumeData } from '@lianqq/resume-schema';
const resumeStore = useResumeStore()
const { initIframe, updateResumeData } = useIframeResume()
const { generateResume } = useResumeAI()

const iframeRef = ref<HTMLIFrameElement | null>(null)


const route = useRoute()
 

/**
 * 握手机制
 * 用于监听预览页发送的ready消息，如果预览页发送了ready消息，则开始发送简历数据
 * @param event 
 */
const previewReadyHandler = async (event: MessageEvent) => {
  if (event.data && event.data.type === IframeMessageTypeMap.READY) {
    console.log("预览页已就绪，开始发送 resume 数据")
    // 移除监听器
    window.removeEventListener('message', previewReadyHandler)
    // 发送简历数据
    await updateResumeData(IframeMessageTypeMap.INIT_RESUME, resumeStore.resume)
  }
}


const onIframeLoad = async () => {
  await initIframe(iframeRef.value)
  window.addEventListener('message', previewReadyHandler)
}

const handleGenerateResume = async (description?:string) => {
  if(!description) return
  const result = JSON.parse(extractCodeBlock(await generateResume(description))[0]) as ResumeData

  resumeStore.setResumeValue('sections', result.sections)
  resumeStore.setResumeValue('basics', result.basics)
}

onMounted(() => {
  resumeStore.initResumeData()
  if(route.query.type === 'generate'){
    console.log("route.query.content",route.query.content);
    
    const content = route.query.content?.toString()
    handleGenerateResume(content)
  }
  // iframe的onload以及message事件都不会触发
})

</script>

<template>
  <div class="flex w-full h-full dark:bg-zinc-950">
    <div class="min-w-[666px]">
      <BuilderSidebar />
    </div>
    <div class="flex-1 flex flex-col relative">
      <div>
        <BuilderHeader />
      </div>
      <iframe @load="onIframeLoad" ref="iframeRef" src="http://localhost:5173/preview"
        class="bg-zinc-100 dark:bg-zinc-950 relative left-0 top-0 bottom-0 right-0 w-full flex-1" />
      <ResumeActions class="absolute top-1/2 right-4" />
    </div>
  </div>
</template>

<style lang="less" scoped></style>
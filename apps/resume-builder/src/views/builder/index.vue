<script lang="ts" setup>
import BuilderHeader from '@/components/builder/header/index.vue'
import BuilderSidebar from '@/components/builder/sidebar/index.vue'
import { useResumeStore } from '@/stores/modules/resume';
import { useIframeResume, IframeMessageTypeMap } from '@lianqq/resume-utils'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { ResumeActions } from '@/components/feature/resume-actions'
import { useResumeBuilder } from '@/composables/use-resume-builder'
import { modelConfig } from '@/config/model.config';
import { Example } from '@lianqq/resume-schema'
import { usePanZoom } from '@/composables/use-pan-zoom'
import PanZoomButton from '@/components/feature/pan-zoom-button/pan-zoom-button.vue'
const resumeStore = useResumeStore()
const { initIframe, updateResumeData } = useIframeResume()

// lianqq、前端开发，精通 Vue、React、开发简历编辑器、SaaS 人力资源管理平台
const iframeRef = ref<HTMLIFrameElement | null>(null)

const { initOptimizer, builderResume } = useResumeBuilder(modelConfig)
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


/**
 * 生成简历
 * @param description 描述
 */
const handleGenerateResume = async (description?: string) => {
  
  if (!description) return
  const result = await builderResume(description, Example)

  // const result = JSON.parse(extractCodeBlock(await generateResume(description))[0]) as ResumeData

  // resumeStore.setResumeValue('sections', result.sections)
  // resumeStore.setResumeValue('basics', result.basics)
}


onMounted(() => {
  resumeStore.initResumeData()
  if (route.query.content) {

    initOptimizer()
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
        class=" bg-zinc-100 dark:bg-zinc-950 absolute h-full left-0 top-0 bottom-0 right-0 w-full flex-1" />
      <ResumeActions class="absolute top-1/2 right-4" />

    </div>
  </div>
</template>

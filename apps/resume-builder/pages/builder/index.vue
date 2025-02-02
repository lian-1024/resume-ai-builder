<script lang="ts" setup>

import { useResumeStore } from '~/stores/resume';
import { useIframeResume, IframeMessageTypeMap } from '~/composables/use-iframe'

const resumeStore = useResumeStore()
const { initIframe, updateResumeData } = useIframeResume()
const iframeRef = ref<HTMLIFrameElement | null>(null)


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

onMounted(() => {
  resumeStore.initResumeData()
  // iframe的onload以及message事件都不会触发
})

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
      <!-- 使用ClientOnly确保iframe在客户端渲染 否则load事件不会触发 -->
      <ClientOnly>
        <iframe @load="onIframeLoad" ref="iframeRef" src="http://localhost:3003/resume/preview"
          class="bg-zinc-100 dark:bg-zinc-950 relative left-0 top-0 bottom-0 right-0 w-full flex-1" />
      </ClientOnly>
    </template>
  </NuxtLayout>
</template>

<style lang="less" scoped></style>
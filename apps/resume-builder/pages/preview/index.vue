<script lang="ts" setup>
import { getTemplate } from '@/components/templates';
import type { SectionKey } from '@lianqq/resume-schema';
import { Suspense } from 'vue';
import { IframeMessageTypeMap, type IframeMessageType } from '@/composables/use-iframe';
// 页面大小
const pageSize = 'a4'

// 渲染的section
const sections = ref<SectionKey[]>(['basics', 'skills', 'education', 'projects'])

// 异步加载模板组件
const ResumeTemplate = defineAsyncComponent(async () => {
  const template = await getTemplate('simple')
  return template
})

const {setResume} = useResumeStore()

// 根据消息类型获取消息处理器
const messageHandler = (e:MessageEvent) => {
  switch(e.data.type){
    case IframeMessageTypeMap.INIT_RESUME:
      // console.log("resume data",e.data)
      setResume(e.data.data)
      break
    case IframeMessageTypeMap.UPDATE_RESUME:
      console.log("update resume data")
      break
  }
}



// 注册消息监听器
const registerMessageListener = () => {
  // 监听父级发送的消息
  window.addEventListener('message', messageHandler)

  //初始化完毕 发送握手消息
  window.parent.postMessage({ type: IframeMessageTypeMap.READY }, '*')
}



onMounted(() => {
  registerMessageListener()
})

onUnmounted(() => {
  window.removeEventListener('message', messageHandler)
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
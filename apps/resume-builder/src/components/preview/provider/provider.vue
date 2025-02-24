<script lang="ts" setup>
import type { ResumeData } from '@lianqq/resume-schema'
import { resumeKey } from './index'
import {ref,provide,onMounted,onUnmounted} from 'vue'
import _set from 'lodash-es/set'
import { IframeMessageTypeMap } from '@/composables/use-iframe'
import { printElementPdf } from '@/utils/print-pdf'
const resumeData = ref<ResumeData>({})
const resumeRef = ref<HTMLElement>()

const setResumeValue = (path:string,value:any) => {
  _set(resumeData.value,path,value)
}



// 根据消息类型获取消息处理器
const messageHandler = (e:MessageEvent) => {
  switch(e.data.type){
    case IframeMessageTypeMap.INIT_RESUME:
      // console.log("resume data",e.data)
      resumeData.value = e.data.data
      break
    case IframeMessageTypeMap.UPDATE_RESUME:
      console.log("update resume data",e.data.data)
      const {path,value} = e.data.data
      if(path) {
        setResumeValue(path,value)
      }
      break
    case IframeMessageTypeMap.EXPORT_PDF:
      // 处理导出pdf
      if(!resumeRef.value) return 
      printElementPdf(resumeRef.value)
      break
    case IframeMessageTypeMap.SET_RESUME:
      if(e.data.data) {
        resumeData.value = e.data.data
      }
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

// 提供简历数据
provide(resumeKey,{
    resumeData,
    setResumeValue
})


</script>

<template>
    <div ref="resumeRef">
        <slot />
    </div>
</template>

<style lang="less" scoped>

</style>

<script lang="ts" setup>
import type { ResumeData } from '@lianqq/resume-schema'
import { Example } from '@lianqq/resume-schema'
import { resumeKey } from './index'
import { ref, provide, onMounted, onUnmounted, computed } from 'vue'
import _set from 'lodash-es/set'
import { IframeMessageTypeMap } from '@lianqq/resume-utils'
import { useResumeStore } from '@/stores'
import { toast } from '@lianqq/resume-ui'
import { exportElementToPDF } from '@lianqq/resume-utils'
const resumeRef = ref<HTMLElement>()
const resumeStore = useResumeStore()

const exportToPDF = async () => {
  const response = await fetch('http://localhost:3002/api/export-pdf')
  const blob = await response.blob()
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'resume.pdf'
  link.click()
  window.URL.revokeObjectURL(url)
}



// 根据消息类型获取消息处理器
const messageHandler = async (e: MessageEvent) => {
  switch (e.data.type) {
    case IframeMessageTypeMap.INIT_RESUME:
      // console.log("resume data",e.data)
      resumeStore.setResume(e.data.data)

      console.log("resumeStore.resume", resumeStore.resume);

      break
    case IframeMessageTypeMap.UPDATE_RESUME:
      console.log("update resume data", e.data.data)
      const { path, value } = e.data.data
      if (path) {
        resumeStore.setResumeValue(path, value)
      }
      break
    case IframeMessageTypeMap.EXPORT_PDF:
      // 处理导出pdf
      if (!resumeRef.value) return
      // toast({
      //   title: "有 Bug 哦",
      //   description: "导出功能暂时关闭",
      //   variant: "destructive"
      // })

      try {
        const isExport = await exportToPDF()
        console.log("isExport", isExport);
        toast({
          title: "导出成功",
          description: "导出成功",
          variant: "success"
        })
      } catch (error) {
        console.error("导出失败", error)
      }

      break
    case IframeMessageTypeMap.SET_RESUME:
      if (e.data.data) {
        resumeStore.setResume = e.data.data
      }
      break
    case IframeMessageTypeMap.CHANGE_THEME:
      // if(e.data.data) {
      //   resumeData.value.theme = e.data.data
      // }
      console.log("change theme", e.data.data)
      break
    default:
      toast({
        title: "未知消息类型",
        description: e.data.type,
        type: "error"
      })
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
  resumeStore.initResumeData(Example)
  registerMessageListener()
})

onUnmounted(() => {
  window.removeEventListener('message', messageHandler)
})

// 提供简历数据
provide(resumeKey, {
  resumeData: computed(() => resumeStore.resume),
  setResumeValue: resumeStore.setResumeValue
})


</script>

<template>
  <div ref="resumeRef">
    <slot />
  </div>
</template>

<style lang="less" scoped></style>

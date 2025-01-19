<script lang="ts" setup>
import { getTemplate } from '@lianqq/resume-components/preview';
import type { SectionKey } from '@lianqq/resume-schema';

// 大小
const pageSize = 'a4'
// 渲染的模版
const template = ref()
// 渲染的section
const sections = ref<SectionKey[]>(['basics'])

const getComponent = () => {
  getTemplate('simple').then(res=>{
    console.log(res);
    template.value = res
  })
}


getComponent()

// const template =await getTemplate('simple')
</script>

<template>
 <PreviewPage :page-size="pageSize">
  <div class="w-full h-full bg-white">
    <component :is="template" :sections="sections"/>
  </div>
 </PreviewPage>

</template>

<style lang="less" scoped>
</style>
<script lang="ts" setup>
import EditorSectionWrapper from './components/wrapper.vue'
import { Textarea} from '@lianqq/resume-ui'
import InputItem from './components/input-item.vue'
import {useResumeStore} from '@/stores'
import {storeToRefs} from 'pinia'
import RichTextEditor from '@/components/feature/rich-text/index.vue'
import {computed} from 'vue'
defineOptions({
  name: "EditorSectionSkill"
})

const resumeStore = useResumeStore()
const {resume} = storeToRefs(resumeStore)

const skill = computed(() => resume.value.sections?.skills || {})
const title = computed(() => skill.value.name || '')
const skills = computed(() => skill.value.items || [])

const changeValueHandle = (path:string,value:any) => {
  resumeStore.setResumeValue(path,value)
}

const PathMap = {
  name:(index:number) =>  `sections.skills.items[${index}].name`,
  summary:(index:number) =>  `sections.skills.items[${index}].summary`,
}
</script>

<template>
  <EditorSectionWrapper :title="title" icon="lucide:wrench">
    <template #content>
     <div class="flex flex-col gap-6" v-for="(item,index) in skills" :key="item.id">
      <InputItem class="w-1/3 min-w-32" title="技能名称" placeholder="请输入您的技能名称" :model-value="item.name" @update:model-value="(value) => changeValueHandle(PathMap.name(index),value)"/>
      <div class="flex flex-col gap-2 flex-1">
        <span class="text-sm dark:text-zinc-300 text-zinc-500">技能描述</span>
        <RichTextEditor placeholder="请输入您的在校经历" :model-value="item.summary!"
        @update:model-value="(value) => changeValueHandle(PathMap.summary(index), value)" />
      </div>
     </div>
    </template>
  </EditorSectionWrapper>
</template>

<style lang="less" scoped></style>

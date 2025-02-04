<script lang="ts" setup>
import EditorSectionWrapper from './components/wrapper.vue'
import { Input,Textarea} from '@lianqq/resume-ui'

defineOptions({
  name: "EditorSectionSkill"
})

const resumeStore = useResumeStore()
const {resume} = storeToRefs(resumeStore)

const skill = computed(() => resume.value.sections?.skills || {})
const title = computed(() => skill.value.name || '')
const skills = computed(() => skill.value.items || [])

</script>

<template>
  <EditorSectionWrapper :title="title" icon="lucide:wrench">
    <template #content>
     <div class="flex flex-col gap-6" v-for="item in skills" :key="item.id">
      <div class="flex flex-col gap-2 flex-1 ">
        <span class="text-sm dark:text-zinc-300 text-zinc-500">技能名称</span>
        <Input placeholder="请输入您的技能名称" :value="item.name" class="w-1/3 min-w-32"   />
      </div>
      <div class="flex flex-col gap-2 flex-1 ">
        <span class="text-sm dark:text-zinc-300 text-zinc-500">技能描述</span>
        <Textarea placeholder="请输入您的技能描述"  :value="item.summary" />
      </div>
     </div>
    </template>
  </EditorSectionWrapper>
</template>

<style lang="less" scoped></style>

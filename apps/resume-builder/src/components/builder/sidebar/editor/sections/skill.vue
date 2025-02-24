<script lang="ts" setup>
import EditorSectionWrapper from './components/wrapper.vue'
import InputItem from './components/input-item.vue'
import { useResumeStore } from '@/stores'
import { storeToRefs } from 'pinia'
import RichTextEditor from '@/components/feature/rich-text/index.vue'
import { computed } from 'vue'
import { AddSectionButton } from '@/components/feature/add-section-modal'
import { RichTextTypeMap } from '@/components/feature/rich-text'
defineOptions({
  name: "EditorSectionSkill"
})

const resumeStore = useResumeStore()
const { resume } = storeToRefs(resumeStore)

const skill = computed(() => resume.value.sections?.skills || {})
const title = computed(() => skill.value.name || '')
const skills = computed(() => skill.value.items || [])

const changeValueHandle = (path: string, value: any) => {
  resumeStore.setResumeValue(path, value)
}

const PathMap = {
  name: (index: number) => `sections.skills.items[${index}].name`,
  summary: (index: number) => `sections.skills.items[${index}].summary`,
}

/**
 * 添加education
 * @param values 
 */
const handleAddEducation = (values: any) => {
  const index = resume.value.sections?.skills?.items?.length || 0
  resumeStore.setResumeValue(`sections.skills.items[${index}]`, values)
}

const modalConfig = {
  fields: [
    {
      name: "name",
      label: "技能名称",
      placeholder: "请输入您的技能名称",
      type: "text",
    }
  ],
  modal: {
    title: "添加技能"
  },
  submitText: "添加",
  onSubmit: handleAddEducation
}
</script>

<template>
  <EditorSectionWrapper :title="title" icon="lucide:wrench">
    <template #content>
      <div class="flex flex-col gap-6" v-for="(item, index) in skills" :key="item.id">
        <InputItem class="w-1/3 min-w-32" title="技能名称" placeholder="请输入您的技能名称" :model-value="item.name"
          @update:model-value="(value) => changeValueHandle(PathMap.name(index), value)" />
        <div class="flex flex-col gap-2 flex-1">
          <span class="text-sm dark:text-zinc-300 text-zinc-500">技能描述</span>
          <RichTextEditor :type="RichTextTypeMap.SKILL" placeholder="请输入您的技能描述" :model-value="item.summary!"
            @update:model-value="(value) => changeValueHandle(PathMap.summary(index), value)" />
        </div>
      </div>
      <AddSectionButton v-bind="modalConfig" />
    </template>
  </EditorSectionWrapper>
</template>

<style lang="less" scoped></style>

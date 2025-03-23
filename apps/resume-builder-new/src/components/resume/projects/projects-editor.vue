<script lang="ts" setup>
import { Input } from '@lianqq/resume-ui'
import { onMounted, ref, computed } from 'vue';
import { useResumeStore } from '@/stores'
import { defaultProject, type Project } from '@lianqq/resume-schema';
import LabelWithInput from '@/components/label-with-input.vue';
import { Editor } from '@/features/editor';
const resumeStore = useResumeStore()

onMounted(() => {
    console.log('basic-editor')
    resumeStore.loadDraftData()
})

const projects = computed(() => {
    return resumeStore.draftData.sections?.projects 
})
</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-col gap-4" v-for="(project, index) in projects?.items" :key="project.id">
            <div class="flex gap-4">
                <LabelWithInput label="项目名称" placeholder="请输入项目名称" :model-value="project.name"
                    @update:model-value="(value) => resumeStore.setDraftData(`sections.projects.items[${index}].name`, value)" />
                <LabelWithInput label="角色" placeholder="请输入角色" :model-value="project.role"
                    @update:model-value="(value) => resumeStore.setDraftData(`sections.projects.items[${index}].role`, value)" />
                <LabelWithInput label="开始时间" placeholder="请输入开始时间" :model-value="project.startDate"
                    @update:model-value="(value) => resumeStore.setDraftData(`sections.projects.items[${index}].startDate`, value)" />
                <LabelWithInput label="结束时间" placeholder="请输入结束时间" :model-value="project.endDate"
                    @update:model-value="(value) => resumeStore.setDraftData(`sections.projects.items[${index}].endDate`, value)" />
            </div>
            <Editor :model-value="project.summary" @update:model-value="(value) => resumeStore.setDraftData(`sections.projects.items[${index}].summary`, value)" />
        </div>
    </div>
</template>

<style lang="less" scoped></style>
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

const educations = computed(() => {
    return resumeStore.draftData.sections?.education
})
</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-col gap-4" v-for="(education, index) in educations?.items" :key="education.id">
            <div class="grid grid-cols-4 gap-4">
                <LabelWithInput label="学校" placeholder="请输入学校" :model-value="education.school"
                    @update:model-value="(value) => resumeStore.setDraftData(`sections.education.items[${index}].school`, value)" />
                <LabelWithInput label="专业" placeholder="请输入专业" :model-value="education.major"
                    @update:model-value="(value) => resumeStore.setDraftData(`sections.education.items[${index}].major`, value)" />
                <LabelWithInput label="学位" placeholder="请输入学位" :model-value="education.degree"
                    @update:model-value="(value) => resumeStore.setDraftData(`sections.education.items[${index}].degree`, value)" />
                <LabelWithInput label="开始时间" placeholder="请输入开始时间" :model-value="education.startDate"
                    @update:model-value="(value) => resumeStore.setDraftData(`sections.education.items[${index}].startDate`, value)" />
                <LabelWithInput label="结束时间" placeholder="请输入结束时间" :model-value="education.endDate"
                    @update:model-value="(value) => resumeStore.setDraftData(`sections.education.items[${index}].endDate`, value)" />
            </div>
            <Editor :model-value="education.summary"
                @update:model-value="(value) => resumeStore.setDraftData(`sections.education.items[${index}].summary`, value)" />
        </div>
    </div>
</template>

<style lang="less" scoped></style>
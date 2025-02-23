<script lang="ts" setup>
import EditorSectionWrapper from './components/wrapper.vue'
import InputItem from './components/input-item.vue'
import { storeToRefs } from 'pinia'
import { useResumeStore } from '@/stores/modules/resume'
import Item from './components/item.vue'
import { DatePicker } from '@lianqq/resume-ui'
import { computed } from 'vue'
import RichTextEditor from '@/components/feature/rich-text/index.vue'
import { AddSectionButton } from '@/components/feature/add-section-modal'
const resumeStore = useResumeStore()
const { resume } = storeToRefs(resumeStore)
const education = computed(() => resume.value.sections?.education || {})

// @ts-ignore
const changeValueHandle = (path: string, value: any) => {
    console.log(path, value)

    resumeStore.setResumeValue(path, value)
}
defineOptions({
    name: 'EditorSectionEducation'
})
const PathMap = {
    school: (index: number) => `sections.education.items[${index}].school`,
    major: (index: number) => `sections.education.items[${index}].major`,
    degree: (index: number) => `sections.education.items[${index}].degree`,
    studyType: (index: number) => `sections.education.items[${index}].studyType`,
    startDate: (index: number) => `sections.education.items[${index}].startDate`,
    endDate: (index: number) => `sections.education.items[${index}].endDate`,
    summary: (index: number) => `sections.education.items[${index}].summary`,
}

const handleAddEducation = (values: any) => {
    console.log(values);
    const index = resume.value.sections?.education?.items?.length
    resumeStore.setResumeValue(`sections.education.items[${index}]`, values)
}

const modalConfig = {
    fields: [
        {
            name: "school",
            label: "学校名称",
            placeholder: "请输入学校名称",
            type: "text",
        }
    ],
    modal: {
        title: "添加教育经历"
    },
    submitText: "添加",
    onSubmit: handleAddEducation
}
</script>

<template>
    <EditorSectionWrapper title="教育经历">
        <template #content>
            <div class="flex flex-col gap-8" v-for="(item, index) in education.items" :key="item.id">
                <div class="flex flex-col gap-6">
                    <div class="grid grid-cols-3 grid-rows-2 gap-6">
                        <InputItem title="学校" placeholder="请输入您的学校" :model-value="item.school"
                            @update:model-value="(value) => changeValueHandle(PathMap.school(index), value)" />
                        <InputItem title="专业" placeholder="请输入您的专业" :model-value="item.major"
                            @update:model-value="(value) => changeValueHandle(PathMap.major(index), value)" />
                        <InputItem title="学历" placeholder="请输入您的学历" :model-value="item.degree"
                            @update:model-value="(value) => changeValueHandle(PathMap.degree(index), value)" />
                        <Item title="在读时间" placeholder="请输入您的在读时间">
                            <DatePicker class="w-full" />
                        </Item>
                        <InputItem class="col-start-3 -col-end-1" title="学历类型" placeholder="请输入您的学历类型"
                            :model-value="item.studyType"
                            @update:model-value="(value) => changeValueHandle(PathMap.studyType(index), value)" />

                    </div>
                    <div class="flex flex-col gap-2 flex-1 ">
                        <span class="text-sm dark:text-zinc-300 text-zinc-500">在校经历</span>
                        <RichTextEditor placeholder="请输入您的在校经历" :model-value="item.summary!"
                            @update:model-value="(value) => changeValueHandle(PathMap.summary(index), value)" />
                    </div>
                </div>
            </div>
            <AddSectionButton v-bind="modalConfig" />

        </template>
    </EditorSectionWrapper>
</template>

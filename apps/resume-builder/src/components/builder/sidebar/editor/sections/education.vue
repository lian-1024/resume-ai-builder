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
import { RichTextTypeMap } from '@/components/feature/rich-text'
import { type DateRange } from '@lianqq/resume-ui'
import { stringToDate, changeDate } from '@/utils/calendar'
const resumeStore = useResumeStore()
const { resume } = storeToRefs(resumeStore)
const education = computed(() => resume.value.sections?.education || {})

// @ts-ignore
const changeValueHandle = (path: string, value: any) => {
    
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

/**
 * 添加education
 * @param values 
 */
const handleAddEducation = (values: any) => {
    const index = resume.value.sections?.education?.items?.length || 0
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
/**
 * 修改日期触发事件
 * @param path 
 * @param value 
 */
const changeDateHandle = (dateRange:DateRange,index:number) => {
    console.log("dateRange:",dateRange,index);
}
const dateValue = computed({
    get() {},
    set(){}
})

</script>

<template>
    <EditorSectionWrapper title="教育经历">
        <template #content>
            <div class="flex flex-col gap-8 mb-5" v-for="(item, index) in education.items" :key="item.id">
                <div class="flex flex-col gap-6">
                    <div class="grid grid-cols-3 grid-rows-2 gap-6">
                        <InputItem title="学校" placeholder="请输入您的学校" :model-value="item.school"
                            @update:model-value="(value) => changeValueHandle(PathMap.school(index), value)" />
                        <InputItem title="专业" placeholder="请输入您的专业" :model-value="item.major"
                            @update:model-value="(value) => changeValueHandle(PathMap.major(index), value)" />
                        <InputItem title="学历" placeholder="请输入您的学历" :model-value="item.degree"
                            @update:model-value="(value) => changeValueHandle(PathMap.degree(index), value)" />
                        <Item title="在读时间" placeholder="请输入您的在读时间">
                            <div class="flex gap-2">
                                <DatePicker :date="stringToDate(item.startDate)" @update:date="(value) => changeDate(PathMap.startDate(index), value, index)"
                                  />
                            <DatePicker :date="stringToDate(item.endDate)" @update:date="(value) => changeDate(PathMap.endDate(index), value, index)"
                                  />
                            </div>
                        </Item>
                        <InputItem class="col-start-3 -col-end-1" title="学历类型" placeholder="请输入您的学历类型"
                            :model-value="item.studyType"
                            @update:model-value="(value) => changeValueHandle(PathMap.studyType(index), value)" />

                    </div>
                    <div class="flex flex-col gap-2 flex-1 ">
                        <span class="text-sm dark:text-zinc-300 text-zinc-500">在校经历</span>
                        <RichTextEditor :type="RichTextTypeMap.EDUCATION" placeholder="请输入您的在校经历" :model-value="item.summary!"
                            @update:model-value="(value) => changeValueHandle(PathMap.summary(index), value)" />
                    </div>
                </div>
            </div>
            <AddSectionButton v-bind="modalConfig"  />
        </template>
    </EditorSectionWrapper>
</template>

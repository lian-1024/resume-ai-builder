<script lang="ts" setup>
import EditorSectionWrapper from './components/wrapper.vue'
import InputItem from './components/input-item.vue'
import { storeToRefs } from 'pinia'
import { useResumeStore } from '~/stores/resume'
import Item from './components/item.vue'
import { DatePicker,Textarea } from '@lianqq/resume-ui'

const resumeStore = useResumeStore()
const { resume } = storeToRefs(resumeStore)
const education = computed(() => resume.value.sections?.education || {})
const changeValueHandle = (value: string) => {
    console.log(value)
}
defineOptions({
    name: 'EditorSectionEducation'
})
</script>

<template>
    <EditorSectionWrapper title="教育经历">
        <template #content>
            <div class="flex flex-col gap-8" v-for="item in education.items" :key="item.id">
                <div class="flex flex-col gap-6">
                    <div class="grid grid-cols-3 grid-rows-2 gap-6">
                        <InputItem title="学校" placeholder="请输入您的学校" :model-value="item.school"
                            @update:model-value="changeValueHandle" />
                        <InputItem title="专业" placeholder="请输入您的专业" :model-value="item.major"
                            @update:model-value="changeValueHandle" />
                        <InputItem title="学历" placeholder="请输入您的学历" :model-value="item.degree"
                            @update:model-value="changeValueHandle" />
                        <Item title="在读时间" placeholder="请输入您的在读时间">
                            <DatePicker class="w-full" />
                        </Item>
                        <InputItem class="col-start-3 -col-end-1" title="学历类型" placeholder="请输入您的学历类型" :model-value="item.studyType"
                            @update:model-value="changeValueHandle" />

                    </div>
                    <div class="flex flex-col gap-2 flex-1 ">
                        <span class="text-sm dark:text-zinc-300 text-zinc-500">在校经历</span>
                        <Textarea placeholder="请输入您的在校经历" :value="item.summary" />
                    </div>
                </div>
            </div>
        </template>
    </EditorSectionWrapper>
</template>

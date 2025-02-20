<script lang="ts" setup>
import EditorSectionWrapper from './components/wrapper.vue'
import InputItem from './components/input-item.vue'
import { DatePicker, Textarea } from '@lianqq/resume-ui'
import Item from './components/item.vue'
import {useResumeStore} from '@/stores'
import {storeToRefs} from 'pinia'
import RichTextEditor from '@/components/feature/rich-text/index.vue'
import {computed} from 'vue'
const resumeStore = useResumeStore()
const { resume } = storeToRefs(resumeStore)


const project = computed(() => resume.value.sections?.projects || {})
const title = computed(() => project.value.name || '')
const projects = computed(() => project.value.items || [])
const changeValueHandle = (path: string, value: any) => {
    resumeStore.setResumeValue(path, value)
}

const PathMap = {
    name: (index: number) => `sections.projects.items[${index}].name`,
    role: (index: number) => `sections.projects.items[${index}].role`,
    url: (index: number) => `sections.projects.items[${index}].url`,
    summary: (index: number) => `sections.projects.items[${index}].summary`,
}
</script>

<template>
    <EditorSectionWrapper :title="title" icon="lucide:folder-open-dot">
        <template #content>
            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-6" v-for="(item, index) in projects" :key="item.id">
                        <div class="grid grid-cols-3 grid-rows-2 gap-4">
                            <InputItem title="项目名称" placeholder="请输入您的项目名称" :model-value="item.name"
                                @update:model-value="(value) => changeValueHandle(PathMap.name(index), value)" />
                            <Item title="项目时间" placeholder="请输入您的项目时间" class="col-start-2 -col-end-1">
                                <DatePicker class="w-full" />
                            </Item>
                            <InputItem title="担任角色" placeholder="请输入您的担任角色" :model-value="item.role"
                                @update:model-value="(value) => changeValueHandle(PathMap.role(index), value)" />
                            <InputItem class="col-start-2 -col-end-1" title="项目链接" placeholder="请输入您的项目链接"
                                :model-value="item.url"
                                @update:model-value="(value) => changeValueHandle(PathMap.url(index), value)" />
                        </div>
                        <div class="flex flex-col gap-2 flex-1 ">
                            <span class="text-sm dark:text-zinc-300 text-zinc-500">项目详情</span>
                            
                            <RichTextEditor placeholder="请输入您的项目详情" :model-value="item.summary"
                                @update:model-value="(value) => changeValueHandle(PathMap.summary(index), value)" />
                        </div>
                </div>
            </div>
        </template>
    </EditorSectionWrapper>
</template>

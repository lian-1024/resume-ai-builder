<script lang="ts" setup>
import { defaultSection } from '@lianqq/resume-schema';
import EditorSectionWrapper from './components/wrapper.vue'
import InputItem from './components/input-item.vue'
import { DatePicker, Textarea } from '@lianqq/resume-ui'
import Item from './components/item.vue'

const { resume } = storeToRefs(useResumeStore())

const project = computed(() => resume.value.sections?.projects || {})
const title = computed(() => project.value.name || '')
const projects = computed(() => project.value.items || [])
const changeValueHandle = (value: string) => {
    console.log(value)
}
</script>

<template>
    <EditorSectionWrapper :title="title" icon="lucide:folder-open-dot">
        <template #content>
            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-6" v-for="item in projects" :key="item.id">
                    <div class="grid grid-cols-3 grid-rows-2 gap-4">
                        <InputItem title="项目名称" placeholder="请输入您的项目名称" :model-value="item.name"
                            @update:model-value="changeValueHandle" />
                            <Item title="项目时间" placeholder="请输入您的项目时间" class="col-start-2 -col-end-1">
                            <DatePicker class="w-full" />
                            </Item>
                        <InputItem title="担任角色" placeholder="请输入您的担任角色" :model-value="item.role"
                            @update:model-value="changeValueHandle" />
                            <InputItem class="col-start-2 -col-end-1" title="项目链接" placeholder="请输入您的项目链接" :model-value="item.url?.href"
                            @update:model-value="changeValueHandle" />
                    </div>
                    <div class="flex flex-col gap-2 flex-1 ">
                        <span class="text-sm dark:text-zinc-300 text-zinc-500">项目详情</span>
                        <Textarea placeholder="请输入您的项目详情" :value="item.summary" />
                    </div>
                </div>
            </div>
        </template>
    </EditorSectionWrapper>
</template>

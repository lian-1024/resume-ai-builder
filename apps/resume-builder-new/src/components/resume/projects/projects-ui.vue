<script lang="ts" setup>
import { useResumeStore } from '@/stores';
import { computed } from 'vue';
import { Editor } from '@/features/editor';
const resumeStore = useResumeStore()

const projects = computed(() => {
    console.log('basics', resumeStore.resume.basics)

    return resumeStore.resume.sections?.projects
})


</script>

<template>
    <div class="flex flex-col gap-4">
        <div v-for="project in projects?.items" :key="project.id" class="flex flex-col gap-2">
            <div class="flex items-center">
                <span class="font-semibold">
                    {{ project.name }}
                </span>
                <span class="text-sm text-gray-700 flex-1 ml-4 ">
                    {{ project.role }} 
                </span>

                <span class="text-sm text-gray-700">
                    {{ project.startDate }} - {{ project.endDate }}
                </span>

            </div>
            <div v-html="project.summary" class="text-sm text-gray-700"/>
        </div>
    </div>
</template>

<style lang="less" scoped></style>

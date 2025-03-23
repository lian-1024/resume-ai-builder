<script lang="ts" setup>
import { useResumeStore } from '@/stores';
import { computed } from 'vue';
import { Editor } from '@/features/editor';
const resumeStore = useResumeStore()

const educations = computed(() => {
    console.log('basics', resumeStore.resume.basics)

    return resumeStore.resume.sections?.education
})


const formatMajorAndDegree = (major: string | undefined, degree: string | undefined) => {

    if (major && degree) {
        return `${major} | ${degree}`
    }

    return major || degree
}

</script>

<template>
    <div class="flex flex-col gap-4">
        <div v-for="education in educations?.items" :key="education.id" class="flex flex-col gap-2">
            <div class="flex justify-between">
                <div class="flex flex-col">
                    <span class="font-semibold">
                        {{ education.school }}
                    </span>
                    <span class="text-sm text-gray-700 ">
                        {{ formatMajorAndDegree(education.major, education.degree) }}
                    </span>
                </div>

                <span class="text-sm text-gray-700">
                    {{ education.startDate }} - {{ education.endDate }}
                </span>
            </div>
            <div v-html="education.summary" class="text-sm text-gray-700"></div>
        </div>
    </div>
</template>

<style lang="less" scoped></style>

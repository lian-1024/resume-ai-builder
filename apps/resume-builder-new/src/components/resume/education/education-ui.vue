<script lang="ts" setup>
import { useResumeStore } from '@/stores';
import { computed } from 'vue';
import { Editor } from '@/features/editor';
const resumeStore = useResumeStore()

const educations = computed(() => {
    console.log('basics', resumeStore.resume.basics)

    return resumeStore.resume.sections?.education
})


</script>

<template>
    <div class="flex flex-col gap-4">
        <div v-for="education in educations?.items" :key="education.id" class="flex flex-col gap-2">
            <div class="flex justify-between">
                <div class="flex flex-col">
                    <span class="font-semibold">
                        {{ education.school }}
                    </span>
                    <span class="text-sm text-muted-foreground ">
                        {{ education.degree }}
                    </span>
                </div>

                <span class="text-sm text-muted-foreground">
                    {{ education.startDate }} - {{ education.endDate }}
                </span>
            </div>
            <Editor :model-value="education.summary" is-read-only />
        </div>
    </div>
</template>

<style lang="less" scoped></style>

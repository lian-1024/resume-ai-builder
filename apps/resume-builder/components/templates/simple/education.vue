<script setup lang="ts">
import { ref } from 'vue';
import Section from './section.vue';
import { Example } from '@lianqq/resume-schema';
import 'md-editor-v3/lib/style.css'
import { TypographySubTitle, TypographySubText } from '@/components/common/typography/index';
import { MDPreview } from '@/components/common/md-editor';
import { resumeKey, type ResumeProviderProps } from '@/components/preview/provider';
defineOptions({
    name: "SimpleEducation"
})

const {resumeData} = inject<ResumeProviderProps>(resumeKey) || {}

const education = computed(() => resumeData?.value?.sections?.education)

</script>

<template>
    <Section :title="education?.name || '教育经历'" class="flex flex-col gap-2">
        <div v-for="item in education?.items" :key="item.id" class="flex flex-col ">
            <div class="flex gap-2 items-center ">
                <TypographySubTitle :title="item.school"/>
                <TypographySubText :text="item.degree" />
                <TypographySubText :text="item.major" />
                <TypographySubText :text="`${item.startDate} - ${item.endDate}`" align="right" class="ml-auto"/>
            </div>
            <TypographySubText :text="item.studyType" />
            <MDPreview v-model:model-value="item.summary" class="my-2"/>
        </div>
    </Section>
</template>
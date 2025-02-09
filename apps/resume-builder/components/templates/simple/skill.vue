<script setup lang="ts">
import Section from './section.vue';
import 'md-editor-v3/lib/style.css'
import { MDPreview } from '@/components/common/md-editor';
import { TypographySubTitle } from '@/components/common/typography/index';
import { resumeKey, type ResumeProviderProps } from '@/components/preview/provider';
defineOptions({
    name: "SimpleSkills"
})

const {resumeData} = inject<ResumeProviderProps>(resumeKey) || {}
const skills = computed(() => resumeData?.value?.sections?.skills)

</script>

<template>
    <Section :title="skills?.name || '专业技能'" class="flex flex-col gap-2">
        <div class="flex flex-col gap-2" v-for="skill in skills?.items" :key="skill.id">
            <TypographySubTitle :title="skill.name" />
            <MDPreview v-model="skill.summary" class="p-0"/>
        </div>
    </Section>
</template>
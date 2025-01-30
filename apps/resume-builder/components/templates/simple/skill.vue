<script setup lang="ts">
import { ref } from 'vue';
import Section from './section.vue';
import { Example } from '@lianqq/resume-schema';
import 'md-editor-v3/lib/style.css'
import { MDPreview } from '@/components/common/md-editor';
import { TypographySubTitle } from '@/components/common/typography/index';
defineOptions({
    name: "SimpleSkills"
})

const resumeStore = useResumeStore()
const skills = computed(() => resumeStore.resume?.sections?.skills)

</script>

<template>
    <Section :title="skills?.name || '专业技能'" class="flex flex-col gap-2">
        <div class="flex flex-col gap-2" v-for="skill in skills?.items" :key="skill.id">
            <TypographySubTitle :title="skill.name" />
            <MDPreview v-model="skill.summary" class="p-0"/>
        </div>
    </Section>
</template>
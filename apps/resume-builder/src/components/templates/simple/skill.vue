<script setup lang="ts">
import Section from './section.vue';
import { TypographySubTitle } from '@/components/ui/typography/index';
import { resumeKey, type ResumeProviderProps } from '@/components/preview/provider';
import { inject,computed } from 'vue';

defineOptions({
    name: "SimpleSkills"
})

const {resumeData} = inject<ResumeProviderProps>(resumeKey) || {}
const skills = computed(() => resumeData?.value?.sections?.skills)

</script>

<template>
    <Section v-if="skills" :title="skills.name || '专业技能'" class="flex flex-col gap-2">
        <div class="flex flex-col gap-2" v-for="skill in skills?.items" :key="skill.id">
            <TypographySubTitle :title="skill.name" />
            <p class="p-0" v-html="skill.summary"/>
        </div>
    </Section>
</template>
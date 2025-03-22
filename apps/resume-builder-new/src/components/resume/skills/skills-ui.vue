<script lang="ts" setup>
import { computed } from 'vue';
import { useResumeStore } from '@/stores';
import { defaultSkill } from '@lianqq/resume-schema';
import { Editor } from '@/features/editor/index';
const resumeStore = useResumeStore()

const skills = computed(() => {
    return resumeStore.resume.sections?.skills
})

</script>

<template>
    <div>
        <div v-for="skill in skills?.items" :key="skill.id">
            <Editor :model-value="skill.summary" :is-read-only="true" />
        </div>
    </div>
</template>
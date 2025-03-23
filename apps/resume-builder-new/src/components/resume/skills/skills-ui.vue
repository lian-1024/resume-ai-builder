<script lang="ts" setup>
import { computed } from 'vue';
import { useResumeStore } from '@/stores';
import { defaultSkill } from '@lianqq/resume-schema';
import { Editor } from '@/features/editor/index';
import Preview from '@/features/editor/preview.vue';
const resumeStore = useResumeStore()

const skills = computed(() => {
    return resumeStore.resume.sections?.skills
})

</script>

<template>
    <div>
        <div v-for="skill in skills?.items" :key="skill.id">
            <Preview :value="skill.summary" />
        </div>
    </div>
</template>
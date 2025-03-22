<script lang="ts" setup>
import { Editor } from '@/features/editor'
import { onMounted, computed } from 'vue';
import { useResumeStore } from '@/stores';
import { defaultSkill } from '@lianqq/resume-schema';
const resumeStore = useResumeStore()

onMounted(() => {
    resumeStore.loadDraftData()
})

const skills = computed(() => {
    return resumeStore.draftData.sections?.skills
})

const updateSkillSummary = (index: number, summary: string) => {

    if (index == null) return

    console.log('summary', index, summary)
    resumeStore.setDraftData(`sections.skills.items[${index}].summary`, summary)
}
</script>

<template>
    <template v-for="(skill, index) in skills?.items" :key="skill.id">
        <div class="flex flex-col gap-2">
            <Editor :model-value="skill.summary" @update:model-value="(value) => updateSkillSummary(index, value)" />
        </div>
    </template>
</template>

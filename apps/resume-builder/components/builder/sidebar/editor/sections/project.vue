<script lang="ts" setup>
import { defaultSection } from '@lianqq/resume-schema';
import EditorSectionWrapper from './components/wrapper.vue'

const {resume} = storeToRefs(useResumeStore())

const project = computed(() => resume.value.sections?.projects || {})
const title = computed(() => project.value.name || '')
</script>

<template>
    <EditorSectionWrapper :title="title" icon="lucide:folder-open-dot">
<template #content>
<div>
    
</div>
</template>
    </EditorSectionWrapper>
</template>


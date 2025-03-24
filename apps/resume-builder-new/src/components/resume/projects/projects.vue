<script lang="ts" setup>
import ProjectsUI from './projects-ui.vue';
import ProjectsEditor from './projects-editor.vue';
import { ref } from 'vue';
import { useResumeStore } from '@/stores';
import { Actions } from '@/components/resume/actions/index'
const resumeStore = useResumeStore()
defineProps<{
    status: 'edit' | 'preview'
}>()


</script>

<template>
    <div class="flex flex-col gap-4">
        <ProjectsUI v-if="status === 'preview'" />
        <ProjectsEditor v-else />
    </div>
</template>

<style lang="less" scoped>

</style>

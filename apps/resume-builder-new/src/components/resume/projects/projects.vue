<script lang="ts" setup>
import ProjectsUI from './projects-ui.vue';
import ProjectsEditor from './projects-editor.vue';
import { ref } from 'vue';
import { useResumeStore } from '@/stores';
import { Actions } from '@/components/resume/actions/index'
const resumeStore = useResumeStore()
const status = ref<'edit' | 'preview'>('preview')

const handleEdit = () => {
    status.value = 'edit'
}

// 保存
const handleSave = () => {
    // 保存草稿 到 resume
    resumeStore.saveDraftData()
    status.value = 'preview'
}

const handleCancel = () => {
    // 取消编辑 恢复草稿到 resume
    resumeStore.loadDraftData()
    status.value = 'preview'
}

</script>

<template>
    <div class="flex flex-col gap-4">
        <ProjectsUI v-if="status === 'preview'" />
        <ProjectsEditor v-else />
        <Actions :status="status" @cancel="handleCancel" @edit="handleEdit" @save="handleSave" />
    </div>
</template>

<style lang="less" scoped>

</style>

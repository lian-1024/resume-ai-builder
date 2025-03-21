<script lang="ts" setup>
import BasicUI from './basic-ui.vue'
import BasicEditor from './basic-editor.vue'
import { ref } from 'vue'
import { Actions } from '@/components/resume/actions/index'
import { useResumeStore } from '@/stores'
const resumeStore = useResumeStore()
const status = ref<'edit' | 'preview'>('preview')

const handleEdit = () => {
    status.value = 'edit'
}

const handleSave = () => {
    resumeStore.saveDraftData()
    status.value = 'preview'
}

const handleCancel = () => {
    console.log('handleCancel')
    status.value = 'preview'
}

</script>

<template>
    <div>
        <BasicUI v-if="status === 'preview'" />
        <BasicEditor v-else />
        <Actions :status="status" @cancel="handleCancel" @edit="handleEdit" @save="handleSave" />
    </div>
</template>

<style lang="less" scoped></style>

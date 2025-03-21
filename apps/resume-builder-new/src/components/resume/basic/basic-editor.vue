<script lang="ts" setup>
import { Input } from '@lianqq/resume-ui'
import { onMounted, ref, computed } from 'vue';
import { useResumeStore } from '@/stores'
import { defaultBasics, type Basics } from '@lianqq/resume-schema';

const resumeStore = useResumeStore()

onMounted(() => {
    console.log('basic-editor')
    resumeStore.loadDraftData()
})

const basics = computed(() => {
    return resumeStore.draftData.basics || defaultBasics
})
</script>

<template>
    <div class="component-name">
        <Input placeholder="请输入姓名" :model-value="basics.name"
            @update:model-value="(value) => resumeStore.setDraftData('basics.name', value)" />
    </div>
</template>

<style lang="less" scoped></style>
<script lang="ts" setup>
import { Input } from '@lianqq/resume-ui'
import { onMounted, ref, computed } from 'vue';
import { useResumeStore } from '@/stores'
import LabelWithInput from '@/components/label-with-input.vue';
const resumeStore = useResumeStore()

onMounted(() => {
    resumeStore.loadDraftData()
})

const intention = computed(() => {
    return resumeStore.draftData.sections?.intention
})
</script>

<template>
    <div class="flex justify-between gap-4" v-if="intention">
        <LabelWithInput label="求职岗位" placeholder="请输入求职岗位" :model-value="intention.position"
            @update:model-value="(value) => resumeStore.setDraftData(`intention.position`, value)" />
        <LabelWithInput label="求职城市" placeholder="请输入求职城市" :model-value="intention.location"
            @update:model-value="(value) => resumeStore.setDraftData(`intention.location`, value)" />
        <LabelWithInput label="求职期望薪资" placeholder="请输入求职期望薪资" :model-value="intention.salary"
            @update:model-value="(value) => resumeStore.setDraftData(`intention.salary`, value)" />
        <LabelWithInput label="求职状态" placeholder="请输入求职状态" :model-value="intention.status"
            @update:model-value="(value) => resumeStore.setDraftData(`intention.status`, value)" />
    </div>
</template>

<style lang="less" scoped></style>
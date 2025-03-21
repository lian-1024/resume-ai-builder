<script lang="ts" setup>
import { Input } from '@lianqq/resume-ui'
import { onMounted, ref, computed } from 'vue';
import { useResumeStore } from '@/stores'
import { defaultBasics, type Basics } from '@lianqq/resume-schema';
import LabelWithInput from '@/components/label-with-input.vue';

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
    <div class="flex flex-col gap-4 items-center ">
        <div class="w-36 h-44 rounded-lg bg-gray-100">
            <img :src="basics.avatar" />
        </div>
        <div class="grid grid-cols-3 gap-4 flex-1 w-full">

            <LabelWithInput label="姓名" placeholder="请输入姓名" :model-value="basics.name"
                @update:model-value="(value) => resumeStore.setDraftData('basics.name', value)" />
            <LabelWithInput label="邮箱" placeholder="请输入邮箱" :model-value="basics.email"
                @update:model-value="(value) => resumeStore.setDraftData('basics.email', value)" />
            <LabelWithInput label="电话" placeholder="请输入电话" :model-value="basics.phone"
                @update:model-value="(value) => resumeStore.setDraftData('basics.phone', value)" />
            <LabelWithInput label="地址" placeholder="请输入地址" :model-value="basics.intention?.city"
                @update:model-value="(value) => resumeStore.setDraftData('basics.intention.city', value)" />
            <LabelWithInput label="薪资" placeholder="请输入薪资" :model-value="basics.intention?.salary"
                @update:model-value="(value) => resumeStore.setDraftData('basics.intention.salary', value)" />
            <LabelWithInput label="求职状态" placeholder="请输入求职状态" :model-value="basics.intention?.currentStatus"
                @update:model-value="(value) => resumeStore.setDraftData('basics.intention.currentStatus', value)" />
        </div>
    </div>
</template>

<style lang="less" scoped></style>
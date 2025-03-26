<script lang="ts" setup>
import { useResumeStore } from '@/stores';
import { computed } from 'vue';
import { Editor } from '@/features/editor';
const resumeStore = useResumeStore()

const intention = computed(() => {
    return resumeStore.resume.sections?.intention
})


</script>

<template>
    <div class="flex  gap-4 text-gray-700 text-sm">
        <template v-if="intention">
            <div>
                <span>求职岗位：</span>
                <span class="text-gray-900">{{ intention.position }}</span>
            </div>
            <div>
                <span>求职城市：</span>
                <span class="text-gray-900">{{ intention.location }}</span>
            </div>
            <div>
                <span>求职期望薪资：</span>
                <span class="text-gray-900">{{ intention.salary }}</span>
            </div>
            <div>
                <span>求职状态：</span>
                <span class="text-gray-900">{{ intention.status }}</span>
            </div>
        </template>
    </div>
</template>

<style lang="less" scoped></style>

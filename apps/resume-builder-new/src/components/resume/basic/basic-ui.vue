<script lang="ts" setup>
import { useResumeStore } from '@/stores';
import { Input } from '@lianqq/resume-ui'
import { computed } from 'vue';
import { defaultBasics } from '@lianqq/resume-schema'

const resumeStore = useResumeStore()

const basics = computed(() => {
    console.log('basics', resumeStore.resume.basics)

    return resumeStore.resume.basics || defaultBasics
})
</script>

<template>
    <div class="component-name">
        <small>{{ basics.name }}</small>
    </div>
</template>

<style lang="less" scoped></style>

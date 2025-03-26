<script lang="ts" setup>
import IntentionUI from './intention-ui.vue';
import IntentionEditor from './intention-editor.vue';
import { useResumeStore } from '@/stores';

defineProps<{
    status: 'edit' | 'preview'
}>()


</script>

<template>
    <div class="flex flex-col gap-4">
        <IntentionUI v-if="status === 'preview'" />
        <IntentionEditor v-else />
    </div>
</template>

<style lang="less" scoped>

</style>

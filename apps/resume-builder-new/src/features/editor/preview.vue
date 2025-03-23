<script lang="ts" setup>
import Editor from './editor.vue';

defineProps<{
    value?: string;
}>()
</script>

<template>
    <Editor :model-value="value"  is-read-only/>
</template>

<style lang="less" scoped></style>
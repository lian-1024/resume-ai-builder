<script lang="ts" setup>
import BasicUI from './basic-ui.vue'
import BasicEditor from './basic-editor.vue'
defineProps<{
    status: 'edit' | 'preview'
}>()



</script>

<template>
    <div class="flex flex-col gap-4">
        <BasicUI v-if="status === 'preview' " />
        <BasicEditor v-else />
    </div>
</template>

<style lang="less" scoped></style>

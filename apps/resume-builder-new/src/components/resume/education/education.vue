<script lang="ts" setup>
import EducationUI from './education-ui.vue';
import EducationEditor from './education-editor.vue';
defineProps<{
    status: 'edit' | 'preview'
}>()
</script>

<template>
    <div class="flex flex-col gap-4">
        <EducationUI v-if="status === 'preview'" />
        <EducationEditor v-else />
    </div>
</template>

<style lang="less" scoped>

</style>

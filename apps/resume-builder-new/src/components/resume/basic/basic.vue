<script lang="ts" setup>
import BasicEditor from './basic-editor.vue';
import BasicUI from './basic-ui.vue';

const props = defineProps<{
    status: 'edit' | 'preview'
}>()
defineOptions({
    name: 'ResumeBasic'
})
</script>

<template>
    <div>
        <BasicEditor v-if="props.status === 'edit'" />
        <BasicUI v-else />
    </div>
</template>

<style lang="less" scoped></style>

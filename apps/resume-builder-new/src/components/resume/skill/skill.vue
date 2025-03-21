<script lang="ts" setup>
import SkillEditor from './skill-editor.vue';
import SkillUI from './skill-ui.vue';

const props = defineProps<{
    status: 'edit' | 'preview'
}>()
</script>

<template>
    <div>
        <SkillEditor v-if="props.status === 'edit'" />
        <SkillUI v-else />
    </div>
</template>

<style lang="less" scoped></style>

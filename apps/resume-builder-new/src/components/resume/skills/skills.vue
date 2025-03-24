<script lang="ts" setup>
import SkillsUI from './skills-ui.vue'
import SkillsEditor from './skills-editor.vue'
defineProps<{
    status: 'edit' | 'preview'
}>()

</script>

<template>
    <div class="flex flex-col gap-4">
        <SkillsUI v-if="status === 'preview'" />
        <SkillsEditor v-else />
    </div>
</template>

<style lang="less" scoped></style>

<script setup lang="ts">
import BuilderSidebar from '@/features/builder/sidebar/index.vue'
import BuilderWorkspace from '@/features/builder/workspace/index.vue'
import BuilderPreview from '@/features/builder/preview/index.vue'
import BuilderActions from '@/features/builder/actions/index.vue'

defineOptions({
    name: 'BuilderView'
})
</script>

<template>
    <div class="flex justify-center items-start h-screen flex-row gap-8 pt-6">
        <BuilderSidebar class="bg-white" />
        <BuilderWorkspace class="bg-white  overflow-y-auto builder-workspace" />
        <!-- <BuilderPreview class="w-56 bg-gray-100" /> -->
        <BuilderActions class="bg-white" />
    </div>
</template>

<style lang="less" scoped>
.builder-workspace {
    height: calc(100vh - 2rem);
    max-height: calc(100vh - 2rem);
}
</style>

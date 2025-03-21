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
    <div class="flex justify-center items-center h-screen flex-row gap-8">
        <BuilderSidebar class="bg-white" />
        <BuilderWorkspace class="bg-white" />
        <!-- <BuilderPreview class="w-56 bg-gray-100" /> -->
        <BuilderActions class="bg-white" />
    </div>
</template>

<style lang="less" scoped></style>

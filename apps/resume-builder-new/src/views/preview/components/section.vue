<script lang="ts" setup>
defineProps<{
    title: string
}>()
</script>

<template>
    <div>
        <h4 class="scroll-m-20 text-lg font-semibold tracking-tight border-b border-gray-600">
            {{ title }}
        </h4>
        <div class="my-2">
            <slot />
        </div>
    </div>
</template>

<style lang="less" scoped></style>

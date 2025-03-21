<script lang="ts" setup>
import { Button } from '@lianqq/resume-ui'
defineProps<{
    title: string
}>()
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="text-lg font-semibold border-l-4 border-blue-500 pl-2">
            {{ title }}
        </div>
        <div>
            <slot />
        </div>
    </div>
</template>

<style lang="less" scoped></style>

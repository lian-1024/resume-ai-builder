<script lang="ts" setup>
import { Button } from '@lianqq/resume-ui'
import { Icon } from '@iconify/vue'
defineProps<{
    title: string
}>()
</script>

<template>
    <div class="flex flex-col gap-4">

        <Button variant="secondary" size="icon" class="pl-2 w-full group">
            <Icon icon="lucide:grip-vertical"
            class="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity " />
            <span>
                {{ title }}
            </span>
        </Button>
        <div>
            <slot />
        </div>
    </div>
</template>

<style lang="less" scoped></style>

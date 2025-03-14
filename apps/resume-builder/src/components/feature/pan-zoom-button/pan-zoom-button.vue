<script lang="ts" setup>
import Tooltip from '@/components/ui/tooltip.vue';
import { Icon } from '@iconify/vue'
import { Button } from '@lianqq/resume-ui'


const emit = defineEmits<{
    (e: 'reset'): void
    (e: 'zoomIn'): void
    (e: 'zoomOut'): void
}>()

defineProps<{
    vertical?: boolean
}>()


</script>

<template>
    <div class="flex items-center gap-2" :class="vertical ? 'flex-col' : 'flex-row'">
        <Tooltip>
            <template #trigger>
                <Button size="icon" class="rounded-full" @click="emit('reset')">
                    <Icon icon="lucide:rotate-ccw" />
                </Button>
            </template>
            <template #content>
                重置
            </template>
        </Tooltip>
        <Tooltip>
            <template #trigger>
                <Button size="icon" class="rounded-full" @click="emit('zoomIn')">
                    <Icon icon="lucide:zoom-in" />
                </Button>
            </template>
            <template #content>
                放大
            </template>
        </Tooltip>
        <Tooltip>
            <template #trigger>
                <Button size="icon" class="rounded-full" @click="emit('zoomOut')">
                    <Icon icon="lucide:zoom-out" />
                </Button>
            </template>
            <template #content>
                缩小
            </template>
        </Tooltip>
    </div>
</template>

<style lang="less" scoped></style>

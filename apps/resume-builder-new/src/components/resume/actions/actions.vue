<script lang="ts" setup>
import { defineProps } from 'vue';
import { Button } from '@lianqq/resume-ui';
import { Icon } from '@iconify/vue';
import { ACTION_MAP, type ActionType } from '@/constants/actions';

const props = defineProps<{
    id: string
}>()

defineEmits<{
    (e: 'handle', actionType: ActionType, id: string): void
}>()
</script>

<template>
    <div class="w-full ">
        <slot />
        <div class="flex justify-end">
            <Button variant="ghost" @click="$emit('handle', ACTION_MAP.EDIT, id)">
                <Icon icon="lucide:file-pen-line" />
                编辑
            </Button>
        </div>
    </div>
</template>

<style lang="less" scoped></style>

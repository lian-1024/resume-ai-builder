<script lang="ts" setup>
import { useConfig } from '@/composables/use-config';
import { computed } from 'vue';
import type { CSSProperties } from 'vue';

const { config } = useConfig()

defineOptions({
    name: "TypographyTitle"
})

defineProps<{
    title?: string
}>()


</script>

<template>
    <h1 class="text-2xl font-bold leading-10 ">
        <slot>
            {{ title }}
        </slot>
    </h1>
</template>

<style lang="less" scoped></style>

<script lang="ts" setup>
import { useConfig } from '@/composables/use-config';

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

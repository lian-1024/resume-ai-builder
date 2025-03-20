<script lang="ts" setup>
defineOptions({
    name: "TypographySubTitle"
})

defineProps<{
    title?: string
}>()
</script>

<template>
    <h4 class="scroll-m-20 text-lg font-semibold tracking-tight">
        <slot>
            {{ title }}
        </slot>
    </h4>
</template>

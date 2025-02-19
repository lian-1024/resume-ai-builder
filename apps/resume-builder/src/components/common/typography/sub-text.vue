<script lang="ts" setup>
defineOptions({
    name: 'TypographySubText'
})

withDefaults(
    defineProps<{
    text?: string,
    align?: "left" | "right" | "center"
}>(),
{
    align:'left'
}
)


</script>

<template>
    <p :class="`leading-7 text-muted-foreground text-sm text-${align}`">
        <slot>
            {{ text }}
        </slot>
    </p>
</template>

<style lang="less" scoped></style>

<script lang="ts" setup>
import { useConfig } from '@/composables/use-config';
import { computed, type CSSProperties } from 'vue';

const { config } = useConfig()

defineOptions({
    name: "TypographyTitle"
})

defineProps<{
    title?: string
}>()

const styles = computed<CSSProperties>(() => ({
    color:config.value.textColor,
    backgroundColor: config.value.secondaryColor
}))
</script>

<template>
    <h1 class="text-xl font-bold leading-10 px-2 py" :style="styles">
        <slot>
            {{ title }}
        </slot>
    </h1>
</template>

<style lang="less" scoped></style>

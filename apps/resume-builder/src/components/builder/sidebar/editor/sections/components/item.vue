<script lang="ts" setup>

defineProps<{
    title: string;
}>();
defineOptions({
    name: 'Item'
})


</script>

<template>
    <div class="flex flex-col gap-2">
        <span class="text-sm dark:text-zinc-300 text-zinc-500">{{ title }}</span>
<slot/>
    </div>
</template>

<style lang="less" scoped></style>

<script lang="ts" setup>
import { Input } from '@lianqq/resume-ui';

defineProps<{
    title: string;
    placeholder: string;
}>();
defineOptions({
    name: 'InputItem'
})

const value = defineModel<string>();

</script>

<template>
    <div class="flex flex-col gap-2">
        <span class="text-sm dark:text-zinc-300 text-zinc-500">{{ title }}</span>
        <Input :placeholder="placeholder" v-model="value" />
    </div>
</template>

<style lang="less" scoped></style>

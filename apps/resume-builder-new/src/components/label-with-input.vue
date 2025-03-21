<script lang="ts" setup>
import { Input, Label } from '@lianqq/resume-ui'
withDefaults(
    defineProps<{
    label: string,
    placeholder?: string
    type?: string
}>(),
    {
        placeholder: '请输入',
        type: 'text'
    }
)
defineOptions({
    name: 'LabelWithInput'
})

const value = defineModel<string>({ default: '' })
</script>

<template>
    <div class="grid w-full max-w-sm items-center gap-1">
        <Label for="email" class="text-sm text-zinc-900 text-muted-foreground">{{ label }}</Label>
        <Input id="email" :type="type" v-model="value" :placeholder="placeholder" />
    </div>
</template>

<style lang="less" scoped></style>

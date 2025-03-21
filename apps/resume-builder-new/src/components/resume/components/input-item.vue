<script lang="ts" setup>
import { Input, Label } from '@lianqq/resume-ui'

defineProps<{
    label: string,
    placeholder?: string
}>()

const value = defineModel<string>({ default: '' })

</script>

<template>
    <div class="space-y-2">
        <Label>{{ label }}</Label>
        <Input size="sm" v-model="value" :placeholder="placeholder || `请输入${label}`" />
    </div>
</template>

<style lang="less" scoped></style>

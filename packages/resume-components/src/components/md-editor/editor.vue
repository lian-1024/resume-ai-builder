<script setup lang="ts">
import { MdEditor } from 'md-editor-v3'


const value = defineModel<string>({
    required: true
})

defineOptions({
    name: "MDEditor"
})
</script>

<template>
    <MdEditor v-model="value" />
</template>
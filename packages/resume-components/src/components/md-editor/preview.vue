<script setup lang="ts">
import { MdPreview } from 'md-editor-v3'


const value = defineModel<string>( {
    default:''
})

defineOptions({
    name: "MDPreview"
})

</script>

<template>
    <MdPreview  :model-value="value"  class="list-disc list-inside"/>
</template>

<style >
.md-editor-preview-wrapper {
    padding: 0 !important;
}
</style>
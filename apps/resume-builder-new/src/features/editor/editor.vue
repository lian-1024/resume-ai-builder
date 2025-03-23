<script lang="ts" setup>
import { QuillEditor } from '@vueup/vue-quill'
import { Button } from '@lianqq/resume-ui'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
// import '@vueup/vue-quill/dist/vue-quill.bubble.css'
import { onMounted, ref, computed } from 'vue'
import { removeWhitespace } from '@lianqq/resume-utils'
const quillEditor = ref<InstanceType<typeof QuillEditor>>()

const modelValue = defineModel<string>({ default: '测试' })
console.log("modelValue", modelValue.value);

const value = computed(() => {
    return removeWhitespace(modelValue.value)
})

console.log("value", value.value);
</script>

<template>
    <div>
        <QuillEditor theme="snow" toolbar="minimal" ref="quillEditor" :content="value"
            @update:content="$emit('update:modelValue', $event)" content-type="html" />
    </div>
</template>
Í
<style lang="less" scoped></style>

<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ref, shallowRef, onMounted, onBeforeUnmount } from 'vue'
import type { IDomEditor, IToolbarConfig } from '@wangeditor/editor'

const props = defineProps<{
  placeholder:string
}>()

const value = defineModel<string>({
  default: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 编辑器模式
const mode = ref('default')


// 工具栏配置
const toolbarConfig = {
  excludeKeys: [
    'fullScreen',
    'group-video',
    'emotion',
    'group-image',
    'insertLink',
    "codeBlock",
    "insertTable",
    "blockquote"
  ]
}

// 编辑器配置
const editorConfig = { placeholder: props.placeholder }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: HTMLElement) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const handleChange = (editor: IDomEditor) => {
  // value.value = editor.getHtml()
  console.log(editor.getHtml()) 
  emit('update:modelValue', editor.getHtml())
}
</script>

<template>
  <div class="rich-text-editor border dark:border-zinc-800 border-zinc-200">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor class="max-h-96 min-h-52 dark:bg-zinc-950 bg-white" v-model="value" :defaultConfig="editorConfig" :mode="mode" @onCreated="handleCreated" @onChange="handleChange" />
  </div>
</template>

<style lang="less" scoped></style>

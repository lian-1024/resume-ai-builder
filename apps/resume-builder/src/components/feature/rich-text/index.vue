<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ref, shallowRef, onBeforeUnmount, h } from 'vue'
import type { IDomEditor } from '@wangeditor/editor'
import { useResumeAI, type OptionTypeKey, OptionTypeMap } from '@/composables/resume/use-resume-ai'
import { Icon } from '@iconify/vue'
import { type RichTextType } from '.'
import { deepClone } from '@/utils/deep-clone'
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, toast } from '@lianqq/resume-ui'
import { extractCodeBlock } from '@/utils/ai-model'
const props = defineProps<{
  placeholder: string
  type?: RichTextType
}>()

const value = defineModel<string>({
  default: ''
})



const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

const resumeAI = useResumeAI()

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

const loading = ref(false)

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})


/**
 * 处理编辑器创建
 * @param editor 
 */
const handleCreated = (editor: HTMLElement) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

/**
 * 处理编辑器内容变化
 * @param editor 
 */
const handleChange = (editor: IDomEditor) => {
  console.log(editor.getHtml())
  emit('update:modelValue', editor.getHtml())
}
/**
 * 处理AI操作
 * @param optionType 
 */
const handleAI = async (optionType: OptionTypeKey) => {
  if (!optionType) return toast({
    title: "未知操作",
    variant: "destructive"
  })

  let content;

  try {
    loading.value = true

    switch (optionType) {
      case OptionTypeMap.OPTIMIZE_CONTENT:
        content = await resumeAI.optimizeContent(value.value)
        break
      case OptionTypeMap.OPTIMIZE_PROJECT_EXPERIENCE:
        content = await resumeAI.optimizeProjectExperience(value.value)
        break
      case OptionTypeMap.OPTIMIZE_EDUCATION_EXPERIENCE:
        content = await resumeAI.optimizeEducationExperience(value.value)
        break
      case OptionTypeMap.OPTIMIZE_SKILL:
        content = await resumeAI.optimizeSkill(value.value)
        break
    }

  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
    console.log("content:", content);
    editorRef.value?.setHtml(content)
  }
}
</script>

<template>
  <div class="relative rich-text-editor border dark:border-zinc-800 border-zinc-200">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor class="max-h-96  bg-white" v-model="value" :defaultConfig="editorConfig"
      :mode="mode" @onCreated="handleCreated" @onChange="handleChange" />
    <div class="absolute bottom-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="default" class="rounded-full" size="icon">
            <template v-if="loading">
              <Icon icon="lucide:loader-circle" class="animate-spin" />
            </template>
            <template v-else>
              AI
            </template>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" align="end" class="px-2 rounded-3xl">
          <DropdownMenuItem as-child>
            <Button variant="secondary" class="rounded-full w-full" size="sm"
              @click="handleAI(props.type || OptionTypeMap.OPTIMIZE_CONTENT)">
              <Icon icon="lucide:pencil-line" />
              优化内容
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>

<style lang="less" scoped></style>

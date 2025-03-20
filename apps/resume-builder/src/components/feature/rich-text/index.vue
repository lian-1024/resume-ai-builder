<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ref, shallowRef, onBeforeUnmount, h, onMounted } from 'vue'
import type { IDomEditor } from '@wangeditor/editor'
import { Icon } from '@iconify/vue'
import { useResumeOptimizer } from '@/composables/use-resume-optimizer'
import { type RichTextType } from '.'
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, toast } from '@lianqq/resume-ui'
import { modelConfig } from '@/config/model.config'
import AlertDialog from '@/components/ui/alert-dialog/alert-dialog.vue'
import { extractCodeBlock } from '@lianqq/resume-ai'
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

const { optimizeEducation, optimizeProject, optimizeSkill, initOptimizer } = useResumeOptimizer(modelConfig)
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
  emit('update:modelValue', editor.getHtml())
}
/**
 * 处理AI操作
 * @param optionType 
 */
const handleOptimize = async () => {
  if (!props.type) return toast({
    title: "未知操作",
    variant: "destructive"
  })

  const contentLength = value.value.length

  loading.value = true

  let content;
  try {
    // 根据类型执行响应的操作
    switch (props.type) {
      case 'education':
        if (contentLength <= 20) return toast({
          title: "教育经历内容过短",
          description: "请你提供更详细的内容，至少描述一个在校经历（20字以上），以便AI更好地优化",
          variant: "destructive"
        })

        // 优化教育经历
        content = await optimizeEducation(value.value)
        break
      case 'skill':
        if (contentLength <= 20) return toast({
          title: "技能内容过短",
          description: "请你提供多几个技能（20字以上），以便AI更好地优化",
          variant: "destructive"
        })
        // 优化技能
        content = await optimizeSkill(value.value)
        break
      case 'project':
        if (contentLength <= 20) return toast({
          title: "项目经历内容过短",
          description: "请你提供更详细的内容，至少描述项目详情（20字以上），以便AI更好地优化",
          variant: "destructive"
        })
        // 优化项目经历
        content = await optimizeProject(value.value)
        break
    }

    // 如果优化失败，则提示
    if (!content) return toast({
      title: "优化失败",
      variant: "destructive"
    })

    // 设置编辑器内容
    editorRef.value.setHtml(extractCodeBlock(content)[0])
  } catch (error) {
    toast({
      title: "优化失败",
      description: "请检查网络连接或稍后再试",
      variant: "destructive"
    })
  } finally {
    loading.value = false
    // 在校期间担任前后端协会会长，并参加多项比赛，荣获多个奖项
    // 清空内容
    content = ''
  }
}

onMounted(() => {
  //初始化优化器
  initOptimizer(modelConfig)
})
</script>

<template>
  <div class="relative rich-text-editor border dark:border-zinc-800 border-zinc-200">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor class="max-h-96  bg-white" v-model="value" :defaultConfig="editorConfig" :mode="mode"
      @onCreated="handleCreated" @onChange="handleChange" />
    <div class="absolute bottom-2 right-2">
      <Button variant="default" class="rounded-full" size="icon" @click="handleOptimize">
        <template v-if="loading">
          <Icon icon="lucide:loader-circle" class="animate-spin" />
        </template>
        <template v-else>
          AI
        </template>
      </Button>
    </div>
  </div>
</template>

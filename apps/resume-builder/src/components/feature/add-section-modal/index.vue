<script lang="ts" setup>
import Modal from '@/components/ui/modal/index.vue'
import { Button, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, toast } from '@lianqq/resume-ui'
import { z } from 'zod'
import { useResumeStore } from '@/stores'
import { useTemplateRef, ref, computed } from 'vue'

interface Props {
  // 表单字段配置
  fields: {
    name: string // 字段名
    label: string // 标签名
    placeholder?: string // 占位符
    type?: string // 输入框类型
    rules?: any // 验证规则
  }[]
  // 模态框配置
  modal: {
    title: string
    description?: string
  }
  // 提交按钮文本
  submitText?: string
  // 表单提交处理函数
  onSubmit?: (values: any) => void
}

const props = withDefaults(defineProps<Props>(), {
  submitText: '提交',
  onSubmit: undefined
})

// 生成表单验证schema
const formSchema = computed(() => {

 return props.fields ? z.object(
    props.fields.reduce((acc, field) => ({
      ...acc,
      [field.name]: field.rules || z.string()
    }), {})
  ) : z.object({})
})

const form = useTemplateRef<HTMLFormElement>('sectionForm')
const openStatus = ref(false)

const handleForm = (values: any, resetForm: () => void) => {
  if (!form.value) return

  try {
    if (props.onSubmit) {
      props.onSubmit(values)
    }
    resetForm()
  } catch (error) {
    console.log(error)
    toast({
      title: '错误',
      description: '操作错误',
      variant: 'destructive'
    })
  } finally {
    openStatus.value = false
  }
}
</script>

<template>
  <Modal :title="modal.title" :description="modal.description" :form-schema="formSchema" v-model:open="openStatus">
    <template #content="{ handleSubmit, resetForm }">
      <form ref="sectionForm" id="sectionForm"
        @submit.prevent="handleSubmit($event, (values) => handleForm(values, resetForm))">
        <FormField v-for="field in fields" :key="field.name" :name="field.name" :label="field.label"
          v-slot="{ componentField }">
          <FormItem>
            <FormControl>
              <Input :type="field.type || 'text'" :placeholder="field.placeholder" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </form>
    </template>
    <template #footer>
      <Button type="submit" form="sectionForm">
        {{ submitText }}
      </Button>
    </template>
  </Modal>
</template>

<style lang="less" scoped></style>

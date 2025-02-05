<script lang="ts" setup>
import { defineProps } from 'vue'
import { Input } from '@lianqq/resume-ui'

// 定义一个 value 属性
const props = defineProps<{
  value: string
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <span class="text-sm dark:text-zinc-300 text-zinc-500">期望薪资</span>
    <Input placeholder="请输入您的期望薪资" :value="value" />
  </div>
</template> 
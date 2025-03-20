<script lang="ts" setup>
import { Button, type ButtonVariants } from '@lianqq/resume-ui'
import { useResumeOptimizer } from '@/composables/use-resume-optimizer'
import { onMounted, ref } from 'vue';
import { useResumeStore } from '@/stores'
import Tooltip from '@/components/ui/tooltip.vue';
import { extractCodeBlock } from '@lianqq/resume-ai'
import { Icon } from '@iconify/vue'
import type { ResumeData } from '@lianqq/resume-schema'
import { modelConfig } from '@/config/model.config';
defineOptions({
    name: "AIButton"
})

defineProps<{
    size?: ButtonVariants['size'],
    text?: string
}>()


const { initOptimizer, optimizeContent } = useResumeOptimizer(modelConfig)
const resumeStore = useResumeStore()
const loading = ref(false)

const handleOptimized = async () => {
    loading.value = true
    // 一键优化当前简历
    const content = await optimizeContent(JSON.stringify(resumeStore.resume.sections))
    // 提取代码块
    const optimizedContent = extractCodeBlock(content)
    // 解析代码块
    const optimizedData = JSON.parse(optimizedContent[0]) as ResumeData['sections']
    // 设置简历
    resumeStore.setResumeValue('sections', optimizedData)
    // 设置iframe的简历
    loading.value = false
}




onMounted(() => {
   // 初始化优化器
    initOptimizer()

})

</script>

<template>
    <Tooltip>
        <template #trigger>
            <Button @click="handleOptimized" :size="size" class="rounded-full">
                <Icon :icon="loading ? 'lucide:loader-circle' : 'lucide:brush'"
                    :class="`w-4 h-4 ${loading ? 'animate-spin' : ''}`" />
            </Button>
        </template>
        <template #content>
            一键优化简历
        </template>
    </Tooltip>
</template>

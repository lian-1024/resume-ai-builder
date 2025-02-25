<script lang="ts" setup>
import { Button, type ButtonVariants } from '@lianqq/resume-ui'
import { useResumeAI } from '@/composables/resume/use-resume-ai'
import { onMounted, ref } from 'vue';
import { useResumeStore } from '@/stores'
import Tooltip from '@/components/ui/tooltip.vue';
import { extractCodeBlock } from '@/utils/ai-model/utils'
import { Icon } from '@iconify/vue'
import { useIframeResume } from '@/composables/use-iframe'
import type { ResumeData } from '@lianqq/resume-schema'
defineOptions({
    name: "AIButton"
})

defineProps<{
    size?: ButtonVariants['size'],
    text?: string
}>()


const { initAIModel, optimizeContent} = useResumeAI()
const { setResume } = useIframeResume()
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
    initAIModel("zhipu")
})

</script>

<template>
    <Tooltip>
        <template #trigger>
            <Button @click="handleOptimized" :size="size" class="rounded-full" >
                <Icon :icon="loading ? 'lucide:loader-circle' : 'lucide:brush'" :class="`w-4 h-4 ${loading ? 'animate-spin' : ''}`" />
            </Button>
        </template>
        <template #content>
            一键优化简历
        </template>
    </Tooltip>
</template>

<style lang="less" scoped></style>

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
    size?: ButtonVariants['size']
}>()


const { initAIModel, optimizeContent} = useResumeAI()
const { setResume } = useIframeResume()
const resumeStore = useResumeStore()
const loading = ref(false)

const handleOptimized = async () => {
    loading.value = true
    const content = await optimizeContent(JSON.stringify(resumeStore.resume))
    const optimizedContent = extractCodeBlock(content)
    const optimizedData = JSON.parse(optimizedContent[0]) as ResumeData
    console.log("优化后的简历",optimizedData);
    resumeStore.setResume(optimizedData)
    setResume(optimizedData)
    
    loading.value = false
}
onMounted(() => {
    initAIModel("zhipu")
})

</script>

<template>
    <Tooltip>
        <template #trigger>
            <Button @click="handleOptimized" :size="size" >
                <Icon v-show="loading" icon="lucide:loader-circle" class="w-4 h-4 mr-2 animate-spin" />
                一键优化简历
            </Button>
        </template>
        <template #content>
            一键优化简历
        </template>
    </Tooltip>
</template>

<style lang="less" scoped></style>

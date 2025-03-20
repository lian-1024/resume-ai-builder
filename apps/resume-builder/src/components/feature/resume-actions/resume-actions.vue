<script lang="ts" setup>
import { useIframeResume } from '@lianqq/resume-utils'
import { Button, } from '@lianqq/resume-ui'
import Tooltip from '@/components/ui/tooltip.vue'
import { Icon } from '@iconify/vue'
import { AIButton } from '@/components/feature/optimizer-button'
import { OpenAIButton } from '@/components/feature/ai-assistant'
import { useRouter } from 'vue-router'
import { useColorMode, COLOR_MODE } from '@lianqq/resume-ui'

const mode = useColorMode()
const router = useRouter()

const handlePreview = () => {
    mode.value = COLOR_MODE.Light
    // 跳转预览页面
    router.push('/preview?fullscreen=true')
}

defineOptions({
    name: 'ResumeActions'
})

</script>

<template>
    <div class="flex gap-2 flex-col bg-zinc-200 py-2 px-1 rounded-full">
        <Tooltip>
            <template #trigger>
                <Button @click="handlePreview" size="icon" class="w-8 h-8 rounded-full">
                    <Icon icon="lucide:download" />
                </Button>
            </template>
            <template #content>
                下载简历
            </template>
        </Tooltip>
        <AIButton size="icon" />
        <OpenAIButton />
    </div>
</template>

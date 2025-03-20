<script setup lang="ts">
import Tooltip from '@/components/ui/tooltip.vue';
import { Icon } from '@iconify/vue'
import MarkdownIt from 'markdown-it'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Button,
    Input,
    toast,
} from '@lianqq/resume-ui'
import { useResumeAssistant } from '@/composables/use-resume-assistant';
import { MessageRole, type MessageRoleType } from './constansts';
import { computed, onMounted, ref } from 'vue';
import { modelConfig } from '@/config/model.config';
import { copyTextToClipboard } from '@lianqq/resume-utils';
import { AlertDialogUI } from '@/components/ui/alert-dialog'

const { chatStream, initResumeAssistant, resumeAssistant } = useResumeAssistant(modelConfig)

const md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
})

/**
 * 输入值
 */
const inputValue = ref<string>('')
/**
 * 加载状态 
 */
const loading = ref<boolean>(false)

/**
 * 消息类型
 */
interface MessageItemType {
    role: MessageRoleType,
    message: string
}

/**
 * 默认消息列表
 */
const defaultMessageList = [
    {
        role: MessageRole.ASSISTANT,
        message: "你好！我是你的简历助手，请问有什么可以帮你的吗？"
    }
]

/**
 * 消息列表
 */
const messageList = ref<MessageItemType[]>(defaultMessageList)



/**
 * 根据角色计算气泡框样式
 */
const bubbleBoxStyles = computed(() => (role: MessageRoleType) => {
    return role === MessageRole.HUMAN ? 'self-end bg-blue-600' : "self-start bg-muted"
})

/**
 * 包装样式
 * @param message 
 * @param role 
 */
const buildMessage = (message: string, role: MessageRoleType) => ({
    message,
    role
})

/**
 * 发送消息
 * @param message 
 */
const sendMessage = async () => {
    if (loading.value) return toast({
        title: "请稍后再试"
    })
    if (!inputValue.value) return toast({
        title: "请输入内容"
    })
    loading.value = true
    // 将用户输入的消息添加到消息列表
    messageList.value.push(buildMessage(inputValue.value, MessageRole.HUMAN))
    try {
        // 获取 AI 的流式响应
        const response = await chatStream(inputValue.value) || ''
        // 清除输入值
        inputValue.value = ''
        // stream 消息
        let streamMessage = ''
        // 先添加一个空消息占位
        messageList.value.push(buildMessage('', MessageRole.ASSISTANT))
        // 逐步接收并显示 AI 的响应内容
        for await (const chunk of response) {
            streamMessage += chunk
            messageList.value[messageList.value.length - 1].message = streamMessage
        }

    } catch (error) {
        toast({
            title: "发送失败"
        })
    } finally {
        loading.value = false
    }

}

/**
 * 负责消息
 * @param message 
 */
const copyMessage = async (message: string) => {
    try {
        // 复制
        await copyTextToClipboard(message)
        toast({
            title: "复制成功",
            description: "复制成功，快粘贴到简历上吧！"
        })
    } catch (error) {
        toast({
            title: "复制失败",
            description: "复制失败，发生错误",
            variant: "destructive"
        })
    }
}

/**
 * 开启一个新的聊天
 */
const startNewConversation = () => {
    if (!resumeAssistant.value) return toast({
        title: "错误",
        message: "没有成功初始化",
        variant: "destructive"
    })

    // 清空消息历史
    resumeAssistant.value.clearHistory()
    // 恢复消息列表
    messageList.value = defaultMessageList

    return toast({
        title: "提示",
        description: "对话已清空，请重新开始"
    })
}



/**渲染消息 */
const renderMessage = (message: string) => {
    return md.render(message)
}

onMounted(() => {
    // 初始化简历助手
    initResumeAssistant()
})
</script>

<template>
    <Sheet>
        <SheetTrigger as-child>
            <Button size="icon" class="rounded-full">
                <Tooltip>
                    <template #trigger>
                        <Icon icon="lucide:bot-message-square" />
                    </template>
                    <template #content>
                        AI 简历助手
                    </template>
                </Tooltip>
            </Button>
        </SheetTrigger>
        <SheetContent class="flex flex-col h-full w-[600px] ">
            <SheetHeader>
                <SheetTitle>AI 助手</SheetTitle>
                <SheetDescription class="flex gap items-center justify-between">
                    <span>
                        写简历随时随地，轻松获取AI帮助
                    </span>
                    <Tooltip>
                        <template #trigger>
                            <AlertDialogUI title="温馨提示" description="您确认要新建对话吗？对话历史将清空" cancel-text="取消"
                                confirm-text="确定新建对话">
                                <template #trigger>
                                    <Button @click="startNewConversation" size="icon" variant="secondary"
                                        class="rounded-full">
                                        <Icon icon="lucide:message-square-diff" />
                                    </Button>
                                </template>
                            </AlertDialogUI>
                        </template>
                        <template #content>
                            新建对话
                        </template>
                    </Tooltip>
                </SheetDescription>
            </SheetHeader>

            <!-- 聊天内容区域 -->
            <div v-auto-scroll:bottom class="flex-1 my-4 overflow-y-auto">
                <div class="flex flex-col gap-4 self w-full">
                    <div v-for="item in messageList" :key="item.message"
                        :class="`p-2 rounded-lg ${bubbleBoxStyles(item.role)}`">
                        <div v-html="renderMessage(item.message)" />
                        <div class="flex gap-1 justify-end">
                            <Button v-if="item.role === MessageRole.ASSISTANT" @click="copyMessage(item.message)"
                                variant="secondary" class="rounded-full h-10 w-10" size="icon">
                                <Icon icon="lucide:copy" class="h-4 w-4" />
                            </Button>
                        </div>

                    </div>
                </div>
            </div>

            <!-- 输入区域 -->
            <div class="mt-auto border-t pt-4">
                <div class="flex items-center gap-2">
                    <Input placeholder="请输入您需要询问的问题" @keyup.enter="sendMessage" class="flex-1"
                        v-model:model-value="inputValue" />
                    <Tooltip>
                        <template #trigger>
                            <Button size="icon" @click="sendMessage" :disabled="loading">
                                <Icon icon="lucide:send" v-if="!loading" />
                                <Icon v-else icon="lucide:loader-2" class="animate-spin" />
                            </Button>
                        </template>
                        <template>
                            发送
                        </template>
                    </Tooltip>
                </div>
            </div>
        </SheetContent>
    </Sheet>
</template>

<style scoped>
:deep(.scrollarea-viewport) {
    height: 100%;
}
</style>
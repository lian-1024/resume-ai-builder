<script setup lang="ts">
import Tooltip from '@/components/ui/tooltip.vue';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Button,
    ScrollArea,
    Textarea,
    Input
} from '@lianqq/resume-ui'
import { Icon } from '@iconify/vue'
import { useResumeAssistant } from '@/composables/use-resume-assistant';
import { MessageRole, type MessageRoleType } from './constansts';
import { computed, ref, shallowRef } from 'vue';

const { } = useResumeAssistant()

const inputValue = ref<string>('')

const messageList = ref([
    {
        role: MessageRole.ASSISTANT,
        message: "Hello，your sure help？"
    },
    {
        role: MessageRole.HUMAN,
        message: "你好"
    }
])

/**
 * 气泡框样式
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
const sendMessage = () => {
    
    messageList.value.push(buildMessage(inputValue.value, MessageRole.HUMAN))
    // 清除输入值
    inputValue.value = ''
}


</script>

<template>
    <Sheet>
        <SheetTrigger as-child>
            <Button size="icon" class="rounded-full">
                <Tooltip>
                    <template #trigger>
                        <Icon icon="lucide:message-circle-question" />
                    </template>
                    <template #content>
                        AI 助手
                    </template>
                </Tooltip>
            </Button>
        </SheetTrigger>
        <SheetContent class="w-[500px] sm:w-[600px] flex flex-col h-full">
            <SheetHeader>
                <SheetTitle>AI 助手</SheetTitle>
                <SheetDescription>
                    随时随地，轻松获取AI帮助
                </SheetDescription>
            </SheetHeader>

            <!-- 聊天内容区域 -->
            <ScrollArea class="flex-1 my-4">
                <div class="flex flex-col gap-4 self">
                    <div v-for="item in messageList" :key="item.message"
                        :class="`p-2 rounded-lg ${bubbleBoxStyles(item.role)}`">
                        {{ item.message }}
                    </div>
                </div>
            </ScrollArea>

            <!-- 输入区域 -->
            <div class="mt-auto border-t pt-4">
                <div class="flex items-center gap-2">
                    <Input placeholder="请输入您需要询问的问题" class="flex-1" v-model:model-value="inputValue" />
                    <Button class="rounded-full" size="icon" @click="sendMessage">
                        <Icon icon="lucide:send" />
                    </Button>
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
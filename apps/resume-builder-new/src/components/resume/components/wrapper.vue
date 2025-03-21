<script lang="ts" setup>
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, Button, AlertDialogAction } from '@lianqq/resume-ui'
import { Icon } from '@iconify/vue'

withDefaults(defineProps<{
    title: string,
    id: string,
    status: 'preview' | 'edit'
}>(), {
    title: '',
    id: '',
    status: 'preview'
})

defineOptions({
    name: 'ResumeWrapper'
})

defineEmits<{
    (e: 'handle', action: 'delete' | 'edit' | 'save', id: string): void
}>()
</script>

<template>
    <div class="border-b  border-gray-100">
        <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
            {{ title }}
        </h4>
        <div class="py-4">
            <slot />
            <div class="flex justify-end">

                <AlertDialog>
                    <AlertDialogTrigger>
                        <Button variant="ghost">
                            <Icon icon="lucide:trash-2" class="text-red-500" />
                            <small class="text-sm text-red-500 leading-none">
                                删除
                            </small>
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                温馨提示
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                确定删除当前内容吗？删除后无法恢复哦！
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>
                                取消
                            </AlertDialogCancel>
                            <AlertDialogAction @click="$emit('handle', 'delete', id)">
                                确定
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <Button variant="ghost" @click="$emit('handle', 'edit', id)" v-show="status === 'preview'">
                    <Icon icon="lucide:file-pen-line" class="text-muted-foreground" />
                    <small class="text-sm text-muted-foreground leading-none">
                        编辑
                    </small>
                </Button>
                <Button variant="ghost" @click="$emit('handle', 'save', id)" v-show="status === 'edit'">
                    <Icon icon="lucide:file-pen-line" class="text-muted-foreground" />
                    <small class="text-sm text-muted-foreground leading-none">
                        保存
                    </small>
                </Button>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped></style>

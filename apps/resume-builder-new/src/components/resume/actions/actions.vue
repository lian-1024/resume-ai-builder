<script lang="ts" setup>
import { Button } from '@lianqq/resume-ui'
import { Icon } from '@iconify/vue'

defineOptions({
    name: 'ResumeActions'
})

defineProps<{
    status: 'edit' | 'preview' | 'cancel'
    visible?: boolean
}>()



 defineEmits<{
    (e: 'edit'): void,
    (e: 'save'): void,
    (e: 'cancel'): void,
    (e: 'changeVisible'): void
}>()
</script>

<template>
    <div class="flex gap-4 justify-end">
        <Button class="text-muted-foreground" size="sm" variant="ghost" v-show="status === 'preview'"
            @click="$emit('edit')">
            <Icon icon="lucide:edit" />
            编辑
        </Button>
        <Button size="sm" variant="destructive" v-show="status === 'edit'" @click="$emit('cancel')">
            <Icon icon="lucide:trash" />
            删除
        </Button>
        <Button class="text-muted-foreground" size="sm" variant="secondary" v-show="status === 'edit'"
            @click="$emit('cancel')">
            <Icon icon="lucide:x" />
            取消
        </Button>
        <Button variant="default" size="sm" @click="$emit('save')" v-show="status === 'edit'">
            <Icon icon="lucide:save" />
            保存
        </Button>
        <Button variant="ghost" size="sm" v-show="status === 'edit'" @click="() => {
            console.log('changeVisible button clicked');
            $emit('changeVisible');
        }">
            <template v-if="!visible">
                <Icon icon="lucide:eye" />
                显示
            </template>
            <template v-else>
                <Icon icon="lucide:eye-off" />
                隐藏
            </template>
        </Button>
    </div>
</template>

<style lang="less" scoped></style>

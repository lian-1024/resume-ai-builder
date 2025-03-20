<script setup lang="ts">
import { Button } from '@lianqq/resume-ui'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Textarea
} from '@lianqq/resume-ui'


withDefaults(
    defineProps<{
        title?: string
        description?: string,
        buttonText?: string,
        confirmText?: string,
    }>(),
    {
        title: '提示',
        description: '',
        buttonText: '确定',
        confirmText: '确定'
    }
)
defineOptions({
    name: 'Dialog'
})



</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <slot name="trigger">
                <Button variant="outline">
                    {{ buttonText }}
                </Button>
            </slot>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px] dark:bg-zinc-950">
            <DialogHeader>
                <DialogTitle>{{ title }}</DialogTitle>
                <DialogDescription>
                    {{ description }}
                </DialogDescription>
            </DialogHeader>
            <slot name="content" />
            <DialogFooter>
                <slot name="footer">
                    <Button>
                        {{ confirmText }}
                    </Button>
                </slot>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
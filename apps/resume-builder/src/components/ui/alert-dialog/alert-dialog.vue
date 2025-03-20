<script setup lang="ts">
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    Button
} from '@lianqq/resume-ui'


const open  = defineModel<boolean>('open',{
    default:false
})

defineProps<{
    buttonText?: string,
    title?: string
    description?: string,
    cancelText?: string
    confirmText?: string
}>()

const emits = defineEmits<{
    (e: 'confirm'): void
    (e: 'cancel'): void
}>()
</script>

<template>
    <AlertDialog v-model:open="open">
        <AlertDialogTrigger as-child>
            <slot name="trigger">
                <Button variant="outline">
                    Show Dialog
                </Button>
            </slot>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>{{ title }}</AlertDialogTitle>
                <AlertDialogDescription>
                    {{ description }}
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel @click="emits('cancel')">{{ cancelText }}</AlertDialogCancel>
                <AlertDialogAction @click="emits('confirm')">{{ confirmText }}</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>
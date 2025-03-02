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

defineProps<{
    buttonText?: string
    title: string
    description?: string
    cancelText?: string
    confirmText?: string
}>()

defineEmits<{
    (e: 'confirm'): void
}>()

</script>

<template>
    <AlertDialog>
        <AlertDialogTrigger as-child>
            <slot name="trigger">
                <Button variant="outline">
                    {{ buttonText }}
                </Button>
            </slot>
        </AlertDialogTrigger>
        <AlertDialogContent class="dark:bg-black">
            <AlertDialogHeader>
                <AlertDialogTitle>
                    {{ title }}
                </AlertDialogTitle>
                <AlertDialogDescription>
                    {{ description }}
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>
                    {{ cancelText }}
                </AlertDialogCancel>
                <AlertDialogAction @click="$emit('confirm')">
                    {{ confirmText }}
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>
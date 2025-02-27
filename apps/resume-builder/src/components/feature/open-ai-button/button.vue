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
    Input,
    Label
} from '@lianqq/resume-ui'
import { Icon } from '@iconify/vue'


</script>

<template>
    <Sheet >
        <SheetTrigger as-child>
            <Button size="icon" class="rounded-full">
                <Tooltip >
                    <template #trigger>
                        <Icon icon="lucide:message-circle-question" />
                    </template>
                    <template #content>
                        AI 助手
                    </template>
                </Tooltip>
            </Button>
        </SheetTrigger>
        <SheetContent class="w-[500px] sm:w-[600px]">
            <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                    Make changes to your profile here. Click save when you're done.
                </SheetDescription>
            </SheetHeader>
            <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="name" class="text-right">
                        Name
                    </Label>
                    <Input id="name" value="Pedro Duarte" class="col-span-3" />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="username" class="text-right">
                        Username
                    </Label>
                    <Input id="username" value="@peduarte" class="col-span-3" />
                </div>
            </div>
            <SheetFooter>
                <SheetClose as-child>
                    <Button type="submit">
                        Save changes
                    </Button>
                </SheetClose>
            </SheetFooter>
        </SheetContent>
    </Sheet>
</template>
<script lang="ts" setup>
import { TooltipContent, Tooltip, TooltipProvider, TooltipTrigger,Button } from '@lianqq/resume-ui'

</script>

<template>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
                <slot name="trigger">
                    <Button>
                        Click me
                    </Button>
                </slot>
            </TooltipTrigger>
            <TooltipContent>
                <slot name="content">
                    Click me
                </slot>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<style lang="less" scoped></style>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Button } from '@/components/button'
import { cn } from '@/lib/utils'
import { useSidebar } from './utils'
import {Icon} from '@iconify/vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-7 w-7', props.class)"
    @click="toggleSidebar"
  >
    <Icon icon="lucide:panel-right"/>
    <span class="sr-only">切换侧边栏状态</span>
  </Button>
</template>

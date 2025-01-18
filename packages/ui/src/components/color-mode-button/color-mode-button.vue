<script setup lang="ts">
import { Button } from '@/components/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/dropdown-menu'
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'
import { COLOR_MODE } from './index'
// Pass { disableTransition: false } to enable transitions
const mode = useColorMode()

defineOptions({
  name: "ColorModeButton"
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" class="rounded-full h-8 w-8">
        <Icon icon="lucide:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon icon="lucide:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="mode = COLOR_MODE.Light">
        <Icon icon="lucide:sun" class="w-4 h-4" />
        Light
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = COLOR_MODE.Dark">
        <Icon icon="lucide:moon" class="w-4 h-4" />
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = COLOR_MODE.System">
        <Icon icon="lucide:laptop-minimal" class="w-4 h-4" />
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
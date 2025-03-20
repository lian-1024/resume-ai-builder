<script lang="ts" setup>
import {Icon} from '@iconify/vue'
 defineProps<{
    title: string,
    icon: string,
}>()

defineOptions({
    name:"EditorSectionHeader"
})

</script>

<template>
  <div class="flex items-center gap-4">
    <div>
        <Icon :icon="icon" mode="svg" size="32" />
    </div>
    <div>
      <h1 class="text-2xl font-bold leading-10 ">
        {{ title }}
      </h1>
    </div>
  </div>
</template>



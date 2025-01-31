<script lang="ts" setup>
import EditorSectionHeader from './header.vue'
const props = defineProps<{
    title: string,
    icon: string,
}>()

defineOptions({
    name: "EditorSectionWrapper"
})

</script>

<template>
    <div class="flex flex-col gap-2">
        <!-- <EditorSectionHeader :title="title" :icon="icon" /> -->
        <h1 class="text-2xl font-bold leading-10 ">
        {{ title }}
      </h1>
        <div class="mt-4">
            <slot name="content" />
        </div>
    </div>
</template>



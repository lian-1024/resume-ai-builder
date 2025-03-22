<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '@lianqq/resume-ui'
import { ref } from 'vue'
import { useDraggable } from 'vue-draggable-plus'
defineOptions({
  name: 'BuilderSidebar'
})


const sections = ref([
  {
    title: "基本信息",
    name: "basic",
    icon: "lucide:user",
    href: "#basic"
  },
  {
    title: "教育经历",
    name: "education",
    icon: "lucide:graduation-cap",
    href: "#education"
  },
])

const sectionRef = ref<HTMLElement | null>(null)

const draggable = useDraggable(sectionRef, sections, {
  animation: 150,
  onStart: (event) => {
    console.log('start', event)
  },
  onEnd: (event) => {
    console.log('end', event)
  }
})
</script>

<template>
  <aside class="w-44 p-4 rounded-lg">
    <div class="flex flex-col gap-4" ref="sectionRef">
      <template v-for="section in sections" :key="section.title">
        <Button   variant="ghost" class="relative group">
          <Icon icon="lucide:grip-vertical"
            class="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity absolute left-2" />
          <Icon :icon="section.icon" class="mr-2" />
          <span>
            {{ section.title }}
          </span>
        </Button>
      </template>
    </div>
  </aside>
</template>

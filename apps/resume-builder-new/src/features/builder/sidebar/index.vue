<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '@lianqq/resume-ui'
import { ref, computed } from 'vue'
import { useDraggable } from 'vue-draggable-plus'
import { useResumeStore } from '@/stores'
defineOptions({
  name: 'BuilderSidebar'
})

const resumeStore = useResumeStore()
const sections = ref<Record<string, any>>({
  basics: {
    title: "基本信息",
    name: "basic",
    icon: "lucide:user",
    href: "#basic"
  },
  intention: {
    title: "求职意向",
    name: "intention",
    icon: "lucide:briefcase",
    href: "#intention"
  },
  skills: {
    title: "技能",
    name: "skills",
    icon: "lucide:hammer",
    href: "#skills"
  },
  education: {
    title: "教育经历",
    name: "education",
    icon: "lucide:graduation-cap",
    href: "#education"
  },
  projects: {
    title: "项目经历",
    name: "projects",
    icon: "lucide:folder",
    href: "#projects"
  },
})

const sectionRef = ref<HTMLElement | null>(null)

// 获取sectionsOrder
const sectionsOrder = computed(() => {
  return resumeStore.resume.metadata?.sectionsOrder || []
})

// 交换两个数组元素位子
const swapElements = (index1: number | undefined, index2: number | undefined) => {
  if (index1 === undefined || index2 === undefined) return
  const temp = sectionsOrder.value[index1]
  sectionsOrder.value[index1] = sectionsOrder.value[index2]
  sectionsOrder.value[index2] = temp
}

useDraggable(sectionRef, sectionsOrder, {
  animation: 150,
  onEnd: (event) => {
    swapElements(event.oldIndex, event.newIndex)
    resumeStore.resume.metadata!.sectionsOrder = sectionsOrder.value
  }
})
</script>

<template>
  <aside class="w-44 p-4 rounded-lg">
    <div class="flex flex-col gap-4" ref="sectionRef">
      <!-- 根据sectionsOrder的顺序渲染 -->
      <template v-for="section in sectionsOrder" :key="section">
        <Button variant="ghost" class="relative group">
          <Icon icon="lucide:grip-vertical"
            class="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity absolute left-2" />
          <Icon :icon="sections[section].icon" class="mr-2" />
          <span>
            {{ sections[section].title }}
          </span>
        </Button>
      </template>
    </div>
  </aside>
</template>

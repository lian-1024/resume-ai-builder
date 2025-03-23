<script setup lang="ts">
import { provide, reactive, ref, type Component } from 'vue';
import { useResumeStore } from '@/stores'
import { Basics } from '@/components/resume/basic';
import { SectionWrapper } from '@/components/resume/wrapper';
import { Skills } from '@/components/resume/skills';
import { Projects } from '@/components/resume/projects';
import { Education } from '@/components/resume/education';
import { useDraggable } from 'vue-draggable-plus';
import { computed } from 'vue';

defineOptions({
  name: 'BuilderWorkspace'
})


const sections = ref<Record<string, any>>({
  basics: {
    title: '基本信息',
    component: Basics
  },
  skills: {
    title: '技能',
    component: Skills
  },
  projects: {
    title: '项目经历',
    component: Projects
  },
  education: {
    title: '教育经历',
    component: Education
  }
})

const resumeStore = useResumeStore()
const sectionRef = ref<HTMLElement | null>(null)

// 获取sectionsOrder
const sectionsOrder = computed(() => {
  return resumeStore.resume.metadata?.sectionsOrder || []
})

// 交换两个数组元素位子
const swapElements = (index1: number | undefined, index2: number | undefined) => {
  if (index1 === undefined || index2 === undefined) return
  // 交换sectionsOrder的元素位子
  const temp = sectionsOrder.value[index1]
  // 交换sections的元素位子
  sectionsOrder.value[index1] = sectionsOrder.value[index2]
  sectionsOrder.value[index2] = temp
}

useDraggable(sectionRef, sectionsOrder, {
  animation: 150,
  onStart: (event) => {
    console.log('start', event)
  },
  onEnd: (event) => {
    swapElements(event.oldIndex, event.newIndex)
    resumeStore.resume.metadata!.sectionsOrder = sectionsOrder.value
  }
})
</script>

<template>
  <main class="w-[768px] p-6 rounded-lg">
    <div class="flex flex-col gap-4" ref="sectionRef">
      <SectionWrapper v-for="section in sectionsOrder" :key="section" :title="sections[section].title">
        <component :is="sections[section].component" />
      </SectionWrapper>
    </div>
  </main>
</template>
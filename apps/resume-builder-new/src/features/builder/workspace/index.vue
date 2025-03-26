<script setup lang="ts">
import { onMounted, provide, reactive, ref, type Component } from 'vue';
import { useResumeStore } from '@/stores'
import { Basics } from '@/components/resume/basic';
import { SectionWrapper } from '@/components/resume/wrapper';
import { Skills } from '@/components/resume/skills';
import { Projects } from '@/components/resume/projects';
import { Education } from '@/components/resume/education';
import { useDraggable } from 'vue-draggable-plus';
import { computed } from 'vue';
import { Actions } from '@/components/resume/actions';
import { useSections, type SectionValue } from '@/composables/use-sections';
import type { SectionKey, Section } from '@lianqq/resume-schema';
defineOptions({
  name: 'BuilderWorkspace'
})


// const sections = ref<Record<string, any>>({
//   basics: {
//     title: '基本信息',
//     component: Basics,
//     status: 'preview',
//     visible: true
//   },
//   skills: {
//     title: '技能',
//     component: Skills,
//     status: 'preview',
//     visible: true
//   },
//   projects: {
//     title: '项目经历',
//     component: Projects,
//     status: 'preview',
//     visible: true
//   },
//   education: {
//     title: '教育经历',
//     component: Education,
//     status: 'preview',
//     visible: true
//   }
// })

const { sections, initSections } = useSections()




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

/**
 * 编辑 section
 * @param section - 要编辑的 section 的 key
 */
const handleEdit = (section: SectionKey) => {
  // 检查是否有其他 section 正在编辑状态
  type SectionEntry = [string, SectionValue];

  // 检查是否有其他 section 正在编辑状态
  const editingSection = Object.entries(sections.value).find(([key, value]) =>
    value.status === 'edit' && key !== section
  ) as SectionEntry | undefined


  if (editingSection) {
    // 如果有正在编辑的 section，显示确认对话框
    const isConfirmed = window.confirm(`${editingSection[1].title}正在编辑中，尚未保存。确认要编辑${sections.value[section].title}吗？`)

    if (!isConfirmed) {
      return // 用户取消，不进行编辑
    }

    // 如果用户确认，将之前编辑的 section 重置为预览状态
    sections.value[editingSection[0] as SectionKey].status = 'preview'
    // 恢复之前编辑 section 的数据
    resumeStore.loadDraftData()
  }

  sections.value[section].status = 'edit'
}

/**
 * 保存 section 的数据
 * @param section - 要保存的 section 的 key
 */
const handleSave = (section: SectionKey) => {
  // 保存草稿 到 resume
  resumeStore.saveDraftData()
  sections.value[section].status = 'preview'
}

/**
 * 取消编辑
 * @param section - 要取消编辑的 section 的 key
 */
const handleCancel = (section: SectionKey) => {
  // 取消编辑 恢复草稿到 resume
  resumeStore.loadDraftData()
  sections.value[section].status = 'preview'
  // 同步 section 的可见性状态
  const sectionData = resumeStore.resume.sections as Record<SectionKey, Section | undefined>
  sections.value[section].visible = sectionData[section]?.visible ?? true
}
/**
 * 切换 section 的可见状态
 * @param section - 要切换可见状态的 section 的 key
 */
const handleChangeVisible = (section: SectionKey) => {
  console.log("handleChangeVisible called with section:", section)
  console.log("Current visibility:", sections.value[section].visible)
  sections.value[section].visible = !sections.value[section].visible
  console.log("New visibility:", sections.value[section].visible)
  // 更新到 draft store
  resumeStore.setDraftData(`sections.${section}.visible`, sections.value[section].visible)
  // 同时更新到 resume store，因为这个状态不需要等待保存
  resumeStore.setResumeValue(`sections.${section}.visible`, sections.value[section].visible)
}

onMounted(() => {
  initSections()

})
</script>

<template>
  <main class="w-[768px]  rounded-lg">
    <div class="flex flex-col gap-4 py-4" ref="sectionRef">
      <SectionWrapper class="section-hide px-6 relative" title="基本信息">
        <Basics :status="sections['basics']?.status" />
        <Actions class="mt-4" :status="sections['basics']?.status" :visible="sections['basics']?.visible"
          @cancel="handleCancel('basics')"
          @edit="handleEdit('basics')"
          @save="handleSave('basics')"
          @changeVisible="handleChangeVisible('basics')" />
      </SectionWrapper>
      <template v-for="section in sectionsOrder" :key="section">
        <SectionWrapper class="section-hide px-6 relative" :title="sections[section]?.title">
          <component :is="sections[section]?.component" :status="sections[section]?.status" />
          <Actions class="mt-4" :status="sections[section]?.status" :visible="sections[section]?.visible"
            @cancel="handleCancel(section)" @edit="handleEdit(section)" @save="handleSave(section)"
            @changeVisible="handleChangeVisible(section)" />
        </SectionWrapper>
      </template>
    </div>
  </main>
</template>

<style scoped lang="less"></style>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Button } from "@lianqq/resume-ui";

defineOptions({
  name: "SidebarSection"
})

const props = withDefaults(defineProps<{
  isCollapsed?: boolean
}>(), {
  isCollapsed: false
})

const sections = [
  {
    label: "基本信息",
    icon: "lucide:user-round", 
    id: "#basic",
  },
  {
    label: "教育经历",
    icon: "lucide:book-open",
    id: "#education",
  },
  {
    label: "工作经历", 
    icon: "lucide:briefcase",
    id: "#work",
  },
  {
    label: "项目经历",
    icon: "lucide:briefcase", 
    id: "#project",
  },
  {
    label: "个人简介",
    icon: "lucide:user-round",
    id: "#profile",
  },
];
</script>

<template>
  <div 
    class="overflow-y-auto h-screen flex flex-col justify-center gap-2 py-12 bg-zinc-950 border-r border-r-border sidebar"
    :class="{ collapsed: isCollapsed }"
  >
    <div 
      v-for="item in sections"
      class="flex items-center gap-2 overflow-hidden justify-center"
    >
      <Button
        variant="ghost"
        class="flex items-center overflow-hidden gap-2 menu-button p-0"
      >
        <Icon :icon="item.icon" class="icon" />
        <p class="text-sml menu-label">{{ item.label }}</p>
      </Button>
    </div>
  </div>
</template>

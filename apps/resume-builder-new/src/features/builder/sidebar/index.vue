<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '@lianqq/resume-ui'
defineOptions({
  name: 'BuilderSidebar'
})

const menuList = [
  {
    title: "基本信息",
    icon: "lucide:user",
    href: "#basic"
  },
  {
    title: "教育经历",
    icon: "lucide:graduation-cap",
    path: "#education"
  }
]

</script>

<template>
  <aside class="w-56 p-4 rounded-lg">
    <div class="flex flex-col gap-2">
      <Button v-for="menu in menuList" :key="menu.title" variant="ghost">
        <Icon :icon="menu.icon" />
        {{ menu.title }}
      </Button>
    </div>
  </aside>
</template>
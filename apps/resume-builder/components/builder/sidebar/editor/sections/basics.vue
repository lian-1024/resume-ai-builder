<script lang="ts" setup>
import { computed } from 'vue'
import EditorSectionWrapper from './components/wrapper.vue'
import { Avatar, AvatarImage, AvatarFallback, Input ,Select, SelectTrigger,SelectValue, SelectContent, SelectGroup, SelectItem} from '@lianqq/resume-ui';

const resumeStore = useResumeStore()
const { resume } = storeToRefs(resumeStore)

// 通过 computed 提前获取 basics 数据，避免在模板中大量使用 ?. 操作符
const basicsData = computed(() => resume.value?.basics ?? {})

// 针对各个属性定义计算属性，并设置默认值
const avatarUrl = computed(() => basicsData.value.picture?.url ?? '')
const name = computed(() => basicsData.value.name ?? '')
const avatarInitials = computed(() => name.value.slice(0, 2))
const email = computed(() => basicsData.value.email ?? '')
const phone = computed(() => basicsData.value.phone ?? '')
const currentStatus = computed(() => basicsData.value.intention?.currentStatus ?? '')
const positionTitle = computed(() => basicsData.value.intention?.positionTitle ?? '')
const city = computed(() => basicsData.value.intention?.city ?? '')
const salary = computed(() => basicsData.value.intention?.salary ?? '')
const githubLink = computed(() => basicsData.value.url?.href ?? '')
</script>

<template>
  <EditorSectionWrapper title="基本信息" icon="lucide:user-round">
    <template #content>
      <div class="flex flex-col gap-6">
        <div class="flex items-center gap-4">
          <Avatar size="base">  
            <AvatarImage :src="avatarUrl" alt="头像" />
            <AvatarFallback>{{ avatarInitials }}</AvatarFallback>
          </Avatar>
          <div class="flex flex-col gap-2 flex-1">
            <span class="text-sm dark:text-zinc-300 text-zinc-500">头像</span>
            <Input placeholder="请输入图片链接" :value="avatarUrl" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-sm dark:text-zinc-300 text-zinc-500">姓名</span>
            <Input placeholder="请输入姓名" :value="name" />
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <div class="flex gap-4">
            <div class="flex flex-col gap-2 flex-1">
              <span class="text-sm dark:text-zinc-300 text-zinc-500">邮箱</span>
              <Input placeholder="请输入您的邮箱" :value="email" />
            </div>
            <div class="flex flex-col gap-2 flex-1">
              <span class="text-sm dark:text-zinc-300 text-zinc-500">手机号</span>
              <Input placeholder="请输入您的手机号" :value="phone"/>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-6">
          <div class="flex flex-col gap-2">
            <span class="text-sm dark:text-zinc-300 text-zinc-500">状态</span>
            <Input placeholder="请输入您的状态" :value="currentStatus"/>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-sm dark:text-zinc-300 text-zinc-500">意向职位</span>
            <Input placeholder="请输入您的意向职位" :value="positionTitle"/>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-sm dark:text-zinc-300 text-zinc-500">意向城市</span>
            <Input placeholder="请输入您的意向城市" :value="city" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-sm dark:text-zinc-300 text-zinc-500">期望薪资</span>
            <Input placeholder="请输入您的期望薪资" :value="salary" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-sm dark:text-zinc-300 text-zinc-500">Github</span>
            <Input placeholder="请输入您的Github链接" :value="githubLink" />
          </div>
          <div class="flex-1"></div>
        </div>
      </div>
    </template>
  </EditorSectionWrapper>
</template>
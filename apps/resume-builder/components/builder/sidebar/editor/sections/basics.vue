<script lang="ts" setup>
import EditorSectionWrapper from './components/wrapper.vue'
import { Avatar, AvatarImage, AvatarFallback, Input ,Select, SelectTrigger,SelectValue, SelectContent, SelectGroup, SelectItem} from '@lianqq/resume-ui';


const resumeStore = useResumeStore()

const { resume } = storeToRefs(resumeStore)

</script>

<template>
  <EditorSectionWrapper title="基本信息" icon="lucide:user-round">
    <template #content>
      <div class="flex flex-col gap-6">
        <div class="flex items-center gap-4">
          <Avatar size="base">  
            <AvatarImage :src="resume?.basics?.picture?.url || ''" alt="头像" />
            <AvatarFallback>{{ resume?.basics?.name?.slice(0, 2) }}</AvatarFallback>
          </Avatar>
          <div class="flex flex-col gap-2 flex-1">
            <span class="text-sm dark:text-zinc-300 text-zinc-500 ">头像</span>
            <Input placeholder="请输入图片链接" :value="resume?.basics?.picture?.url" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-sm dark:text-zinc-300 text-zinc-500 ">姓名</span>
            <Input placeholder="请输入姓名" :value="resume?.basics?.name" />
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <div class="flex gap-4">
            <div class="flex flex-col gap-2 flex-1">
              <span class="text-sm dark:text-zinc-300 text-zinc-500 ">邮箱</span>
              <Input placeholder="请输入您的邮箱" />
            </div>
            <div class="flex flex-col gap-2 flex-1">
              <span class="text-sm dark:text-zinc-300 text-zinc-500 ">手机号</span>
              <Input placeholder="请输入您的手机号" />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-6">
            <div class="flex flex-col gap-2">
              <span class="text-sm dark:text-zinc-300 text-zinc-500 ">状态</span>
           <Input placeholder="请输入您的状态" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-sm dark:text-zinc-300 text-zinc-500 ">意向职位</span>
              <Input placeholder="请输入您的意向职位" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-sm dark:text-zinc-300 text-zinc-500 ">意向城市</span>
              <Input placeholder="请输入您的意向城市" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-sm dark:text-zinc-300 text-zinc-500 ">期望薪资</span>
              <Input placeholder="请输入您的期望薪资" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-sm dark:text-zinc-300 text-zinc-500 ">Github</span>
              <Input placeholder="请输入您的Github链接" />
            </div>
            <div class="flex-1"></div>
        </div>
       
      </div>
    </template>
  </EditorSectionWrapper>
</template>
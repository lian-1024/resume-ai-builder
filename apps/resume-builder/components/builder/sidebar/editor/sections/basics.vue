<script lang="ts" setup>
import { computed } from 'vue'
import EditorSectionWrapper from './components/wrapper.vue'
import { Avatar, AvatarImage, AvatarFallback, Input ,Select, SelectTrigger,SelectValue, SelectContent, SelectGroup, SelectItem} from '@lianqq/resume-ui';
import InputItem from './components/input-item.vue';
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
const statusValue = ref('')
const changeValueHandle = (value:string) => {
  console.log(value)
  statusValue.value = value
}
</script>

<template>
  <EditorSectionWrapper title="基本信息" icon="lucide:user-round">
    <template #content>
      <div class="flex flex-col gap-6">
        <div class="flex items-center gap-4">
         
        </div>
    
        <div class="grid grid-cols-3 gap-6">
          <div class="flex items-center gap-4 col-span-2">
            <Avatar size="base">  
            <AvatarImage :src="avatarUrl" alt="头像" />
            <AvatarFallback>{{ avatarInitials }}</AvatarFallback>
          </Avatar>
          <InputItem class="flex-1" title="头像" placeholder="请输入图片链接" :model-value="avatarUrl" @update:model-value="changeValueHandle"/>
          </div>
          <InputItem title="姓名" placeholder="请输入姓名" :model-value="name" @update:model-value="changeValueHandle"/>
          <InputItem title="邮箱" placeholder="请输入您的邮箱" :model-value="email" @update:model-value="changeValueHandle"/>
          <InputItem title="手机号" placeholder="请输入您的手机号" :model-value="phone" @update:model-value="changeValueHandle"/>
          <InputItem title="状态" placeholder="请输入您的状态" :model-value="currentStatus" @update:model-value="changeValueHandle"/>
          <InputItem title="意向职位" placeholder="请输入您的意向职位" :model-value="positionTitle" @update:model-value="changeValueHandle"/>
          <InputItem title="意向城市" placeholder="请输入您的意向城市" :model-value="city" @update:model-value="changeValueHandle"/>
          <InputItem title="期望薪资" placeholder="请输入您的期望薪资" :model-value="salary" @update:model-value="changeValueHandle"/>
          <InputItem title="Github" class="col-start-1 -col-end-1 w-full" placeholder="请输入您的Github链接" :model-value="githubLink" @update:model-value="changeValueHandle"/>
        </div>
      </div>
    </template>
  </EditorSectionWrapper>
</template>
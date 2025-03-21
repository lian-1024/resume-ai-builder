<script setup lang="ts">
import { WithResumeAction } from '@/components/resume/actions';
import { Basic } from '@/components/resume/basic/index'
import { ACTION_MAP, type ActionType } from '@/constants/actions';
import { ref, type Component } from 'vue';
defineOptions({
  name: 'BuilderWorkspace'
})
type ComponentType = Component | typeof Basic


type ResumeDataMap = {
  id: string
  component: ComponentType
  status: 'edit' | 'preview'
}

const ResumeData = ref<ResumeDataMap[]>([
  {
    id: 'basic',
    component: Basic,
    status: 'preview'
  }
])



// 处理组件操作
const handleAction = (actionType: ActionType, id: string) => {
  switch (actionType) {
    case ACTION_MAP.EDIT:
      ResumeData.value.find(item => {
        if (item.id === id) {
          item.status = 'edit'
        }
      })
  }
}
</script>

<template>
  <main class="w-[768px] p-6 rounded-lg self-start mt-6">
    <div>
      <template v-for="item in ResumeData" :key="item.id">
        <WithResumeAction :id="item.id" @handle="handleAction">
          <component :is="item.component" :status="item.status" />
        </WithResumeAction>
      </template>
    </div>
  </main>
</template>
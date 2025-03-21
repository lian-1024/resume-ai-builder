<script setup lang="ts">
import { WithResumeAction } from '@/components/resume/actions';
import { Basic } from '@/components/resume/basic/index'
import { ACTION_MAP, type ActionType } from '@/constants/actions';
import { reactive, ref, type Component } from 'vue';
import ResumeWrapper from '@/components/resume/components/wrapper.vue'
import { Skill } from '@/components/resume/skill/index'
defineOptions({
  name: 'BuilderWorkspace'
})
type ComponentType = Component | typeof Basic


type ResumeDataMap = {
  id: string,
  title: string,
  component: ComponentType
  status: 'edit' | 'preview'
}

const ResumeData = reactive<ResumeDataMap[]>([
  {
    id: 'basic',
    title: '基本信息',
    component: Basic,
    status: 'preview'
  },
  {
    id: 'skill',
    title: '技能',
    component: Skill,
    status: 'preview'
  }
])



// 处理组件操作
const handleAction = (actionType: ActionType, id: string) => {
  switch (actionType) {
    case ACTION_MAP.DELETE:
      handleDelete(id)
      break;
    case ACTION_MAP.EDIT:
      handleEdit(id)
      break;
    case ACTION_MAP.SAVE:
      handleSave(id)
      break;
  }
}

const handleSave = (id: string) => {
  console.log("save", id);
  ResumeData.find(item => {
    if (item.id === id) {
      item.status = 'preview'
    }
  })
}

const handleDelete = (id: string) => {
  console.log("delete", id);

  // 删除
  ResumeData.find(item => {
    if (item.id === id) {
      ResumeData.splice(ResumeData.indexOf(item), 1)
    }
  })
}

const handleEdit = (id: string) => {
  // 切换到编辑状态
  ResumeData.find(item => {
    if (item.id === id) {
      item.status = 'edit'
    }
  })
}
</script>

<template>
  <main class="w-[768px] p-6 rounded-lg ">
    <div class="flex flex-col gap-4">
      <template v-for="item in ResumeData" :key="item.id">
        <ResumeWrapper :title="item.title" :id="item.id" :status="item.status" @handle="handleAction">
          <component :is="item.component" :status="item.status" />
        </ResumeWrapper>
      </template>
    </div>
  </main>
</template>
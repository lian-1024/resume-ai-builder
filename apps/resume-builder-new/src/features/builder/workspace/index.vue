<script setup lang="ts">
import { provide, reactive, ref, type Component } from 'vue';
import { useResumeStore } from '@/stores'
import { Basics } from '@/components/resume/basic';
import { SectionWrapper } from '@/components/resume/wrapper';
import { Skills } from '@/components/resume/skills';
defineOptions({
  name: 'BuilderWorkspace'
})




</script>

<template>
  <main class="w-[768px] p-6 rounded-lg ">
    <div class="flex flex-col gap-4">
      <SectionWrapper title="基本信息">
        <Basics />
      </SectionWrapper>
      <SectionWrapper title="技能">
        <Skills />
      </SectionWrapper>
    </div>
  </main>
</template>
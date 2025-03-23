<script setup lang="ts">
import { provide, reactive, ref, type Component } from 'vue';
import { useResumeStore } from '@/stores'
import { Basics } from '@/components/resume/basic';
import { SectionWrapper } from '@/components/resume/wrapper';
import { Skills } from '@/components/resume/skills';
import { Projects } from '@/components/resume/projects';
import { Education } from '@/components/resume/education';
defineOptions({
  name: 'BuilderWorkspace'
})

</script>

<template>
  <main class="w-[768px] p-6 rounded-lg">
    <div class="flex flex-col gap-4 ">
      <SectionWrapper title="基本信息">
        <Basics />
      </SectionWrapper>
      <SectionWrapper title="技能">
        <Skills />
      </SectionWrapper>
      <SectionWrapper title="项目经历">
        <Projects />
      </SectionWrapper>
      <SectionWrapper title="教育经历">
        <Education />
      </SectionWrapper>
    </div>
  </main>
</template>
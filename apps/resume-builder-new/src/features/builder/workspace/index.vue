<script setup lang="ts">
import { provide, reactive, ref, type Component } from 'vue';
import ResumeWrapper from '@/components/resume/components/wrapper.vue'
import { useResumeStore } from '@/stores'
import { Basics } from '@/components/resume/basic';

defineOptions({
  name: 'BuilderWorkspace'
})




</script>

<template>
  <main class="w-[768px] p-6 rounded-lg ">
    <div class="flex flex-col gap-4">
      <Basics/>
    </div>
  </main>
</template>
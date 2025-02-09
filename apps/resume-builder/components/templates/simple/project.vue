<script lang="ts" setup>
import Section from '@/components/templates/simple/section.vue';
import 'md-editor-v3/lib/style.css'
import { TypographySubTitle, TypographySubText } from '@/components/common/typography/index';
import { MDPreview } from '@/components/common/md-editor';
import LinkPrimary from '@/components/templates/components/link-primary.vue';
import { onMounted } from 'vue'
import { resumeKey, type ResumeProviderProps } from '@/components/preview/provider';

defineOptions({
  name:"SimpleProjects"
})
const {resumeData} = inject<ResumeProviderProps>(resumeKey) || {}
const projects = computed(() => resumeData?.value?.sections?.projects)
const isClient = ref(false)

onMounted(() => {
  isClient.value = true
})
</script>

<template>
  <Section :title="projects?.name || '项目经验'">
    <div class="flex flex-col" v-for="project in projects?.items" :key="project.id">
      <div class="flex justify-between">
        <TypographySubTitle>
          {{ project.name }}
        </TypographySubTitle>
        <TypographySubText>
          {{ project.startDate }}
          ~
          {{ project.endDate }}
        </TypographySubText>
      </div>
      <div class="flex justify-between">
        <TypographySubText>{{ project.role }}</TypographySubText>
        <LinkPrimary :href="project.url?.href">{{ project.url?.label }}</LinkPrimary>
      </div>
      <ClientOnly>
        <MDPreview v-model:model-value="project.summary"/>
      </ClientOnly>
    </div>
  </Section>
</template>

<style lang="less" scoped>

</style>

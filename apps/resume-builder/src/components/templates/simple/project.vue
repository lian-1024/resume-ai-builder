<script lang="ts" setup>
import Section from '@/components/templates/simple/section.vue';
import { TypographySubTitle, TypographySubText } from '@/components/ui/typography/index';
import LinkPrimary from '@/components/templates/components/link-primary.vue';
import { onMounted ,inject,computed,ref} from 'vue'
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
  <Section v-if="projects" :title="projects.name || '项目经验'">
    <div class="flex flex-col" v-for="project in projects?.items" :key="project.id">
      <div class="flex justify-between items-center gap-4">
        <TypographySubTitle>
          {{ project.name }}
        </TypographySubTitle>
        <TypographySubText class="flex-1">{{ project.role }}</TypographySubText>

        <TypographySubText>
          {{ project.startDate }}
          ~
          {{ project.endDate }}
        </TypographySubText>
      </div>
        <p class="my-2" v-html="project.summary"/>
    </div>
  </Section>
</template>

<style lang="less" scoped>

</style>

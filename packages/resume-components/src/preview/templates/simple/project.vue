<script lang="ts" setup>
import Section from '@/preview/templates/simple/section.vue'
import {Simple} from '@lianqq/resume-schema'
import {ref} from 'vue'
import {TypographySubText, TypographySubTitle} from '@/components/typography'
import LinkPrimary from '@/components/link-primary.vue'
import { MDPreview } from '@/components/md-editor'


defineOptions({
  name:"SimpleProjects"
})
const projects = ref(Simple.sections?.projects)
</script>

<template>
  <Section :title="projects?.name || '项目经验'">
    <div class="flex flex-col" v-for="project in projects?.items">
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
          <LinkPrimary :href="project.url?.href ">{{ project.url?.label }}</LinkPrimary>
        </div>
        <MDPreview v-model:model-value="project.summary"/>
    </div>
  </Section>
</template>

<style lang="less" scoped>

</style>

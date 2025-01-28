<script lang="ts" setup>
import Section from '@/components/templates/simple/section.vue';
import { Simple } from '@lianqq/resume-schema';
import 'md-editor-v3/lib/style.css'
import { TypographySubTitle, TypographySubText } from '@/components/common/typography/index';
import { MDPreview } from '@/components/common/md-editor';


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

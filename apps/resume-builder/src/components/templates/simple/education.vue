<script setup lang="ts">
import Section from './section.vue';
import { TypographySubTitle, TypographySubText } from '@/components/ui/typography/index';
import { resumeKey, type ResumeProviderProps } from '@/components/preview/provider';
import { inject ,computed} from 'vue';
defineOptions({
    name: "SimpleEducation"
})

const {resumeData} = inject<ResumeProviderProps>(resumeKey) || {}

const education = computed(() => resumeData?.value?.sections?.education)


</script>

<template>
    <Section v-if="education" :title="education.name || '教育经历'" class="flex flex-col gap-2">
        <div v-for="item in education.items" :key="item.id" class="flex flex-col ">
            <div class="flex gap-2 items-center ">
                <TypographySubTitle :title="item.school"/>
                <TypographySubText :text="item.degree" />
                <TypographySubText :text="item.major" />
                <TypographySubText   :text="`${item.startDate || '1970-01-01'} - ${item.endDate || '至今'}`" align="right" class="ml-auto"/>
            </div>
            <TypographySubText :text="item.studyType" />
            <p class="my-2" v-html="item.summary"/>
        </div>
    </Section>
</template>
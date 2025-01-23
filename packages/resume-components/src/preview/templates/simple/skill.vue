<script setup lang="ts">
import { ref } from 'vue';
import Section from './section.vue';
import { Simple } from '@lianqq/resume-schema';
import 'md-editor-v3/lib/style.css'
import { MDPreview } from '@/components/md-editor';
defineOptions({
    name: "Skills"
})

const skills = ref(Simple.sections?.skills)

</script>

<template>
    <Section :title="skills?.name || '专业技能'" class="flex flex-col gap-2">
        <div class="flex flex-col gap-2" v-for="skill in skills?.items" :key="skill.id">
            <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
                {{ skill.name }}
            </h4>
            <MDPreview v-model="skill.description" class="p-0"/>
        </div>
    </Section>
</template>
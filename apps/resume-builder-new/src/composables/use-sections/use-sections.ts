import { ref } from 'vue';
import { Basics } from '@/components/resume/basic';
import { Skills } from '@/components/resume/skills';
import { Projects } from '@/components/resume/projects';
import { Education } from '@/components/resume/education';
import type { SectionMap, SectionStatus } from './types';
import { type Section, type SectionKey } from '@lianqq/resume-schema';
import { useResumeStore } from '@/stores';
import { Intention } from '@/components/resume/intention';



const sections = ref({
    basics: {
        title: '基本信息',
        component: Basics,
        status: 'preview',
        visible: true
    }
} as SectionMap)

export const useSections = () => {

    const componentsMap = {
        intention: Intention,
        skills: Skills,
        projects: Projects,
        education: Education
    }


    // 根据名称获取 section
    const getSection = (name: SectionKey) => {
        return sections.value[name]
    }

    // 设置 section 状态
    const setSectionStatus = (name: SectionKey, status: SectionStatus) => {
        sections.value[name].status = status
    }

    // 设置 section 可见性
    const setSectionVisible = (name: SectionKey, visible: boolean) => {
        sections.value[name].visible = visible
    }

    // 设置 section 组件
    const setSectionComponent = (name: SectionKey, component: any) => {
        sections.value[name].component = component
    }

    // 设置 section 标题
    const setSectionTitle = (name: SectionKey, title: string) => {
        sections.value[name].title = title
    }

    const changeSectionVisible = (name: SectionKey) => {
        sections.value[name].visible = !sections.value[name].visible

    }


    // 初始化 sections
    const initSections = () => {
        // 初始化 sections
        const resume = useResumeStore()
        const resumeSections = resume.resume.sections
        console.log("Initializing sections with:", resumeSections);

        Object.keys(resumeSections!).forEach(key => {
            const sectionKey = key as keyof typeof resumeSections;
            const section = resumeSections![sectionKey] as Section
            console.log(`Initializing section ${sectionKey}:`, section);

            sections.value[sectionKey] = {
                title: section.name,
                component: componentsMap[sectionKey as keyof typeof componentsMap],
                status: 'preview',
                visible: section.visible ?? true
            }
            console.log(`Section ${sectionKey} initialized with:`, sections.value[sectionKey]);
        })
    }


    return {
        sections,
        getSection,
        setSectionStatus,
        setSectionVisible,
        setSectionComponent,
        setSectionTitle,
        initSections
    }
}
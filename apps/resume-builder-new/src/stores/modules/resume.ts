import { defaultResumeData, type Education, type ResumeData } from "@lianqq/resume-schema";
import { defineStore } from "pinia";
import { ref } from "vue";
import { set,cloneDeep } from 'lodash-es'
import type { Basics } from "@lianqq/resume-schema";

export const useResumeStore = defineStore('resume', () => {
    const resume = ref<ResumeData>(defaultResumeData)
    const draftData = ref<ResumeData>({})

    const setResume = (data: ResumeData) => {
        resume.value = cloneDeep(data)
    }


    const setResumeValue = (path: string, value: any) => {
        console.log("path", path, value)

        set(resume.value, path, value)
    }

    const loadDraftData = () => {
        draftData.value = cloneDeep(resume.value)
    }

    const saveDraftData = () => {
        console.log('saveDraftData', draftData.value)
        resume.value = cloneDeep(draftData.value)
    }

    const setDraftData = (path: string, value: any) => {
        set(draftData.value, path, value)
        console.log('setDraftData', draftData.value)
        console.log('resume', resume.value)
    }

    const clearDraftData = () => {
        draftData.value = {}
    }

    return {
        resume,
        setResume,
        setResumeValue,
        draftData,
        loadDraftData,
        saveDraftData,
        setDraftData,
        clearDraftData
    }
}, {
    persist: true
})
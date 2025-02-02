import { defineStore } from 'pinia'
import { type ResumeData, Example, type TemplateKey, defaultResumeData, type SectionKey } from '@lianqq/resume-schema'
import _set from 'lodash-es/set'

export const useResumeStore = defineStore('resume', () => {
  const resume = ref<ResumeData>({})

  /**
   * 初始化简历数据
   * @param template 
   */
  const initResumeData = (resumeData:ResumeData = Example) => {
    resume.value =resumeData
  }

  /**
   * 设置简历数据
   * @param path 
   * @param value 
   */
  const setResumeValue = (path: string, value: any) => {
  }

  /**
   * 设置简历数据
   * @param resumeData 
   */
  const setResume = (resumeData:ResumeData) => {
    resume.value = resumeData
  }

  /**
   * 获取简历数据
   * @returns 
   */
  const getResume = (section?:SectionKey) => {

    return resume.value
  }


  
  return {
    resume,
    initResumeData,
    setResumeValue,
    setResume,
    getResume
  }
})

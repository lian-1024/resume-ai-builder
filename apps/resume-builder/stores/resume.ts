import { defineStore } from 'pinia'
import { type ResumeData, Example, type TemplateKey } from '@lianqq/resume-schema'
import _set from 'lodash-es/set'

export const useResumeStore = defineStore('resume', () => {
  const resume = ref<ResumeData>({})

  /**
   * 初始化简历数据
   * @param template 
   */
  const initResumeData = () => {
    resume.value = Example
  }

  /**
   * 设置简历数据
   * @param path 
   * @param value 
   */
  const setResumeValue = (path: string, value: any) => {
  }

  


  
  return {
    resume,
    initResumeData,
    setResumeValue
  }
})

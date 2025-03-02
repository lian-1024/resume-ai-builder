import { defineStore } from 'pinia'
import { type ResumeData, Example, type SectionKey } from '@lianqq/resume-schema'
import _set from 'lodash-es/set'
import { useIframeResume, IframeMessageTypeMap } from '@lianqq/resume-utils'
import { ref } from 'vue'

export const useResumeStore = defineStore('resume', () => {
  const resume = ref<ResumeData>({})
  const { updateResumeData } = useIframeResume()

  /**
   * 初始化简历数据
   * @param template 
   */
  const initResumeData = (resumeData: ResumeData = Example) => {
    resume.value = resumeData
  }

  /**
   * 设置简历数据
   * @param path 
   * @param value 
   */
  const setResumeValue = (path: string, value: any) => {
    
    _set(resume.value, path, value)
    updateResumeData(IframeMessageTypeMap.UPDATE_RESUME, {
      path,
      value
    })

  }



  /**
   * 设置简历数据
   * @param resumeData 
   */
  const setResume = (resumeData: ResumeData) => {
    resume.value = {
      ...resume.value,
      ...resumeData
    }
    console.log("设置简历数据", resume.value);
  }

  /**
   * 获取简历数据
   * @returns 
   */
  const getResume = (section?: SectionKey) => {

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

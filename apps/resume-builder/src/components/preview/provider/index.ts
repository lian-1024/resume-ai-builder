import type { ResumeData } from '@lianqq/resume-schema'
import type { InjectionKey, Ref } from 'vue'
export interface ResumeProviderProps {
  resumeData: Ref<ResumeData>,
  setResumeValue: (path: string, value: any) => void
}

export const resumeKey = Symbol('resume') as InjectionKey<ResumeProviderProps>
export { default as ResumeProvider } from './provider.vue'
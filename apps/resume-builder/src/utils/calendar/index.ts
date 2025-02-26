import { useResumeStore } from '@/stores'
import { parseDate } from '@lianqq/resume-utils'
import { CalendarDate } from '@lianqq/resume-ui'
const resumeStore = useResumeStore()

/**
 * 格式化字符串日期为 日历 所需格式
 * @param date 
 * @returns 
 */
export const stringToDate = (date?: string) => {
    const dateValue = parseDate(date || new Date().toISOString())
    const { year, month, day } = dateValue
    return new CalendarDate(year, month, day)
}
/**
 * 修改简历上日期
 * @param date 
 * @param index 
 */
export const changeDate = (path: string, date: any, index: number) => {
    const dateValue = date.toString()
    if (path.indexOf('startDate') > -1) {
        console.log("startDate");

        resumeStore.setResumeValue(`sections.projects.items[${index}].startDate`, dateValue)
    } else {
        console.log("endDate");

        resumeStore.setResumeValue(`sections.projects.items[${index}].endDate`, dateValue)
    }
}

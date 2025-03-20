import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')


/**
 * 格式化日期
 * @param date 日期
 * @param format 格式
 * @returns 格式化后的日期
 */
export const formatDate = (date: string, format: string) => {
    return dayjs(date).format(format)
}

/**
 * 格式化日期为中文
 * @param date 日期
 * @returns 格式化后的日期
 */
export const formatDateToChinese = (date: string) => {
    return dayjs(date).format('YYYY年MM月DD日')
}

/**
 * 解析日期
 * @param date 日期
 * @param format 格式
 * @returns 解析后的日期
 */
export const parseDate = (date: string) => {
    const formattedDate = date.replace(/年|月/g, '-').replace(/日/g, '')
    const dateObj = dayjs(formattedDate).toDate()

    return {
        year: dateObj.getFullYear(),
        month: dateObj.getMonth() + 1,
        day: dateObj.getDate()
    }
}


export default dayjs

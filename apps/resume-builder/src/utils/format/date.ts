import dayjs from '@/plugins/dayjs'

export const formatDate = (date: string, format: string) => {
    return dayjs(date).format(format)
}

export const formatDateToChinese = (date: string) => {
    return dayjs(date).format('YYYY年MM月DD日')
}


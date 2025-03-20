import { default as dayjs } from 'dayjs';

/**
 * 格式化日期
 * @param date 日期
 * @param format 格式
 * @returns 格式化后的日期
 */
export declare const formatDate: (date: string, format: string) => string;
/**
 * 格式化日期为中文
 * @param date 日期
 * @returns 格式化后的日期
 */
export declare const formatDateToChinese: (date: string) => string;
/**
 * 解析日期
 * @param date 日期
 * @param format 格式
 * @returns 解析后的日期
 */
export declare const parseDate: (date: string) => {
    year: number;
    month: number;
    day: number;
};
export default dayjs;

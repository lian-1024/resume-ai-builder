/**
 * 去除字符串中的所有空白字符（包括空格、制表符、换行符等）
 * @param str 需要处理的字符串
 * @returns 去除空白字符后的字符串
 */
export function removeWhitespace(str: string): string {
  return str.replace(/\s+/g, '');
}

/**
 * 去除字符串中的所有空格
 * @param str 需要处理的字符串
 * @returns 去除空格后的字符串
 */
export function removeSpaces(str: string): string {
  return str.replace(/ /g, '');
}

/**
 * 去除字符串中的所有换行符
 * @param str 需要处理的字符串
 * @returns 去除换行符后的字符串
 */
export function removeLineBreaks(str: string): string {
  return str.replace(/[\r\n]+/g, '');
}

/**
 * 压缩字符串中的连续空白字符为单个空格
 * @param str 需要处理的字符串
 * @returns 压缩空白后的字符串
 */
export function compressWhitespace(str: string): string {
  return str.replace(/\s+/g, ' ').trim();
}

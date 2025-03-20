
/**
 * 复制文本
 * @param message 
 */
export const copyTextToClipboard = async (message: string) => {
    if(typeof message !== 'string') throw new Error("复制内容不是字符串")
    try {
        await navigator.clipboard.writeText(message)
    } catch (error) {
        throw error
    }
}
/**
 * 提取代码块内容
 * @param text 包含代码块的文本
 * @returns 提取出的代码内容数组
 */
export function extractCodeBlock(text: string): string[] {
    // 匹配 ```language 和 ``` 之间的内容
    const regex = /```(?:\w+)?\s*([\s\S]*?)```/g;
    const matches: string[] = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
        // match[1] 是第一个捕获组，即代码块内的实际内容
        matches.push(match[1].trim());
    }

    return matches;
}
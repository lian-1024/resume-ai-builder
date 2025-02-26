export const extractCodeBlock = (content: string) => {
    const codeBlockRegex = /```[\s\S]*?\n([\s\S]*?)```/g;
    const matches = [...content.matchAll(codeBlockRegex)]

    if (matches.length > 0) {
        return matches.map(match => match[1].trim())
    }
    return []
}
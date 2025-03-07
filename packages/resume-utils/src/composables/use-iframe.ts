import { ref } from 'vue'
import type { ResumeData } from '@lianqq/resume-schema'

export const IframeMessageTypeMap = {
    UPDATE_RESUME: 'UPDATE_RESUME',
    INIT_RESUME: 'INIT_RESUME',
    READY: 'READY',
    EXPORT_PDF: 'EXPORT_PDF',
    SET_RESUME: 'SET_RESUME',
    CHANGE_THEME: 'CHANGE_THEME',
    SET_STYLE: 'SET_STYLE',
} as const

const iframe = ref<HTMLIFrameElement | null>(null)


export type IframeMessageType = (typeof IframeMessageTypeMap)[keyof typeof IframeMessageTypeMap]
export const useIframeResume = () => {


    /**
     * 初始化iframe
     * @param iframeElement 
     */
    const initIframe = (iframeElement: HTMLIFrameElement | null) => {
        return new Promise((resolve, reject) => {
            if (!iframeElement) {
                reject("iframe 不存在")
            }
            iframe.value = iframeElement
            resolve(iframeElement)
        })

        // // 添加握手监听：等待预览页 READY 消息
        // const readyHandler = (event: MessageEvent) => {
        //     if (event.data && event.data.type === IframeMessageTypeMap.READY) {
        //         console.log('预览页已就绪，开始发送 resume 数据')
        //         updateResumeData(IframeMessageTypeMap.INIT_RESUME, resumeStore.resume)
        //         // 接收到 READY 后可以移除该监听器
        //         window.removeEventListener('message', readyHandler)
        //     }
        // }
        // window.addEventListener('message', readyHandler)
    }

    /**
     * 更新简历数据
     * @param type 
     * @param data 
     */
    const updateResumeData = (type: IframeMessageType, data: any) => {
        return new Promise((resolve, reject) => {
            if (!iframe.value) return reject("iframe 不存在")
            // 使用 JSON 序列化和反序列化来确保数据可以被克隆
            const cloneData = JSON.parse(JSON.stringify(data))
            iframe.value.contentWindow?.postMessage({ type, data: cloneData }, '*')
            resolve(true)
        })
    }

    // 导出简历到 pdf
    const exportResumeToPdf = () => {
       
        return new Promise((resolve, reject) => {
            if (!iframe.value) return reject("iframe 不存在")
            iframe.value.contentWindow?.postMessage({ type: IframeMessageTypeMap.EXPORT_PDF }, '*')
            resolve(true)
        })
    }

    // 设置简历
    const setResume = (resume: ResumeData) => {
        return new Promise((resolve, reject) => {
            if (!iframe.value) return reject("iframe 不存在")
            iframe.value.contentWindow?.postMessage({ type: IframeMessageTypeMap.SET_RESUME, data: resume }, '*')
            resolve(true)
        })
    }


    return {
        iframe,
        initIframe,
        updateResumeData,
        exportResumeToPdf,
        setResume
    }
}
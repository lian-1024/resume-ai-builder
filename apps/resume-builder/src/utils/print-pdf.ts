import { toast } from '@lianqq/resume-ui'
import { pageSizeMap } from '@lianqq/resume-utils'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export interface PrintResumeOptions {
    filename?: string
    format?: 'a4'
    quality?: number
}


export const printResume = async <T extends HTMLElement>(elementRef: T, options: PrintResumeOptions = {}) => {
    if (!elementRef) return

    return new Promise(async (resolve, reject) => {
        try {
            // 使用html2canvas 将元素转换为canvas
            const canvas = await html2canvas(elementRef, {
                scale: 2, // 提高清晰度
                useCORS: true, // 允许跨域图片
                logging: false,
            })


            // 获取页面尺寸
            const format = options.format || 'a4'
            const pageSize = pageSizeMap[format]

            // 创建PDF文档
            const pdf = new jsPDF('p', 'mm', 'a4')

            // 计算宽高比例
            const imgWidth = Math.min(canvas.width, pdf.internal.pageSize.getWidth())
            const imgHeight = (canvas.height * imgWidth) / canvas.width

            // 将canvas转换为图片
            const imgData = canvas.toDataURL('image/png', options.quality || 1.0)
            // 添加图片到PDF
            pdf.addImage({
                imageData: imgData,
                format: 'PNG',
                x: 0,
                y: 0,
                width: imgWidth,
                height: imgHeight
            })

            // 保存PDF
            const filename = options.filename || 'resume.pdf'
            pdf.save(filename)

            resolve({
                url: imgData,
                filename: filename
            })


        } catch (error) {
            console.error('PDF生成失败:', error)
            reject(error)
        }
    }).then((res) => {
        toast({
            message: '导出成功',
        })
        return res
    }).catch((error) => {
        toast({
            message: '导出失败',
            variant: 'destructive'
        })
        return {
            url: '',
            filename: ''
        }
    })
}
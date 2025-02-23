import { extend } from "lodash-es";
import type { Ref } from "vue";
import html2canvas from 'html2canvas'
import jsPDF from "jspdf";
import { toast } from '@lianqq/resume-ui'
export const printElementPdf = async <T extends HTMLElement>(elementRef: T) => {
    if (!elementRef) return

    new Promise(async (resolve, reject) => {
        // 使用html2canvas 将元素转换为canvas
        const canvas = await html2canvas(elementRef, {
            scale: 2,
            useCORS: true,
        })

        // 创建pdf
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        })

        // 将canvas转换为图片
        const imaData = canvas.toDataURL('image/jpeg', 1.0)

        // 计算pdf的宽度和高度
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width

        // 添加图片到pdf
        pdf.addImage(imaData, 'PNG', 0, 0, pdfWidth, pdfHeight)
        // 保存pdf
        pdf.save('resume.pdf')
        resolve(true)
    }).then(() => {
        toast({
            message: '导出成功',
        })
    }).catch(() => {
        toast({
            message: '导出失败',
            variant:'destructive'
        })
    })



}
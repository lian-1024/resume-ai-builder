import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'


export const exportElementToPDF = async (element: HTMLElement, filename: string = 'document.pdf') => {
  try {
    // 将 HTML 元素转换为 canvas
    const canvas = await html2canvas(element, {
      scale: 2, // 提高清晰度
      useCORS: true, // 允许跨域图片
      logging: false
    })

    // 获取 canvas 的宽高
    const imgWidth = canvas.width
    const imgHeight = canvas.height

    // 按 A4 纸的比例计算高度
    const pageWidth = 595.28 
    const pageHeight = 841.89
    const ratio = imgWidth / pageWidth
    const contentHeight = imgHeight / ratio

    // 创建 PDF 实例
    const pdf = new jsPDF('p', 'pt', 'a4')
    
    // 如果内容高度超过一页,需要分页
    let position = 0
    while (position < contentHeight) {
      // 将 canvas 转为图片
      const imgData = canvas.toDataURL('image/jpeg', 1.0)
      pdf.addImage(imgData, 'JPEG', 0, -position, pageWidth, imgHeight / ratio)
      
      position += pageHeight
      if (position < contentHeight) {
        pdf.addPage()
      }
    }

    // 保存文件
    pdf.save(filename)
    return true
  } catch (error) {
    console.error('导出 PDF 失败:', error)
    return false
  }
}

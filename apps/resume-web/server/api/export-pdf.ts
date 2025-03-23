import puppeteer from 'puppeteer'

export default defineEventHandler(async event => {
  // 启动浏览器
  const browser = await puppeteer.launch({ headless: true })
  // 创建新页面
  const page = await browser.newPage()

  const data = await readBody(event)
  await page.goto('http://localhost:5173/preview', { waitUntil: "networkidle0" })

  await page.waitForSelector('#resume-page') // 等待页面加载完成

  await page.evaluate((resumeData) => {
    console.log(resumeData)
    localStorage.setItem('resume', JSON.stringify(resumeData))
  }, data)

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,  // 打印背景样式
    // margin: {
    //   top: '10mm',
    //   right: '10mm',
    //   bottom: '10mm',
    //   left: '10mm'
    // }
  })

  await browser.close()


  setHeader(event, 'Content-Type', "application/pdf")
  setHeader(event, 'Content-Disposition', "attachment; filename=resume.pdf")

  return pdfBuffer
})
import { useResumeStore } from "@/stores";

export const exportPDF = async () => {
    const resumeStore = useResumeStore()
    console.log(resumeStore.resume);

    return new Promise(async (resolve, reject) => {
        try {
            const res = await fetch("http://localhost:3002/api/export-pdf", {
                method: "POST",
                body: JSON.stringify(resumeStore.resume)
            });

            if (!res.ok) {
                throw new Error(`导出失败: ${res.status} ${res.statusText}`);
            }

            // 创建blob对象
            const blob = new Blob([await res.arrayBuffer()], { type: 'application/pdf' });

            // 创建下载链接
            const url = URL.createObjectURL(blob);

            // 创建一个临时<a>元素来触发下载
            const link = document.createElement('a');
            link.href = url;
            link.download = `resume_${new Date().toISOString().split('T')[0]}.pdf`; // 文件名带日期
            document.body.appendChild(link);
            link.click();

            // 清理
            setTimeout(() => {
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            }, 100);

            resolve(true)
        } catch (error) {
            console.error('PDF导出失败:', error);
            // 这里可以添加错误提示UI
            reject(false)
        }
    })
};
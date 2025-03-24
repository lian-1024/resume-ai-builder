import { z } from "zod";

// 意向
export const intentionSchema = z.object({
    status: z.string(), // 状态
    position: z.string(), // 职位
    salary: z.string(), // 薪资
    location: z.string(), // 地点
})

export type Intention = z.infer<typeof intentionSchema>

export const defaultIntention: Intention = {
    status: '',
    position: '',
    salary: '',
    location: '',
}

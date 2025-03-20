import { Button, Card, CardContent, CardFooter, Textarea, toast } from '@lianqq/resume-ui'
import { ButtonHover, ButtonPress } from '~/components/motions/button'
import { Icon } from '#components'
import { AlertDialog } from '~/components/ui/alert-dialog'
import { Dialog } from '~/components/ui/dialog'

/**
 * 创建简历
 * @param template 模版名称
 * @param content 简历描述内容
 * @returns 
 */
const createResume = (template: string, content?: string) => {
 

  if (content !== undefined && content.length < 20) return toast({
    title: '描述过短，请你提供更多信息，以便生成更准确的简历',
    description: '请输入您的基本信息，目标岗位、专业技能、项目经历、校园经历等'
  })

  try {

    const url = new URL(`http://localhost:5173/builder`)
    url.searchParams.set('template', template)
    content && url.searchParams.set('content', content.trim())

    window.location.href = url.toString()
  } catch (error) {
    toast({
      title: '创建失败',
      description: '请稍后再试'
    })
  }
}

const ResumeCard = () => {
  return (
    <div class="w-full h-full rounded-lg overflow-hidden relative group">
      <ButtonHover class="w-full h-full">
        <img
          src="/images/resume/simple.png"
          alt="placeholder"
          class="object-cover block h-full w-full"
        />
      </ButtonHover>
      <div class="bg-gradient-to-t from-black/50 to-transparent absolute bottom-0 left-0 w-full h-full flex items-end transition-all duration-300 group-hover:bg-black/40">
        <div class="p-4">
          <p class="text-white">前端实习简历模版</p>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 w-full h-full opacity-0 flex items-center transition-all duration-300 px-16 group-hover:opacity-100">
        <AlertDialog title='创建该模版' description='请确认您是否要创建该模版' confirmText='确认创建' cancelText='取消' onConfirm={() => createResume('simple')}>
          {{
            trigger: () => (
              <ButtonPress class="w-full">
                <Button class="w-full rounded-full  dark:text-white">
                  创建该模版
                </Button>
              </ButtonPress>
            )
          }}
        </AlertDialog>
      </div>
    </div>
  )
}


const AIResumeGenerator = () => {
  const content = ref('')

  return (
    <Dialog
      title='AI简历生成'
      description='请输入您的基本信息，目标岗位、专业技能、项目经历、校园经历等，长度在20字以上'
      confirmText='确认创建'
    >
      {{
        trigger: () =>
          <Button class="dark:text-white">
            <Icon name="lucide:mouse-pointer-click" size={16} />
            <span>
              AI一键生成简历
            </span>
          </Button>,
        content: () => (
          <Textarea v-model={content.value} />
        ),
        footer: () => (
          <div onClick={() => createResume('simple', content.value)}>
            <Button class="dark:text-white">
              确认创建
            </Button>
          </div>
        )
      }}
    </Dialog>
  )
}

const EmptyResumeCard = () => {
  return (
    <div class="w-full h-full rounded-lg overflow-hidden relative group">
      <div class="w-full h-full flex items-center justify-center gap-2">
        <span>
          暂时只有这些模版，更多模版敬请期待
        </span>
        <Icon name="lucide:info" size={16} />
      </div>
    </div>

  )
}



export default defineComponent({
  name: 'Resume',
  setup() {

    return () => (
      <div class="h-[calc(100vh-6rem)] mt-[6rem]">
        <div class="flex flex-col items-center pt-6">
          <h1 class="text-center scroll-m-20 font-sans font-black  text-4xl lg:text-5xl tracking-tight ">
            请您选择简历模版
          </h1>
          <p class="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground italic">
            简历不必复杂，简洁明了即可
          </p>
        </div>
        <main
          class="dark:bg-zinc-950 dark:border-zinc-800 bg-white border border-zinc-100 p-6 rounded-lg  m-16 flex flex-col gap-6"

        >
          <div class="flex">
            <ButtonHover>
              <ButtonPress>
                <AIResumeGenerator />
              </ButtonPress>
            </ButtonHover>
          </div>
          <div class="grid grid-flow-row-dense grid-cols-auto-fill gap-x-6 gap-y-10 justify-between"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gridAutoRows: '460px'
            }}
          >

            {Array.from({ length: 1 }).map((item, index) => {
              return <ResumeCard />
            })}
          </div>
          <EmptyResumeCard />

        </main>
      </div>
    )
  }
})

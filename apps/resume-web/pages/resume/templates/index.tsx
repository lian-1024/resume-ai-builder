import { Button, Card, CardContent, CardFooter } from '@resume/ui'
import { ButtonHover, ButtonPress } from '~/components/motions/button'

const ResumeCard = () => {
  return (
    <div class="w-full h-full rounded-lg overflow-hidden relative group">
      <ButtonHover class="w-full h-full">
        <img
          src="/images/placeholder.png"
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
        <ButtonPress class="w-full">
          <Button class="w-full rounded-full  dark:text-white">
            创建该模版
          </Button>
        </ButtonPress>
      </div>
    </div>
  )
}

const EmptyResumeCard = () => {
  return (
    <Card class="flex flex-col justify-between">
      <CardContent>content</CardContent>
      <CardFooter>footer</CardFooter>
    </Card>
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
          class="bg-zinc-950 p-6 rounded-lg  m-16 grid grid-flow-row-dense grid-cols-auto-fill gap-x-6 gap-y-10 mt-20 justify-between"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gridAutoRows: '460px'
          }}
        >
          {/* Insert grid items here */}
          {Array.from({ length: 10 }).map((item, index) => {
            return <ResumeCard />
          })}
        </main>
      </div>
    )
  }
})

import { Icon, NuxtLink } from '#components'
import { Button } from '@resume/ui'
import { defineComponent, onMounted, ref } from 'vue'
import { ButtonHover } from '~/components/motions/button'
import ButtonPress from '~/components/motions/button/button-press.vue'
import { InView } from '~/components/motions/view'

const HeroSection = defineComponent({
  setup() {
    const text = ref('简历编辑器,AI 智能简历助手')
    const displayText = ref('')

    onMounted(() => {
      let index = 0
      const forward = () => {
        if (index < text.value.length) {
          displayText.value += text.value.charAt(index)
          index++
          setTimeout(forward, 100)
        } else {
          setTimeout(backward, 1000)
        }
      }

      const backward = () => {
        if (index > 0) {
          displayText.value = displayText.value.slice(0, -1)
          index--
          setTimeout(backward, 100)
        } else {
          setTimeout(forward, 1000)
        }
      }

      forward()
    })

    return () => (
      <section class="py-10 h-screen flex items-center px-10 ">
        <div class="max-w-2xl mx-auto">
          <h1 class="min-h-[10rem] text-5xl lg:text-6xl font-black !leading-[5rem]">
            This <span class="typing">{displayText.value}</span>
          </h1>
          <InView>
            <p class="leading-7 [&:not(:first-child)]:mt-6 text-gray-500 font-sans">
              Create professional resumes effortlessly with AI assistant. Our
              editor provides smart suggestions and real-time optimization to
              help you craft an outstanding resume.
            </p>
          </InView>
          <InView class="my-10">
            <div class="flex gap-6">
              <Button
                variant="outline"
                class="rounded-full p-6"
                size="lg"
              >
                <Icon name="radix-icons:github-logo" />
                <span>Github</span>
              </Button>
              <ButtonPress
                hover={{
                  scale: 1.1
                }}
                class="relative"
              >
                <Button
                  class="rounded-full p-6 dark:text-white "
                  size="lg"
                  asChild
                >
                  <div class="group">
                    <NuxtLink href={'/resume/templates'}>
                      <span class="font-extrabold ">开始创建简历</span>
                    </NuxtLink>
                    <i class="absolute bottom-[-20px] right-[-20px] opacity-100 scale-100 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-0">
                      <Icon
                        name="lucide:mouse-pointer-2"
                        class="fill-black dark:text-white"
                      />
                    </i>
                    <i class="absolute bottom-0 right-0 opacity-0 scale-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                      <Icon name="lucide:mouse-pointer-click" />
                    </i>
                  </div>
                </Button>
              </ButtonPress>
            </div>
          </InView>
        </div>
        <div class="flex-1 flex items-center justify-center">Placeholder</div>
      </section>
    )
  }
})

const FeaturesSection = () => {
  return (
    <section class="flex px-10 py-24 h-[100vh] min-h-[666px] gap-24">
      <div class="border border-zinc-900 flex-1 flex items-center justify-center">
        Placeholder
      </div>
      <div class={' max-w-xl flex flex-col justify-center p-16 items-start'}>
        <InView>
          <h1 class="scroll-m-20 font-sans font-black !leading-[5rem] text-5xl lg:text-6xl tracking-tight underline decoration-blue-500">
            Features
          </h1>
        </InView>
        <InView>
          <p class="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            quia amet tempore adipisci harum dolorum tempora hic, veniam minima
            blanditiis! Vitae, minus tempora ipsam veritatis exercitationem
            commodi cumque labore consectetur!
          </p>
        </InView>
        <InView>
          <Button class="mt-6 rounded-full dark:text-white px-8 font-bold">
            立即开始
          </Button>
        </InView>
      </div>
    </section>
  )
}

const FooterSection = () => {
  return (
    <div class="min-h-[666px] flex flex-col">
      <section class="flex justify-center flex-col items-center">
        <InView>
          <h1 class="scroll-m-20 font-sans font-black !leading-[5rem] text-5xl lg:text-6xl tracking-tight ">
            准备好开始了吗?
          </h1>
        </InView>
        <InView class="mt-20">
          <ButtonPress>
            <ButtonHover>
              <Button
                size="lg"
                class="text-xl  py-6 px-20 font-bold rounded-full dark:text-white"
              >
                <span>点击创建简历</span>
                <Icon name="lucide:mouse-pointer-click" />
              </Button>
            </ButtonHover>
          </ButtonPress>
        </InView>
      </section>
      <footer class="flex items-center justify-center flex-1">
        Hi! 你好,我是lianqq,很高兴认识你
      </footer>
    </div>
  )
}

export default defineComponent({
  setup() {
    return () => (
      <>
        <HeroSection />
        <FeaturesSection />
        <FooterSection />
      </>
    )
  }
})

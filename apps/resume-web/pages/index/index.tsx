// 导入必要的组件和依赖
import {  NuxtImg, NuxtLink ,Icon} from '#components'
import { defineComponent, onMounted, ref } from 'vue'
import { Button } from '@lianqq/resume-ui'
import { ButtonHover } from '~/components/motions/button'
import ButtonPress from '~/components/motions/button/button-press.vue'
import { InView } from '~/components/motions/view'
import { useIframeResume, IframeMessageTypeMap } from '@lianqq/resume-utils'

// 英雄区组件
const HeroSection = defineComponent({
  setup() {
    // 定义打字机效果的文本
    const text = ref('智能简历构建助手')
    const displayText = ref('')
    const iframeRef = ref<HTMLIFrameElement | null>(null)

    const startPrint = () => {
      let index = 0
      // 正向打字效果
      const forward = () => {
        if (index < text.value.length) {
          displayText.value += text.value.charAt(index)
          index++
          setTimeout(forward, 100)
        } else {
          setTimeout(backward, 1000)
        }
      }

      // 反向删除效果
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
    }

    onMounted(() => {
      // 开始打字效果
      startPrint()
    })

    const iframeLoad = () => {
      console.log("iframeLoad", iframeRef.value)
    }

    return () => (
      // 英雄区布局
      <section class="py-10 h-screen flex items-center px-10 ">
        <div class="max-w-2xl mx-auto">
          {/* 主标题带打字机效果 */}
          <h1 class="min-h-[10rem] text-5xl lg:text-6xl font-black !leading-[5rem]">
            This <span class="typing">{displayText.value}</span>
          </h1>
          {/* 副标题描述 */}
          <InView>
            {() => (
              <p class="leading-7 [&:not(:first-child)]:mt-6 text-gray-500 font-sans">
                用人工智能助手轻松创建专业简历。我们的智能编辑器提供实时建议和优化，
                帮助你快速制作一份出色的简历。无需从零开始，让 AI 为你量身定制完美简历。
              </p>
            )}
          </InView>
          {/* 操作按钮组 */}
          <InView class="my-10">
            <div class="flex gap-6">
              {/* Github按钮 */}
              <NuxtLink to={'https://github.com/lianqq/resume-ai-builder'}>
                <Button
                  variant="outline"
                  class="rounded-full p-6"
                  size="lg"
                >
                  <Icon name="radix-icons:github-logo" />
                  <span>Github</span>
                </Button></NuxtLink>
              {/* 开始创建简历按钮 */}
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
                      <span class="font-extrabold" >开始创建简历</span>
                    </NuxtLink>
                    {/* 鼠标指针动画效果 */}
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
        {/* 右侧占位区域 */}
        <div class="flex-1 flex items-center justify-center h-full scale-[0.8]">
          <iframe ref={iframeRef} src="http://localhost:5173/preview" class="w-full h-full " />
        </div>
      </section>
    )
  }
})


const Features = [
  {
    title: '所见即所得',
    description: '告别繁琐的编辑流程，实时预览让简历制作变得轻松自如。智能排版确保专业美观，一键导出让您随时分享成果。让简历制作不再是负担，而是展现个人魅力的愉悦过程。',
    image: '/images/features/feature-1.png',
    button: '开始体验'
  },
  {
    title: "模板选择",
    description: "支持多种模板，为了满足不同行业和职位的需求，后续会添加更多模板，总有一款适合你",
    image: '/images/features/feature-2.png',
    button: '开始体验'
  },
  {
    title: "AI 辅助",
    description: "使用 AI 辅助，让简历制作变得更加轻松。智能排版确保专业美观，一键导出让您随时分享成果。让简历制作不再是负担，而是展现个人魅力的愉悦过程。",
    image: '/images/features/feature-3.png',
    button: '开始体验'
  }
]

// 特性展示区组件
const FeaturesSection = () => {
  return (
    <div>
      {Features.map((feature, index) => <section class={`flex px-10 py-24 h-[100vh] min-h-[666px] gap-24 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
        {/* 左侧占位区域 */}
        <div class="flex-1 flex items-center justify-center">
          <NuxtImg src={feature.image} class="w-full object-cover" />
        </div>
        {/* 右侧特性描述 */}
        <div class={' max-w-xl flex flex-col justify-center p-16 items-start'}>
          <InView>
            <h1 class="scroll-m-20 font-sans font-black !leading-[5rem] text-5xl lg:text-6xl tracking-tight underline decoration-blue-500">
              {feature.title}
            </h1>
          </InView>
          <InView>
            <p class="mt-4">
              {feature.description}
            </p>
          </InView>
          <InView>
            <Button class="mt-6 rounded-full dark:text-white px-8 font-bold">
              {feature.button}
            </Button>
          </InView>
        </div>
      </section>)}
    </div>
  )
}

// 页脚区组件
const FooterSection = () => {
  return (
    <div class="min-h-[666px] flex flex-col overflow-y-auto">
      <section class="flex justify-center flex-col items-center" >
        <InView>
          <h1 class="scroll-m-20 font-sans font-black !leading-[5rem] text-5xl lg:text-6xl tracking-tight ">
            准备好开始创建简历了吗?
          </h1>
        </InView>
        <InView class="mt-20">
          <ButtonPress>
            <ButtonHover>
              <NuxtLink to={'/resume/templates'}>
                <Button
                  size="lg"
                  class="text-xl  py-6 px-20 font-bold rounded-full dark:text-white"
                >
                  <span>点击创建简历</span>
                  <Icon name="lucide:mouse-pointer-click" />
                </Button>
              </NuxtLink>
            </ButtonHover>
          </ButtonPress>
        </InView>
      </section>
      <footer class="flex items-center justify-center flex-1">
        Hi! 你好,我是 Qing-Qian Lian,很高兴认识你
      </footer>
    </div>
  )
}

// 主页面组件
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

import { Icon } from '#components'
import { Button } from '@lianqq/resume-ui'

export default defineComponent({
  name: 'LoginButton',
  setup() {
    const handleLogin = async () => {
      // GitHub OAuth 配置
      const config = useRuntimeConfig()
      const clientId = config.public.githubClientId
      const redirectUri = `${window.location.origin}/api/auth/callback/github`
      const scope = 'read:user user:email'
      
      // 构建 GitHub OAuth URL
      const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`
      
      // 使用 Nuxt 的导航方法
      await navigateTo(githubUrl, { external: true })
    }

    return () => (
      <Button
        size={'sm'}
        variant={'outline'}
        class="cursor-pointer"
      >
        <div onClick={handleLogin}>
          <Icon
            name="lucide:github"
            class="w-4 h-4 mr-2"
          />
          <span>Sign In with GitHub</span>
        </div>
      </Button>
    )
  }
})

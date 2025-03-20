import { Icon, NuxtLink } from '#components'
import {
  Avatar,
  AvatarFallback,
  AvatarImage, Button, ColorModeButton, NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@lianqq/resume-ui'
import { defineComponent } from 'vue'
import LoginButton from '~/components/features/auth/login-button'
import { cn } from '~/lib/utils'

const menuList = [
  {
    label: '首页',
    to: '/',
    icon:"lucide:house"
  },
  {
    label: '模板',
    to: '/resume/templates',
    icon: 'lucide:layout-template'
  },
  // {
  //   label: 'Workbench',
  //   to: '/resume/workbench',
  //   icon: 'lucide:pickaxe'
  // },
  // {
  //   label: 'Builder',
  //   to: '/resume/builder',
  //   icon: 'lucide:square-mouse-pointer'
  // },
  // {
  //   label: 'About',
  //   to: '/about',
  //   icon: 'lucide:smile-plus'
  // }
]

const HeaderMenu = defineComponent({
  setup(props, { slots }) {

    return () => (
      <NavigationMenu>
        <NavigationMenuList class="flex items-center gap-4">
          {menuList.map(({ label, to, icon }) => {
            return (
              <NavigationMenuItem>
                <NuxtLink to={to}>
                  <NavigationMenuLink
                    class={cn(
                      navigationMenuTriggerStyle(),
                      'text-sm font-extrabold px-4 cursor-pointer flex items-center gap-2 transition-all duration-300'
                    )}
                  >
                    {/* <Icon
                      name={icon}
                      class="w-4 h-4"
                    /> */}
                    {/* <Button variant="link" class="dark:text-white"> */}
                    <Icon name={icon} size={16} />
                    {label}
                    {/* </Button> */}
                  </NavigationMenuLink>
                </NuxtLink>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
})

const Logo = defineComponent({
  name: 'Logo',
  setup(props, { slots }) {
    return () => (
      <h1 class="text-lg font-medium dark:text-white text-zinc-950">LOGO</h1>
    )
  }
})

const UserInfo = defineComponent({
  name: 'UserInfo',
  setup(props, { slots }) {
    const userInfo = {
      username: 'lian',
      avatar: 'https://github.com/lian-1024.png'
    }

    const isLogin = false

    return () => (
      <div class="flex items-center gap-2">
        {isLogin ? (
          <>
            <small class="text-sm font-medium leading-none">
              {userInfo.username}
            </small>
            <Avatar>
              <AvatarImage src={userInfo.avatar} />
              <AvatarFallback>
                {userInfo.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    )
  }
})

const LayoutHeader = defineComponent({
  setup(props, { slots }) {
    return () => (
      <header
        class={`h-24 flex items-start justify-between px-4  border-b border-zinc-100 bg-grid pt-4 fixed top-0 left-0 right-0 z-50`}
      >
        <div class="flex items-center gap-4">
          <Logo />
          <HeaderMenu />
        </div>
        <div class="flex items-center gap-6">
          {/* <SelectThemeDropdown /> */}
          <ColorModeButton />
          <UserInfo />
        </div>
      </header>
    )
  }
})

export default defineComponent({
  name: 'DefaultLayout',
  setup(props, { slots }) {
    return () => (
      <div>
        <LayoutHeader />
        <main>{slots.default?.()}</main>
      </div>
    )
  }
})

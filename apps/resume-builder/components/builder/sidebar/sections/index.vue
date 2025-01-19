<script setup lang="ts">
  import { Avatar, AvatarFallback, AvatarImage } from '@lianqq/resume-ui';

  import { Icon } from '#components';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from '@lianqq/resume-ui';

  // This is sample data.
  const data = {
    user: {
      name: 'shadcn',
      email: 'm@example.com',
      avatar: '/avatars/shadcn.jpg'
    },
  }

  const sections = [
    {
      label: '基本信息',
      icon: 'lucide:user-round',
      id: '#profile'
    },
    {
      label: '教育经历',
      icon: 'lucide:book-open',
      id: '#education'
    },
    {
      label: '项目经历',
      icon: 'lucide:briefcase-business',
      id: '#project'
    },
    {
      label: '工作经历',
      icon: 'lucide:briefcase-business',
      id: '#work'
    },
    {
      label: '技能证书',
      icon: 'lucide:briefcase-business',
      id: '#work'
    },
    {
      label: '个人简介',
      icon: 'lucide:user-round',
      id: '#profile'
    }
  ]
</script>

<template>
  <Sidebar collapsible="icon" class="bg-white dark:bg-black">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <SidebarMenuButton
                size="lg"
                class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div
                  class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
                >
                  <Icon
                    mode="svg"
                    name="lucide:house"
                    class="size-4 shrink-0 dark:text-white text-black"
                  />
                </div>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate">首页</span>
                </div>
                <Icon name="lucide:chevron-down" class="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <!-- 右侧下拉菜单内容 -->
            <DropdownMenuContent
              class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-black"
              align="start"
              side="bottom"
              :side-offset="4"
            >
              <DropdownMenuItem>
                <div
                  class="flex size-6 items-center justify-center rounded-sm border"
                >
                  <Icon
                    mode="svg"
                    name="lucide:briefcase-business"
                    class="size-4 shrink-0"
                  />
                </div>
                工作台
                <DropdownMenuShortcut>⌘1</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div
                  class="flex size-6 items-center justify-center rounded-sm border"
                >
                  <Icon
                    mode="svg"
                    name="lucide:house"
                    class="size-4 shrink-0"
                  />
                </div>
                首页
                <DropdownMenuShortcut>⌘2</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <!-- Sections -->
      <SidebarGroup>
        <SidebarGroupLabel>模块</SidebarGroupLabel>
        <SidebarMenu class="gap-4">
          <!-- every item -->
          <SidebarMenuItem
            v-for="item in sections"
            :key="item.id"
          >
            <SidebarMenuButton :tooltip="item.label">
              <Icon
                mode="svg"
                :name="item.icon"
              />
              <!-- <Icon name="" /> -->
              <span>{{ item.label }}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <SidebarMenuButton
                size="lg"
                class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar class="h-8 w-8 rounded-lg">
                  <AvatarImage
                    :src="data.user.avatar"
                    :alt="data.user.name"
                  />
                  <AvatarFallback class="rounded-lg"> CN </AvatarFallback>
                </Avatar>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-semibold">{{
                    data.user.name
                  }}</span>
                  <span class="truncate text-xs">{{ data.user.email }}</span>
                </div>
                <Icon name="lucide:chevron-down" class="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-"
              side="bottom"
              align="end"
              :side-offset="4"
            >
              <DropdownMenuLabel class="p-0 font-normal">
                <div
                  class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"
                >
                  <Avatar class="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src=""
                      :alt="data.user.name"
                    />
                    <AvatarFallback class="rounded-lg"> CN </AvatarFallback>
                  </Avatar>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{
                      data.user.name
                    }}</span>
                    <span class="truncate text-xs">{{ data.user.email }}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Icon name="lucide:sparkles" />
                  Upgrade to Pro
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Icon name="lucide:badge-check" />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="lucide:credit-card" />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="lucide:bell" />
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Icon name="lucide:log-out" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>

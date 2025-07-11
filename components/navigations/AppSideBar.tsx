'use client'

import * as React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { AppSidebarData } from '@/types/navigation'
import { NavMain } from './AppSideBarMain'
import { SideBarCollapseTrigger } from '@/public/svg'

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data: AppSidebarData
}

export function AppSidebar({ data, ...props }: AppSidebarProps) {
  const { toggleSidebar } = useSidebar()

  const { navMain, logoIcon: LogoComponent } = data

  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size='lg'
              className='mt-6 mb-[7rem] data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground !px-2'
            >
              <div className=' flex aspect-square size-8 items-center justify-center rounded-lg'>
                {LogoComponent && <LogoComponent />}
              </div>
              <div className='font-[500] text-[29.93px] text-customPrimary-500 '>
                Pedro<span className='text-customGrey-100'>data</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div
          onClick={toggleSidebar}
          className='cursor-pointer mr-[-2rem] w-fit absolute top-[6rem] right-[1rem]'
        >
          <SideBarCollapseTrigger />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
    </Sidebar>
  )
}

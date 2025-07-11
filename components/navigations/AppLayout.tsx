'use client'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import React, { useMemo } from 'react'
import { LogoIcon } from '../shared/Brand'
import { AppSidebar } from './AppSideBar'
import { MobileNav } from './MobileNavigations'
import { navItems } from '@/data/navigations'

interface NavItem {
  title: string
  url: string
  icon: React.ComponentType<any> // eslint-disable-line @typescript-eslint/no-explicit-any
  count?: number
}
interface SidebarData {
  navMain: readonly NavItem[]
  logoIcon: React.ComponentType<any> // eslint-disable-line @typescript-eslint/no-explicit-any
}
interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const sidebarData: SidebarData = useMemo(() => {
    return {
      navMain: navItems,
      logoIcon: LogoIcon,
    }
  }, [])

  return (
    <SidebarProvider>
      <AppSidebar data={sidebarData} />

      <SidebarInset className=' md:w-[900px] w-full'>
        <div className='py-6 px-4 md:px-12'>
          {children}
        </div>
      </SidebarInset>

      <MobileNav items={sidebarData.navMain} />
    </SidebarProvider>
  )
}

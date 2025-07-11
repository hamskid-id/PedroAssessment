'use client'

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NavItem } from '@/types/navigation'

interface NavMainProps {
  items: readonly NavItem[]
}

export function NavMain({ items }: NavMainProps) {
  const pathname = usePathname()

  const isActive = (url: string) => {
    return pathname === `/d${url}`
  }

  const getHref = (url: string) => {
    return `/d${url}`
  }

  return (
    <SidebarGroup>
      <SidebarMenu className='gap-4 flex flex-col'>
        {items.map((item, index) => {
          const active = isActive(item.url)
          const href = getHref(item.url)
          console.log(active)
          return (
            <SidebarMenuItem key={`${item.url}-${index}`}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                className={cn(
                  'hover:bg-Neutral_15 hover:text-Neutral_white transition-colors duration-200',
                  active && 'border-r-2 border-customPrimary-500'
                )}
                data-active={active}
              >
                <Link href={href} className='flex items-center gap-3 w-full'>
                  {item.icon && (
                    <div className='relative flex-shrink-0'>
                      <item.icon
                        className={cn(
                          'w-[24px], h-[24px] text-customGrey-100',
                          active && 'text-customPrimary-500'
                        )}
                      />
                    </div>
                  )}
                  <span
                    className={cn(
                      'text-[16px] font-[500] text-customGrey-100 transition-colors duration-200',
                      active && 'text-customPrimary-500'
                    )}
                  >
                    {item.title}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

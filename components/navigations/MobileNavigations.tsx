'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NavItem } from '@/types/navigation'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  items: readonly NavItem[]
}

export const MobileNav = ({ items }: MobileNavProps) => {
  const pathname = usePathname()

  const isActive = (url: string) => {
    return pathname === `/d${url}`
  }

  const getHref = (url: string) => {
    return `/d${url}`
  }

  return (
    <div className='md:hidden block'>
      <nav
        className='fixed bg-customGrey-800 z-40 bottom-[2rem] left-[14px] right-[14px] py-[9px] px-[14px] flex justify-between items-center gap-2 rounded-[103px]'
        aria-label='Mobile navigation'
      >
        {items.map((item, index) => {
          const href = getHref(item.url)
          const active = isActive(item.url)

          return (
            <Link
              key={`${item.url}-${index}`}
              href={href}
              className='flex flex-col items-center gap-1 p-2 rounded-lg transition-colors hover:bg-white/10'
              aria-label={item.title}
            >
              <div className='relative'>
                <item.icon
                  className={cn(
                    'w-[24px], h-[24px] text-customGrey-100',
                    active && 'text-customPrimary-500'
                  )}
                />
              </div>
              <span className='sr-only'>{item.title}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

'use client'

import { cn } from '@/lib/utils'
import { MoonSvg, ShineSvg } from '@/public/svg'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const isLight = theme === 'light'

  const toggleTheme = () => {
    setTheme(isLight ? 'dark' : 'light')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'w-[72px] h-[36px] rounded-full bg-customPrimary-800 flex items-center justify-center relative',
        isLight && ' bg-customPrimary-500'
      )}
    >
      <div className='absolute inset-0 flex items-center justify-between px-2 z-[50]'>
        <MoonSvg />
        <ShineSvg />
      </div>
      <span
        className={`absolute left-1 top-1 w-[28px] h-[28px] bg-white rounded-full transform transition-transform duration-300 ${
          theme === 'light' ? 'translate-x-[36px]' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

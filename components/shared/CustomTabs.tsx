'use client'

import * as React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

interface CustomTabsProps {
  defaultValue: string
  options: {
    value: string
    label: string
    content: React.ReactNode
  }[]
  onValueChange?: (value: string) => void
  className?: string
  tabsListClassName?: string
  triggerClassName?: string
  contentClassName?: string
}

export function CustomTabs({
  defaultValue,
  options,
  onValueChange,
  className,
  tabsListClassName,
  triggerClassName,
  contentClassName,
}: CustomTabsProps) {
  return (
    <Tabs
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      className={cn('w-full', className)}
    >
      <TabsList
        className={cn(
          'w-full flex p-[2px] rounded-lg bg-customGrey-800 border border-customGrey-600 h-auto overflow-auto max-w-full',
          tabsListClassName
        )}
      >
        {options.map((option) => (
          <TabsTrigger
            key={option.value}
            value={option.value}
            className={cn(
              'h-9 rounded-[8px] text-sm data-[state=active]:bg-customGrey-500',
              'data-[state=active]:text-customGrey-25 data-[state=inactive]:text-customGrey-300',
              'transition-colors focus-visible:outline-none focus-visible:ring-0',
              triggerClassName
            )}
          >
            {option.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {options.map((option) => (
        <TabsContent
          key={option.value}
          value={option.value}
          className={cn('mt-3', contentClassName)}
        >
          {option.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

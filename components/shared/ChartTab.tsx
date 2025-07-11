// components/Tabs/Tabs.tsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TabProps {
  headers: string[]
  children: React.ReactNode[]
  className?: string
  headerContainerClassName?: string
  contentContainerClassName?: string
}

const ChartTabs: React.FC<TabProps> = ({
  headers,
  children,
  className = '',
  headerContainerClassName = '',
  contentContainerClassName = '',
}) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`flex-1 ${contentContainerClassName}`}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='h-full'
          >
            {children[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div
        className={`relative mt-4 ${headerContainerClassName}`}
        role='tablist'
        aria-label='Tabs'
      >
        <div className='absolute top-0 left-0 right-0 h-px bg-customGrey-600' />

        <div className='flex -mt-px'>
          {headers.map((header, index) => (
            <button
              key={index}
              role='tab'
              aria-selected={index === activeTab}
              aria-controls={`tabpanel-${index}`}
              id={`tab-${index}`}
              className={`
                relative
                px-3 pt-2
                text-[16px] font-[500]
                h-7
                flex items-center justify-center
                transition-all duration-200
                ${
                  index === activeTab
                    ? 'text-customPrimary-500'
                    : 'text-customGrey-300 hover:text-customGrey-400'
                }
                ${index !== headers.length - 1 ? 'mr-2' : ''}
              `}
              onClick={() => setActiveTab(index)}
            >
              {header}
              {index === activeTab && (
                <motion.div
                  className='absolute top-0 left-0 right-0 h-0.5 bg-teal-600'
                  layoutId='activeTabIndicator'
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChartTabs

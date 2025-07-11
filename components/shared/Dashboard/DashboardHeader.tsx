'use client'

import { NotificationButton, SearchButton, SetAlertButton } from '@/public/svg'
import { ThemeToggler } from '../../dashboard/Home/ThemeToggler'
import { useState } from 'react'
import { AlertModal } from './AlertModal'
import { NoticationModal } from './NotificationModal'

interface DashboardHeaderProps {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  showDate?: boolean
  showSearch?: boolean
  showAlerts?: boolean
  showNotifications?: boolean
  showThemeToggle?: boolean
}

export const DashboardHeader = ({
  title = <DefaultTitle />,
  subtitle,
  showDate = true,
  showSearch = true,
  showAlerts = true,
  showNotifications = true,
  showThemeToggle = true,
}: DashboardHeaderProps) => {
  const [openAlertModal, setOpenAlertModal] = useState(false)
  const [openNotificationModal, setOpenNotificationModal] = useState(false)

  return (
    <>
      <div className='flex justify-between md:flex-row flex-col-reverse gap-8'>
        <div>
          {title}
          {showDate && (subtitle || <DefaultSubtitle />)}
        </div>

        <div className='flex gap-[12px] items-center ms-auto'>
          {showSearch && <SearchButton />}
          {showAlerts && (
            <div
              onClick={() => setOpenAlertModal(true)}
              className='cursor-pointer'
            >
              <SetAlertButton />
            </div>
          )}
          {showNotifications && (
            <div
              onClick={() => setOpenNotificationModal(true)}
              className='cursor-pointer'
            >
              <NotificationButton />
            </div>
          )}
          {showThemeToggle && <ThemeToggler />}
        </div>
      </div>

      {openAlertModal && (
        <AlertModal open={openAlertModal} setOpen={setOpenAlertModal} />
      )}
      {openNotificationModal && (
        <NoticationModal
          open={openNotificationModal}
          setOpen={setOpenNotificationModal}
        />
      )}
    </>
  )
}

const DefaultTitle = ({ userName = 'John' }: { userName?: string }) => (
  <h1 className='text-customGrey-800 font-[500] text-[24px] dark:text-white'>
    Hello {userName}!
  </h1>
)

const DefaultSubtitle = () => (
  <p className='text-[16px] font-[400] text-customGrey-300'>
    {new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}
  </p>
)

import { NotificationItemProps } from '@/types/notification'
import { NotificationIcon } from './NotificationIcon'
import { NotificationContent } from './NotificationContent'

export const NotificationItem = ({ notification, isLastItem = false }: NotificationItemProps & { isLastItem?: boolean }) => {
  const displayName = notification?.user ? notification.user.name : notification.title

  return (
    <div className='flex items-start pb-4 relative'>
        <div className='flex flex-col items-center'>
          <NotificationIcon
            type={notification.type}
            isOnline={notification.user?.isOnline}
            avatar={notification.user?.avatar}
          />
          {!isLastItem && (
            <div className='absolute z-30 top-0 bottom-0 left-[1.5rem] transform -translate-x-1/2 w-px h-full bg-customGrey-600' />
          )}
        </div>
      <div className='flex-1 ml-3 z-50'>
        <div className='flex gap-2 items-center'>
          <h3 className='font-[500] text-[14px] text-customGrey-25'>
            {displayName}
          </h3>
          <span className='text-[400] text-[12px] text-customGrey-300'>
            {notification.time}
          </span>
        </div>

        <NotificationContent notification={notification} />
      </div>
    </div>
  )
}

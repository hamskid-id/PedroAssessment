import { CustomImage } from '@/components/shared/Image'
import { NotificationType } from '@/types/notification'
import { AlertSvg, ReportAlertSvg } from '@/public/svg'

interface NotificationIconProps {
  type: NotificationType
  isOnline?: boolean
  avatar?: string
}

export const NotificationIcon = ({
  type,
  isOnline,
  avatar,
}: NotificationIconProps) => {
  if (avatar) {
    return (
      <div className='relative z-40 bg-customGrey-800'>
        <CustomImage
          src={avatar}
          style='w-[48px] h-[48px] rounded-full'
          imgStyle='object-none rounded-full'
        />
        {isOnline && (
          <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white'></div>
        )}
      </div>
    )
  }

  const getIcon = () => {
    switch (type) {
      case 'price-drop':
        return <AlertSvg />
      case 'weekly-report':
        return <ReportAlertSvg />
      default:
        return <AlertSvg />
    }
  }

  return <div className='relative z-40 bg-customGrey-800'>{getIcon()}</div>
}

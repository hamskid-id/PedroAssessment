import { NotificationItem as INotificationItem } from '@/types/notification'
import { NotificationItem } from './NotificationItem'

interface NotificationListProps {
  notifications: INotificationItem[]
}

export const NotificationList = ({ notifications }: NotificationListProps) => {
  return (
    <div>
      {notifications.map((notification, index) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          isLastItem={index == notifications?.length - 1}
        />
      ))}
    </div>
  )
}

export interface User {
  name: string
  avatar?: string
  isOnline?: boolean
}

export type NotificationType =
  | 'all'
  | 'invite'
  | 'comment'
  | 'price-drop'
  | 'mentioned'
  | 'weekly-report'

export interface NotificationItem {
  id: string
  type: NotificationType
  title: string
  content: string
  time: string
  user?: {
    name: string
    avatar: string
    isOnline: boolean
  }
  highlightedText?: string
  commentText?: string
}

export interface NotificationItemProps {
  notification: NotificationItem
}



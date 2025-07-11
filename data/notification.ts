import { NotificationType, NotificationItem } from '@/types/notification'
import avatar from '@/public/Avatar.svg'

export const mockNotifications: Record<NotificationType, NotificationItem[]> = {
  all: [
    {
      id: '1',
      type: 'invite',
      title: 'New invitation',
      content: "thisLa'organisation",
      time: '2 mins ago',
      user: {
        name: 'David Osapolo',
        avatar: avatar,
        isOnline: true,
      },
      highlightedText: 'Aliyu Tosin',
    },
    {
      id: '2',
      type: 'comment',
      title: 'New comment',
      content: '',
      time: '15 mins ago',
      user: {
        name: 'Jane Smith',
        avatar: avatar,
        isOnline: true,
      },
      highlightedText: 'PMS Price Analysis',
      commentText:
        'The price seems to be fluctuating more than usual this week.',
    },
    {
      id: '3',
      type: 'price-drop',
      title: 'Price Drop alert',
      content:
        'The price of Premium Motor Spirit (PMS) has dropped to ₦495 per litre. This is a 3% decrease from last week.',
      time: '1 hour ago',
      highlightedText: 'PMS Falls Below ₦500/Liter',
    },
    {
      id: '4',
      type: 'mentioned',
      title: 'You were mentioned',
      content: '',
      time: '3 hours ago',
      user: {
        name: 'Mike Johnson',
        avatar: avatar,
        isOnline: false,
      },
      highlightedText: 'PMS Price Analysis',
      commentText:
        '@john Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id.',
    },
    {
      id: '5',
      type: 'weekly-report',
      title: 'New report available',
      content: 'The latest market trends and analysis for your review.',
      time: '1 day ago',
      highlightedText: 'PMS Market Analysis Now Available',
    },
  ],
  invite: [
    {
      id: '1',
      type: 'invite',
      title: 'New invitation',
      content: "thisLa'organisation",
      time: '2 mins ago',
      user: {
        name: 'David Osapolo',
        avatar: avatar,
        isOnline: true,
      },
      highlightedText: 'Aliyu Tosin',
    },
    {
      id: '6',
      type: 'invite',
      title: 'New invitation',
      content: 'Project Team Alpha',
      time: '1 day ago',
      user: {
        name: 'Sarah Connor',
        avatar: avatar,
        isOnline: false,
      },
      highlightedText: 'John Doe',
    },
  ],
  comment: [
    {
      id: '2',
      type: 'comment',
      title: 'New comment',
      content: 'The price seems to be fluctuating more than usual this week.',
      time: '15 mins ago',
      user: {
        name: 'Jane Smith',
        avatar: avatar,
        isOnline: true,
      },
      highlightedText: 'PMS Price Analysis',
    },
    {
      id: '7',
      type: 'comment',
      title: 'Reply to your comment',
      content:
        'I agree with your assessment about the current market conditions.',
      time: '45 mins ago',
      user: {
        name: 'Alex Morgan',
        avatar: avatar,
        isOnline: true,
      },
      highlightedText: 'Market Trends Discussion',
      commentText:
        'I agree with your assessment about the current market conditions.',
    },
  ],
  'price-drop': [
    {
      id: '3',
      type: 'price-drop',
      title: 'Price alert',
      content:
        'The price of Premium Motor Spirit (PMS) has dropped to ₦495 per litre. This is a 3% decrease from last week.',
      time: '1 hour ago',
      highlightedText: 'PMS Falls Below ₦500/Liter',
    },
    {
      id: '8',
      type: 'price-drop',
      title: 'Price alert',
      content:
        'Diesel price has dropped to ₦700 per litre. This is a 5% decrease from last month.',
      time: '2 days ago',
      highlightedText: 'Diesel Price Drops Significantly',
    },
  ],
  mentioned: [
    {
      id: '4',
      type: 'mentioned',
      title: 'You were mentioned',
      content: '',
      time: '3 hours ago',
      user: {
        name: 'Mike Johnson',
        avatar: avatar,
        isOnline: false,
      },
      highlightedText: 'PMS Price Analysis',
      commentText:
        '@john Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id.',
    },
    {
      id: '9',
      type: 'mentioned',
      title: 'You were mentioned',
      content: '',
      time: '5 hours ago',
      user: {
        name: 'Emily Davis',
        avatar: avatar,
        isOnline: true,
      },
      highlightedText: 'Team Meeting Notes',
      commentText: '@john Can you review these notes before our next meeting?',
    },
  ],
  'weekly-report': [
    {
      id: '5',
      type: 'weekly-report',
      title: 'New report available',
      content: 'The latest market trends and analysis for your review.',
      time: '1 day ago',
      highlightedText: 'PMS Market Analysis Now Available',
    },
    {
      id: '10',
      type: 'weekly-report',
      title: 'New report available',
      content: 'Regional market comparisons and projections.',
      time: '3 days ago',
      highlightedText: 'Regional Market Report Published',
    },
  ],
}

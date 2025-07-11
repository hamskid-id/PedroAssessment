import { CustomTabs } from '@/components/shared/CustomTabs'
import { NotificationList } from './NotificationList'
import { mockNotifications } from '@/data/notification'
import { NotificationButtons } from './NotificationButtons'

interface INotificationLayout {
  setOpen?: (open: boolean) => void
}

const triggerOptions = [
  {
    value: 'all',
    label: 'All',
    content: <NotificationList notifications={mockNotifications.all} />,
  },
  {
    value: 'comment',
    label: 'Comments',
    content: <NotificationList notifications={mockNotifications.comment} />,
  },
  {
    value: 'mentioned',
    label: 'Mentioned',
    content: <NotificationList notifications={mockNotifications.mentioned} />,
  },
]

export const NotificationLayout = ({ setOpen }: INotificationLayout) => {
  return (
    <div className='flex flex-col h-full w-full relative'>
      <div className='flex-1 overflow-y-auto space-y-4 max-h-full '>
        <CustomTabs
          defaultValue={triggerOptions[0].value}
          options={triggerOptions}
        />
      </div>
      <NotificationButtons setOpen={setOpen} />
    </div>
  )
}

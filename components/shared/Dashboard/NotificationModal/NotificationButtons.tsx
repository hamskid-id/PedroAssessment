'use client'

import { Button } from '@/components/ui/button'
import { CheckCheck } from 'lucide-react'

interface INotificationButtonsProps {
  setOpen?: (open: boolean) => void
}

export const NotificationButtons = ({ setOpen }: INotificationButtonsProps) => {
  return (
    <div className='pt-[24px] border-customGrey-600 grid grid-cols-2 justify-end gap-x-[12px]'>
      <Button
        variant='outline'
        type='button'
        onClick={() => setOpen?.(false)}
        className='h-[44px] px-6 rounded-[36px] text-customGrey-25 border-customGrey-500 !bg-customGrey-600 text-[16px] font-[500]'
      >
        Cancel
      </Button>
      <Button
        type='submit'
        className='h-[44px] px-6 rounded-[36px] text-customGrey-25 bg-customPrimary-500 text-[16px] font-[500]'
      >
        <span>
          <CheckCheck className='w-6 text-customGrey-25' />
        </span>
        Mark all as read
      </Button>
    </div>
  )
}

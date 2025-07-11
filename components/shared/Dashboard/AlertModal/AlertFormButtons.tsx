'use client'

import { Button } from '@/components/ui/button'

interface IAlertFormButtonsProps {
  setOpen?: (open: boolean) => void
}

export const AlertFormButtons = ({ setOpen }: IAlertFormButtonsProps) => {
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
        Create Alert
      </Button>
    </div>
  )
}

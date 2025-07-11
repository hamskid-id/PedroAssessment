'use client'

import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { AlertFormData } from '@/types/alert'

interface ExpirationDatePickerProps {
  formData: AlertFormData
  setFormData: (data: AlertFormData) => void
}

export const ExpirationDatePicker = ({ formData, setFormData }: ExpirationDatePickerProps) => {
  return (
    <div className='flex flex-wrap items-center justify-between gap-[6px]'>
      <label className='text-[14px] font-[500] text-customGrey-300'>
        Expiration
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            className={cn(
              ' justify-start text-left font-normal h-[44px] border-none !bg-customGrey-800 md:w-[290px] w-full !px-0 text-white',
              !formData.expiration && 'text-white'
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {formData.expiration ? (
              format(formData.expiration, 'PPP')
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className='w-auto overflow-hidden p-0'
          align='start'
        >
          <Calendar
            mode='single'
            captionLayout='dropdown'
            selected={formData.expiration}
            onSelect={(date) =>
              date && setFormData({ ...formData, expiration: date })
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
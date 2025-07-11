'use client'

import { Input } from '@/components/ui/input'
import { AlertFormData } from '@/types/alert'
import { AlertPreview } from './AlertPreview'

interface AlertNameInputProps {
  formData: AlertFormData
  setFormData: (data: AlertFormData) => void
}

export const AlertNameInput = ({
  formData,
  setFormData,
}: AlertNameInputProps) => {
  return (
    <div className='flex flex-wrap items-start justify-between gap-[6px]'>
      <label className='text-sm font-medium text-customGrey-300'>
        Alert name
      </label>
      <div className='flex flex-col gap-3 md:w-[290px] w-full'>
        <Input
          placeholder='Name your alert'
          value={formData.alertName}
          onChange={(e) =>
            setFormData({ ...formData, alertName: e.target.value })
          }
          className='w-full !h-[44px] rounded-[36px] border-customGrey-500 !bg-customGrey-600'
        />
        <AlertPreview formData={formData} />
      </div>
    </div>
  )
}

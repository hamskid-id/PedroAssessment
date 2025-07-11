'use client'

import { CustomTabs } from '@/components/shared/CustomTabs'
import { AlertFormData } from '@/types/alert'

interface AlertTriggerProps {
  formData: {
    triggerType: 'once' | 'repeat'
  }
  setFormData: React.Dispatch<React.SetStateAction<AlertFormData>>
}
const triggerOptions = [
  {
    value: 'once',
    label: 'Only Once',
    content: (
      <p className='text-sm text-customGrey-300'>
        The alert is triggered only once and will not be repeated
      </p>
    ),
  },
  {
    value: 'repeat',
    label: 'Every Time',
    content: (
      <p className='text-sm text-customGrey-300'>
        The alert will trigger every time the condition is met
      </p>
    ),
  },
]

export const AlertTrigger = ({ formData, setFormData }: AlertTriggerProps) => (
  <div className='flex flex-wrap items-start justify-between gap-[6px]'>
    <label className='text-[14px] font-[500] text-customGrey-300'>
      Trigger
    </label>
    <div className='flex flex-col gap-3 md:w-[290px] w-full'>
      <CustomTabs
    //   triggerClassName="sm:w-[140px] w-[120px]"
        defaultValue={formData.triggerType}
        options={triggerOptions}
        onValueChange={(value) =>
          setFormData((prev) => ({
            ...prev,
            triggerType: value as 'once' | 'repeat',
          }))
        }
      />
    </div>
  </div>
)

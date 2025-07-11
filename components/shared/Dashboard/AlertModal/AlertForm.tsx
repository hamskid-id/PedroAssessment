'use client'

import { useState } from 'react'
import { AlertCondition } from './AlertCondition'
import { AlertTrigger } from './AlertTrigger'
import { AlertFormData } from '@/types/alert'
import { ExpirationDatePicker } from './ExpirationDatePicker'
import { AlertNameInput } from './AlertNameInput'
import { AlertFormButtons } from './AlertFormButtons'

interface AlertFormProps {
  setOpen?: (open: boolean) => void
}

export const AlertForm = ({ setOpen }: AlertFormProps) => {
  const [formData, setFormData] = useState<AlertFormData>({
    product: 'PMS',
    condition: 'Crossing up',
    price: '',
    triggerType: 'once',
    expiration: new Date(),
    alertName: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOpen?.(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col h-full w-full relative'
    >
      <div className='flex-1 overflow-y-auto space-y-4'>
        <AlertCondition formData={formData} setFormData={setFormData} />
        <hr className='text-customGrey-600' />
        <AlertTrigger formData={formData} setFormData={setFormData} />
        <ExpirationDatePicker formData={formData} setFormData={setFormData} />
        <hr className='text-customGrey-600' />
        <AlertNameInput formData={formData} setFormData={setFormData} />
      </div>
      <AlertFormButtons setOpen={setOpen} />
    </form>
  )
}

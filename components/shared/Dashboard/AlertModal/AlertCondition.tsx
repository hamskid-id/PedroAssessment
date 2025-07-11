'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { AlertFormData, ConditionType, ProductType } from '@/types/alert'

interface AlertConditionProps {
  formData: {
    product: string
    condition: string
    price: string
  }
  setFormData: React.Dispatch<React.SetStateAction<AlertFormData>>
}

export const AlertCondition = ({
  formData,
  setFormData,
}: AlertConditionProps) => (
  <div className='space-y-4'>
    <div className='flex flex-wrap items-start justify-between gap-[6px]'>
      <label className='text-[14px] font-[500] text-customGrey-300'>
        Condition
      </label>
      <div className='flex gap-3 flex-col justify-end items-end'>
        <Select
          value={formData.product}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, product: value as ProductType }))
          }
        >
          <SelectTrigger className='md:w-[290px] w-full !h-[44px] rounded-[36px] border-customGrey-500 !bg-customGrey-600'>
            <SelectValue placeholder='Product' />
          </SelectTrigger>
          <SelectContent className='bg-customGrey-800 border-customGrey-600'>
            <SelectItem value='PMS'>PMS</SelectItem>
            <SelectItem value='AGO'>AGO</SelectItem>
            <SelectItem value='ICE'>ICE</SelectItem>
            <SelectItem value='DPK'>DPK</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={formData.condition}
          onValueChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              condition: value as ConditionType,
            }))
          }
        >
          <SelectTrigger className='md:w-[290px] w-full !h-[44px] rounded-[36px] border-customGrey-500 !bg-customGrey-600'>
            <SelectValue placeholder='Condition' />
          </SelectTrigger>
          <SelectContent className='bg-customGrey-800 border-customGrey-600'>
            <SelectItem value='Crossing up'>Crossing up</SelectItem>
            <SelectItem value='Crossing down'>Crossing down</SelectItem>
          </SelectContent>
        </Select>

        <div className='flex flex-wrap gap-3 items-center'>
          <span className='text-customGrey-300 text-[14px] font-[400]'>
            Price:
          </span>
          <Input
            type='number'
            value={formData.price}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, price: e.target.value }))
            }
            className='flex-grow h-[44px] rounded-[36px] pl-12 border-customGrey-500 !bg-customGrey-600'
          />
        </div>
      </div>
    </div>
  </div>
)

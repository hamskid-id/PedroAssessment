'use client'

import { DeportSvg} from '@/public/svg'

export const DepotHeader = () => (
  <div className='flex items-center text-[12px] font-[500] text-white gap-2 mb-4 px-4 pt-4'>
    <DeportSvg />
    <p className='text-[12px] font-[500] text-white'>Depot</p>
  </div>
)

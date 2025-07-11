'use client'

import { AreaChartField } from '@/components/shared/AreaChart'
import { DepotHeader } from './DepotHeader'
import { CompanyProductInfo } from '@/types/chart'

interface CompanyTabContentProps {
  companies: CompanyProductInfo[]
}

export const CompanyTabContent = ({ companies }: CompanyTabContentProps) => (
  <div className='h-full'>
    <DepotHeader />
    {companies.map((company, index) => (
      <div
        key={`company-${index}`}
        className='px-4 py-3 border-b border-customGrey-600 last:border-b-0'
      >
        <div className='grid md:grid-cols-3 grid-cols-2'>
          <div>
            <div className='flex gap-2 items-center text-[14px] font-[600] text-white'>
              {company.company}
            </div>
            <p className='text-[12px] font-[500] text-customGrey-300'>
              {company.location}
            </p>
          </div>
          <div className='w-full md:flex hidden'>
            <AreaChartField
              data={company.data}
              trendDirection={company.trendDirection}
            />
          </div>
          <div className='flex justify-end'>
            <div>
              <p className='text-[13px] font-[600]'>
                N{company.currentPrice.toFixed(2)}
              </p>
              <p
                className={`text-[12px] font-[500] ${
                  company.trendDirection === 'up'
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {company.priceChange > 0 ? '+' : ''}
                {company.priceChange.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

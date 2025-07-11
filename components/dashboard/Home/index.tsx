'use client'

import React from 'react'
import { ReportWeekCard } from './ReportWeekCard'
import { Flight } from './Flight'
import { ProductCard } from './ProductChart/ProductCard'
import ChartTabs from '@/components/shared/ChartTab'
import {
  productData,
  flightData,
  topAirports,
  reportsData,
  companyData,
} from '@/data/dashboard'
import { DashboardHeader } from '../../shared/Dashboard/DashboardHeader'
import { CompanyTabContent } from './CompanyChart/CompanyTabContent'
import { IceWidget } from './IceWidget'

const DashboardHome = () => {
  const tabHeaders = ['PMS', 'AGO', 'PDK', 'ICE', 'LPG']

  return (
    <div className='md:mt-10 mt-0'>
      <DashboardHeader />
      <hr className='border-customGrey-600 my-8' />

      <div className='grid lg:grid-cols-2 gap-[24px] grid-cols-1'>
        <div className='rounded-[24px] bg-customGrey-800 divide-y divide-[#36353A] py-1 flex flex-col justify-content-between'>
          {productData.map((product, index) => (
            <ProductCard key={`product-${index}`} product={product} />
          ))}
        </div>
        <div className='rounded-[24px] bg-customGrey-800 py-1 h-full'>
          <ChartTabs
            headers={tabHeaders}
            headerContainerClassName='px-2 pb-4'
            contentContainerClassName='h-full'
          >
            {tabHeaders.map((_, index) => (
              <CompanyTabContent key={`tab-${index}`} companies={companyData} />
            ))}
          </ChartTabs>
        </div>
        <div>
          <div className='grid md:grid-cols-2 gap-[24px] grid-cols-1 h-full'>
            <ReportWeekCard weekNumber={31} reports={reportsData} />
            <IceWidget />
          </div>
        </div>
        <Flight
          totalFlights={284774}
          flightData={flightData}
          topAirports={topAirports}
        />
      </div>
    </div>
  )
}

export default DashboardHome

'use client'

import { FlightStatsHeader } from './FlightStatsHeader'
import { FlightCharts } from './FlightCharts'
import { TopAirportsList } from './TopAirportsList'
import { FlightDataType, AirportData } from '@/types/chart'

interface FlightProps {
  totalFlights?: number
  flightData: FlightDataType
  topAirports?: AirportData[]
}

export const Flight = ({
  totalFlights = 284774,
  flightData,
  topAirports = [],
}: FlightProps) => {
  return (
    <div className='rounded-[24px] md:flex-row flex-col md:gap-0 gap-[24px] flex'>
      <div className='md:w-[60%] w-full bg-customGrey-800 py-6 h-full rounded-l-[24px] md:rounded-r-none rounded-r-[24px]'>
        <FlightStatsHeader totalFlights={totalFlights} />
        <FlightCharts flightData={flightData} />
      </div>
      <div className='md:w-[40%] w-full bg-customGrey-600 h-full py-6 px-4 rounded-r-[24px] md:rounded-l-none rounded-l-[24px]'>
        <TopAirportsList airports={topAirports} />
      </div>
    </div>
  )
}

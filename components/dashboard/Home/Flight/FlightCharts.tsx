'use client'

import { StackedBarChart } from '@/components/shared/BarChart'
import ChartTabs from '@/components/shared/ChartTab'
import { FlightDataType } from '@/types/chart'

interface FlightChartsProps {
  flightData: FlightDataType
}

export const FlightCharts = ({ flightData }: FlightChartsProps) => (
  <ChartTabs
    headers={['International', 'Domestic']}
    headerContainerClassName='px-4'
  >
    <div className='px-4'>
      <StackedBarChart data={flightData.international} />
    </div>
    <div className='px-4'>
      <StackedBarChart data={flightData.domestic} />
    </div>
  </ChartTabs>
)

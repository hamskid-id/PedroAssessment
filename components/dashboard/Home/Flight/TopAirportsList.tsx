'use client'

interface AirportData {
  airport: string
  flightCount: number
}

interface TopAirportsListProps {
  airports: AirportData[]
}

export const TopAirportsList = ({ airports }: TopAirportsListProps) => (
  <div className='flex flex-col justify-between gap-3 md:min-h-full min-h-[290px]'>
    {airports.map((airport, index) => (
      <div key={index} className='flex items-baseline w-full'>
        <span className='text-customGrey-25 font-[500] text-[12px] mr-2 truncate flex-1 min-w-0 max-w-[calc(100% - 70px)]'>
          {airport.airport}
        </span>
        <span className='text-customGrey-200 font-[400] text-[12px] whitespace-nowrap w-[70px]'>
          {airport.flightCount.toLocaleString()} flights
        </span>
      </div>
    ))}
  </div>
)

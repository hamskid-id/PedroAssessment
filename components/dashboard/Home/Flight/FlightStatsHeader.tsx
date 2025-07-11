'use client';

import { PlaneSvg } from '@/public/svg';

interface FlightStatsHeaderProps {
  totalFlights: number;
}

export const FlightStatsHeader = ({ totalFlights }: FlightStatsHeaderProps) => (
  <div className="flex items-center text-[12px] font-[500] text-white gap-2 mb-4 px-4">
    <PlaneSvg />
    <div className="flex items-center gap-2">
      <span className="text-[20px] font-[500] text-white">
        {totalFlights.toLocaleString()}
      </span>
      <span className="text-[12px] font-[400] text-customGrey-300">
        Flights
      </span>
    </div>
  </div>
);
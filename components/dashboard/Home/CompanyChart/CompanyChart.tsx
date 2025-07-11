'use client';

import { AreaChartField } from '@/components/shared/AreaChart';
import { ChartData } from '@/types/chart';

interface CompanyChartProps {
  data: ChartData;
  trendDirection: 'up' | 'down';
}

export const CompanyChart = ({ data, trendDirection }: CompanyChartProps) => (
  <div className="mt-4">
    <AreaChartField 
      data={data} 
      trendDirection={trendDirection} 
      height={80}
    />
  </div>
);
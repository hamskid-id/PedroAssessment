'use client';

import { IncrementSvg, DecrementSvg } from '@/public/svg';

interface ProductTrendIndicatorProps {
  trendDirection: 'up' | 'down';
  abbreviation: string;
}

export const ProductTrendIndicator = ({ 
  trendDirection, 
  abbreviation 
}: ProductTrendIndicatorProps) => {
  const Icon = trendDirection === 'up' ? IncrementSvg : DecrementSvg;
  
  return (
    <div className="flex gap-2 items-center text-[14px] font-[600] text-white">
      <Icon /> {abbreviation}
    </div>
  );
};
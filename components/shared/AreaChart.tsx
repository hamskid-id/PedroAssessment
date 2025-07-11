'use client'

import { ChartData, TrendDirection } from '@/types/chart'
import React from 'react'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts'

interface AreaChartFieldProps {
  data: ChartData
  trendDirection: TrendDirection
  height?: number
}

export const AreaChartField = ({
  data,
  trendDirection,
  height = 56,
}: AreaChartFieldProps) => {
  const upColor = '#34C85A'
  const downColor = '#F04438'

  const strokeColor = trendDirection === 'up' ? upColor : downColor
  const gradientId = `colorValue-${trendDirection}`

  return (
    <div className={`w-full h-[${height}px]`}>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id={gradientId} x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='48%'
                stopColor={trendDirection === 'up' ? '#34C85A94' : '#FD3B318F'}
                stopOpacity={0.48}
              />
              <stop
                offset='100%'
                stopColor={trendDirection === 'up' ? '#34C85A00' : '#FD3B3100'}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' hide={true} />
          <YAxis hide={true} />
          <Area
            type='monotone'
            dataKey='value'
            stroke={strokeColor}
            strokeWidth={4}
            fill={`url(#${gradientId})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import { StackedBarData } from '@/types/chart';

interface StackedBarChartProps {
  data: StackedBarData[];
  height?: number;
}

export const StackedBarChart = ({ 
  data, 
  height = 154 
}: StackedBarChartProps) => {
  return (
    <div style={{ height: `${height}px` }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barGap={5}
          barCategoryGap={60}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E7EB"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#A3A3A3', fontSize: 12 }}
          />
          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#A3A3A3', fontSize: 12 }}
          />

          {/* First set of stacked bars */}
          <Bar
            dataKey="bar1.pv"
            stackId="bar1"
            fill="#F79009"
            radius={[0, 0, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="bar1.amt"
            stackId="bar1"
            fill="#26A69A"
            radius={[0, 0, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="bar1.uv"
            stackId="bar1"
            fill="#1E88E5"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />

          {/* Second set of stacked bars */}
          <Bar
            dataKey="bar2.pv"
            stackId="bar2"
            fill="#F79009"
            radius={[0, 0, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="bar2.amt"
            stackId="bar2"
            fill="#26A69A"
            radius={[0, 0, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="bar2.uv"
            stackId="bar2"
            fill="#1E88E5"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
import { ChartData, TrendDirection } from './chart'

export type ProductInfo = {
  name: string
  abbreviation: string
  fullName: string
  currentPrice: number
  priceChange: number
  trendDirection: TrendDirection
  data: ChartData
}

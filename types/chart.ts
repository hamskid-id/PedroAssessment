export interface AirportData {
  airport: string
  flightCount: number
}

export type ChartDataPoint = {
  name: string
  value: number
}

export type ChartData = ChartDataPoint[]

export type TrendDirection = 'up' | 'down'

export type ProductInfo = {
  name: string
  abbreviation: string
  fullName: string
  currentPrice: number
  priceChange: number
  trendDirection: TrendDirection
  data: ChartData
}

export type StackedBarData = {
  name: string
  bar1: {
    pv: number
    amt: number
    uv: number
  }
  bar2: {
    pv: number
    amt: number
    uv: number
  }
}

export type FlightDataType = {
  international: StackedBarData[]
  domestic: StackedBarData[]
}

export type CompanyProductInfo = {
  company: string
  location: string
  currentPrice: number
  priceChange: number
  trendDirection: TrendDirection
  data: ChartData
}

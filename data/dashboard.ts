
import {
  ProductInfo,
  FlightDataType,
  CompanyProductInfo,
} from '@/types/chart'

export const productData: ProductInfo[] = [
  {
    name: 'Premium Motor Spirit',
    abbreviation: 'PMS',
    fullName: 'Premium Motor Spirit',
    currentPrice: 714.26,
    priceChange: 0.37,
    trendDirection: 'up',
    data: [
      { name: 'Jan', value: 4000 },
      { name: 'Feb', value: 3000 },
      { name: 'Mar', value: 2000 },
      { name: 'Apr', value: 2780 },
      { name: 'May', value: 1890 },
      { name: 'Jun', value: 2390 },
      { name: 'Jul', value: 3490 },
    ],
  },
  {
    name: 'Automotive Gas Oil',
    abbreviation: 'AGO',
    fullName: 'Automotive Gas Oil',
    currentPrice: 689.54,
    priceChange: -1.23,
    trendDirection: 'down',
    data: [
      { name: 'Jan', value: 3500 },
      { name: 'Feb', value: 4200 },
      { name: 'Mar', value: 3800 },
      { name: 'Apr', value: 3100 },
      { name: 'May', value: 2900 },
      { name: 'Jun', value: 2700 },
      { name: 'Jul', value: 2500 },
    ],
  },
  {
    name: 'Premium Diesel Kerosene',
    abbreviation: 'PDK',
    fullName: 'Premium Diesel Kerosene',
    currentPrice: 625.18,
    priceChange: 0.42,
    trendDirection: 'up',
    data: [
      { name: 'Jan', value: 3200 },
      { name: 'Feb', value: 3500 },
      { name: 'Mar', value: 3800 },
      { name: 'Apr', value: 3400 },
      { name: 'May', value: 3100 },
      { name: 'Jun', value: 3300 },
      { name: 'Jul', value: 3600 },
    ],
  },
  {
    name: 'Industrial Combustion Engine',
    abbreviation: 'ICE',
    fullName: 'Industrial Combustion Engine',
    currentPrice: 845.72,
    priceChange: 2.15,
    trendDirection: 'up',
    data: [
      { name: 'Jan', value: 4200 },
      { name: 'Feb', value: 4500 },
      { name: 'Mar', value: 4800 },
      { name: 'Apr', value: 5200 },
      { name: 'May', value: 5500 },
      { name: 'Jun', value: 5800 },
      { name: 'Jul', value: 6200 },
    ],
  },
]

export const flightData: FlightDataType = {
  international: [
    {
      name: 'Jan',
      bar1: { pv: 2400, amt: 1800, uv: 1200 },
      bar2: { pv: 2000, amt: 1500, uv: 1000 },
    },
    {
      name: 'Feb',
      bar1: { pv: 1398, amt: 1100, uv: 800 },
      bar2: { pv: 1200, amt: 900, uv: 600 },
    },
    {
      name: 'Mar',
      bar1: { pv: 9800, amt: 7500, uv: 5000 },
      bar2: { pv: 8500, amt: 6500, uv: 4500 },
    },
    {
      name: 'Apr',
      bar1: { pv: 3908, amt: 3000, uv: 2000 },
      bar2: { pv: 3500, amt: 2800, uv: 1800 },
    },
  ],
  domestic: [
    {
      name: 'Jan',
      bar1: { pv: 1800, amt: 1400, uv: 900 },
      bar2: { pv: 1500, amt: 1200, uv: 800 },
    },
    {
      name: 'Feb',
      bar1: { pv: 1200, amt: 900, uv: 600 },
      bar2: { pv: 1000, amt: 800, uv: 500 },
    },
    {
      name: 'Mar',
      bar1: { pv: 7500, amt: 6000, uv: 4000 },
      bar2: { pv: 6500, amt: 5000, uv: 3500 },
    },
    {
      name: 'Apr',
      bar1: { pv: 3000, amt: 2500, uv: 1600 },
      bar2: { pv: 2800, amt: 2200, uv: 1500 },
    },
  ],
}

export const topAirports = [
  { airport: 'Murtala Muhammed International Airport', flightCount: 12489 },
  { airport: 'Nnamdi Azikiwe International Airport', flightCount: 9872 },
  { airport: 'Port Harcourt International Airport', flightCount: 7563 },
  { airport: 'Mallam Aminu Kano International Airport', flightCount: 10100 },
  { airport: 'Akanu Ibiam International Airport', flightCount: 6542 },
  { airport: 'Muritala Mohammed Airport', flightCount: 10722 },
]

export const reportsData = [
  { title: 'PMS - Aug 12-17', imageUrl: '/report.svg' },
  { title: 'AGO - Aug 12-17', imageUrl: '/report.svg' },
  { title: 'HHK - Aug 12-17', imageUrl: '/report.svg' },
  { title: 'LPG - Aug 12-17', imageUrl: '/report.svg' },
]

export const companyData: CompanyProductInfo[] = [
  {
    company: 'NIPCO',
    location: 'Lagos',
    currentPrice: 712.45,
    priceChange: 1.25,
    trendDirection: 'up',
    data: [
      { name: 'Jan', value: 3800 },
      { name: 'Feb', value: 4200 },
      { name: 'Mar', value: 3900 },
      { name: 'Apr', value: 4100 },
      { name: 'May', value: 4300 },
      { name: 'Jun', value: 4400 },
      { name: 'Jul', value: 4600 },
    ],
  },
  {
    company: 'Oando PLC',
    location: 'Rivers',
    currentPrice: 705.8,
    priceChange: -0.75,
    trendDirection: 'down',
    data: [
      { name: 'Jan', value: 4200 },
      { name: 'Feb', value: 4000 },
      { name: 'Mar', value: 3800 },
      { name: 'Apr', value: 3900 },
      { name: 'May', value: 3700 },
      { name: 'Jun', value: 3600 },
      { name: 'Jul', value: 3500 },
    ],
  },
  {
    company: 'MRS Oil Nigeria PLC',
    location: 'Oyo',
    currentPrice: 720.3,
    priceChange: 2.1,
    trendDirection: 'up',
    data: [
      { name: 'Jan', value: 3500 },
      { name: 'Feb', value: 3700 },
      { name: 'Mar', value: 3900 },
      { name: 'Apr', value: 4100 },
      { name: 'May', value: 4300 },
      { name: 'Jun', value: 4500 },
      { name: 'Jul', value: 4700 },
    ],
  },
]


'use client'

interface ProductPriceDisplayProps {
  currentPrice: number
  priceChange: number
  trendDirection: 'up' | 'down'
}

export const ProductPriceDisplay = ({
  currentPrice,
  priceChange,
  trendDirection,
}: ProductPriceDisplayProps) => {
  const changeTextColor =
    trendDirection === 'up' ? 'text-green-500' : 'text-red-500'

  return (
    <div>
      <p className='text-[13px] font-[600]'>N{currentPrice.toFixed(2)}</p>
      <p className={`text-[12px] font-[500] ${changeTextColor}`}>
        {priceChange > 0 ? '+' : ''}
        {priceChange.toFixed(2)}
      </p>
    </div>
  )
}

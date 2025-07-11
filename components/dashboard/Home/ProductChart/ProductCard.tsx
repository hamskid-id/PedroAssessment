'use client'

import { ProductTrendIndicator } from './ProductTrendIndicator'
import { ProductPriceDisplay } from './ProductPriceDisplay'
import { AreaChartField } from '@/components/shared/AreaChart'
import { ProductInfo } from '@/types/dashboard'

interface ProductCardProps {
  product: ProductInfo
  showChart?: boolean
}

export const ProductCard = ({
  product,
  showChart = true,
}: ProductCardProps) => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-2 px-4 py-4'>
      <div>
        <ProductTrendIndicator
          trendDirection={product.trendDirection}
          abbreviation={product.abbreviation}
        />
        <p className='text-[12px] font-[500] text-customGrey-300'>
          {product.fullName}
        </p>
      </div>
      {showChart && (
        <div className='w-full md:flex hidden'>
          <AreaChartField
            data={product.data}
            trendDirection={product.trendDirection}
          />
        </div>
      )}
      <div className='flex justify-end'>
        <ProductPriceDisplay
          currentPrice={product.currentPrice}
          priceChange={product.priceChange}
          trendDirection={product.trendDirection}
        />
      </div>
    </div>
  )
}

'use client'

import BrandIcon from '@/public/LogoIcon.svg'
import { CustomImage } from './Image'
import { cn } from '../../lib/utils'
import { useRouter } from 'nextjs-toploader/app'

export const LogoIcon = () => {
  const router = useRouter()

  return (
    <CustomImage
      src={BrandIcon}
      style={cn('w-[17.92px] h-[30.72px] cursor-pointer')}
      imgStyle='object-none'
      priority={true}
      clickFunc={() => router.push('/')}
    />
  )
}

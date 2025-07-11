import { cn } from '../../lib/utils'
import { CSSProperties } from 'react'

interface IMaxScreenWrapperPropType {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
}

export const MaxScreenWrapper: React.FC<IMaxScreenWrapperPropType> = ({
  className,
  children,
  style,
}: IMaxScreenWrapperPropType) => {
  return (
    <section className={cn('m-auto max-w-[1440px]', className)} style={style}>
      {children}
    </section>
  )
}

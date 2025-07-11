'use client'

import { CustomImage } from '@/components/shared/Image'
import { ReportWeekSvg } from '@/public/svg'

interface Report {
  title: string
  imageUrl: string
}

interface ReportWeekCardProps {
  weekNumber: number
  reports: Report[]
}

export const ReportWeekCard = ({
  weekNumber = 31,
  reports = [],
}: ReportWeekCardProps) => {
  return (
    <div className='rounded-[24px] bg-customGrey-800 px-4 py-6 h-full'>
      <div className='flex items-center text-[12px] font-[500] text-white gap-2 mb-4'>
        <ReportWeekSvg /> Reports - week {weekNumber}
      </div>
      <div className='rounded-[24px] bg-customGrey-800 grid grid-cols-2 gap-[12px]'>
        {reports.map((report, index) => (
          <div key={index}>
            <div className='flex flex-col justify-center items-center gap-[8px] h-full'>
              <CustomImage
                src={report.imageUrl}
                style='w-[98px] h-[63px]'
                imgStyle='object-none'
              />
              <p className='font-[400] text-[12px] text-customGrey-300 text-center'>
                {report.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

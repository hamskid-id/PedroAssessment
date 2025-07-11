'use client';

import { IceSvg } from '@/public/svg';
import { CustomImage } from '@/components/shared/Image';
import { truncateText } from '@/lib/utils';
import NewWidget from '@/public/New widget.png';

export const IceWidget = () => (
  <div className="relative md:w-full md:h-full h-[290px] w-full rounded-[24px] overflow-hidden">
    <CustomImage
      src={NewWidget}
      style="w-full h-full rounded-[24px]"
      imgStyle="object-cover rounded-[24px]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/0 rounded-[24px]"></div>
    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
      <div className="bg-customPrimary-700 px-[10px] py-[2px] text-white rounded-full min-w-[36px] min-h-[32px] flex items-center font-[600]">
        ICE
      </div>
      <IceSvg />
    </div>
    <div className="absolute bottom-4 left-4 right-4 z-10">
      <p className="text-[12px] font-[600] text-white mb-1">Vanguard</p>
      <p className="font-[600] text-[16px] text-white">
        {truncateText(
          'Shareholders Enjoy a Massive Windfall as BP Expands Global Operations'
        )}
      </p>
    </div>
  </div>
);
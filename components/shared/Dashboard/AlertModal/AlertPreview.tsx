'use client';

interface AlertPreviewProps {
  formData: {
    product: string;
    condition: string;
    price: string;
  };
}

export const AlertPreview = ({ formData }: AlertPreviewProps) => (
  <div className="p-4 rounded-[16px] border border-customGrey-500 !bg-customGrey-600 min-h-[128px]">
    <h4 className="text-sm font-medium text-white">
      {formData.product} {formData.condition.toLowerCase()} {formData.price || '___'}
    </h4>
  </div>
);
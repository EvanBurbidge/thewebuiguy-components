import React from 'react';
import { Button } from '@components/Button';
import { FourOhFour } from '@components/FourOhFour';

export interface NoDataProps {
  cta?: string,
  title: string;
  subtitle: string;
  handleCtaClick?: () => void;
}

export const NoData: React.FC<NoDataProps> = ({ handleCtaClick, cta, title, subtitle }: NoDataProps) => {
  return (
    <div className="flex items-center justify-center w-full h-auto align-center">
      <div className="flex flex-col items-center justify-between w-full h-auto p-4 text-center bg-white border border-gray-200 rounded shadow-sm md:w-1/2">
        <div>
          <h1 className="mb-3 text-3xl font-bold text-primary">{title}</h1>
          <h2 className="text-xl font-semibold text-primary"> {subtitle}</h2>
        </div>
        <div className="p-8 my-2">
          <FourOhFour />
        </div>
        {handleCtaClick && (
          <div className="w-1/4">
            <Button
              id="no-data-create-button"
              onClick={handleCtaClick}
            >
              {cta}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

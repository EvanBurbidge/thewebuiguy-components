import React from 'react';
import { useType } from '../hooks/useType';
import { XIcon } from '@heroicons/react/outline'

import { Button } from '../Button';
import { BannerProps } from '../Banner/BannerTypes';

export const BannerBody: React.FC<BannerProps> = ({
  title,
  longTitle,
  type,
  ctaAction,
  closeAction,
  closeText,
  Icon,
  cta,
  rounded = true,
}: BannerProps) => {
  const { background } = useType(type);
  return (
    <div className={`p-2 ${background} ${rounded ? 'rounded-lg' : ''} shadow-lg sm:p-3`} >
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center flex-1 w-0">
          {Icon && (
            <span className="flex p-2 rounded-lg">
              {Icon}
            </span>
          )}
          <p className="ml-3 font-medium text-white truncate">
            <span className="md:hidden">{title}</span>
            <span className="hidden md:inline">{longTitle}</span>
          </p>
        </div>
        <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
          <span
            onClick={ctaAction}
            className={`flex items-center justify-center px-4 py-2 text-sm font-medium text-${type} bg-white border border-transparent rounded-md shadow-sm`}
          >
            {cta}
          </span>
        </div>
        <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
          <Button id="dismiss-button" type={type} onClick={closeAction}>
            <span className="sr-only">{closeText}</span>
            <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
}

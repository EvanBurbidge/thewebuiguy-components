import React from 'react';
import { BannerBody } from '../BannerBody';
import { BannerProps } from '../../constants/BannerTypes';


export const BannerFloatingFooter: React.FC<BannerProps> = ({
  type,
  ...rest
}: BannerProps) => (
  <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5">
    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <BannerBody type={type} {...rest} />
    </div>
  </div >
)

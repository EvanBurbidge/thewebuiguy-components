import React, { useMemo } from 'react';

import { BannerStickyFooter } from '../BannerStickyFooter';
import { BannerFloatingFooter } from '../BannerFloatingFooter';
import { BannerWrapperProps } from '../../constants/BannerTypes';


const Banners: { [key: string]: any } = {
  floatingFooter: BannerFloatingFooter,
  stickyFooter: BannerStickyFooter
}


export const Banner: React.FC<BannerWrapperProps> = (props: BannerWrapperProps) => {
  const Banner = useMemo(() => {
    if (!props.bannerType) {
      return Banners.floatingFooter;
    }
    return Banners[props.bannerType];
  }, [props.bannerType]);
  return <Banner {...props} />
}

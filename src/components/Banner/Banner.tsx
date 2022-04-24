import React, { useMemo } from 'react';

import { BannerStickyFooter } from '../BannerStickyFooter';
import { BannerStickyHeader } from '../BannerStickyHeader';
import { BannerFloatingFooter } from '../BannerFloatingFooter';
import { BannerWrapperProps } from './BannerTypes';


const Banners: { [key: string]: any } = {
  floatingFooter: BannerFloatingFooter,
  stickyFooter: BannerStickyFooter,
  stickyHeader: BannerStickyHeader
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

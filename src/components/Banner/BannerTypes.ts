
import { ReactElement } from 'react';
export interface BannerProps {
  type: string;
  cta: string;
  title: string;
  longTitle: string
  closeText: string;
  closeAction: () => void;
  ctaAction: () => void;
  Icon?: ReactElement;
  rounded?: boolean;
}

export interface BannerWrapperProps extends BannerProps {
  bannerType: string;
}
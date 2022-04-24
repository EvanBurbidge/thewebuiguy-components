import React from 'react';
import { BannerProps } from '../Banner/BannerTypes';
import { BannerBody } from '../BannerBody';

export const BannerStickyFooter: React.FC<BannerProps> = (props: BannerProps) => {
  return (
    <>
      {/*
      Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
      your content from being obscured when the user scrolls to the bottom of the page.
    */}
      <div className="fixed inset-x-0 bottom-0">
        <BannerBody {...props} rounded={false} />
      </div>
    </>
  );
}

import React from 'react';
import { BannerBody } from '../BannerBody';
import { BannerProps } from '../Banner/BannerTypes';

export const BannerStickyHeader: React.FC<BannerProps> = (props: BannerProps) => {
  return (
    <>
      {/*
      Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
      your content from being obscured when the user scrolls to the bottom of the page.
    */}
      <div className="fixed inset-x-0 top-0">
        <BannerBody {...props} rounded={false} />
      </div>
    </>
  );
}

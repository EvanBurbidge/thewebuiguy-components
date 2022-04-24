import React from 'react';
import { Banner } from '..';
import { render, screen, fireEvent } from '@testing-library/react';
import { BannerWrapperProps } from '../BannerTypes';

const fn = jest.fn()

const defaultProps: BannerWrapperProps = {
  type: "primary",
  title: "We have some exciting news",
  longTitle: "We now have floating banners",
  closeText: "Dismiss",
  cta: "Learn about it",
  closeAction: fn,
  ctaAction: fn,
  bannerType: "stickyHeader",
};

const setup = (props = defaultProps) => render(<Banner {...props} />);

describe('Banner', () => {
  it('renders', async () => {
    setup();
    screen.getByText('We now have floating banners');
    screen.getByText('Dismiss');
    screen.getByText('Learn about it');
    await fireEvent.click(screen.getByText('Learn about it'));
    await fireEvent.click(screen.getByText('Dismiss'));
  });
});

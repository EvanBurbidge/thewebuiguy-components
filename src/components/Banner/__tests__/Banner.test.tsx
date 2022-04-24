import React from 'react';
import { Banner, BannerProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: BannerProps = {
  
};

const setup = (props = defaultProps) => render(<Banner {...props} />);

describe('Banner', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

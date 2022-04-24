import React from 'react';
import { Breadcrumbs, BreadcrumbsProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: BreadcrumbsProps = {
  breadcrumbs: [
    {
      text: "First",
      isActive: false,
      href: 'https://thewebuiguy-components.vercel.com',
    },
    {
      text: "Second",
      isActive: true,
      href: 'https://thewebuiguy-components.vercel.com',
    },
    {
      text: "Third",
      isActive: false,
      href: 'https://thewebuiguy-components.vercel.com',
    }
  ]
};

const setup = (props = defaultProps) => render(<Breadcrumbs {...props} />);

describe('Breadcrumbs', () => {
  it('renders', () => {
    setup();
    screen.getByText('First');
    screen.getByText('Second');
    screen.getByText('Third');
  });
});

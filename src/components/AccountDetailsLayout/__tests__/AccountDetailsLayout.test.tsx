import React from 'react';
import { AccountDetailsLayout, AccountDetailsLayoutProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: AccountDetailsLayoutProps = {
  title: "title",
  subtitle: "subtitle",
  children: <p>child</p>
};

const setup = (props = defaultProps) => render(<AccountDetailsLayout {...props} />);

describe('AccountDetailsLayout', () => {
  it('renders', () => {
    setup();
    screen.getByText('title');
    screen.getByText('subtitle');
    screen.getByText('child');
  });
});

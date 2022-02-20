import React from 'react';
import { AccountDetailsLayout, AccountDetailsLayoutProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: AccountDetailsLayoutProps = {
  
};

const setup = (props = defaultProps) => render(<AccountDetailsLayout {...props} />);

describe('AccountDetailsLayout', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

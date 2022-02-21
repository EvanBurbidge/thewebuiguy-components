import React from 'react';
import { Toggle, ToggleProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ToggleProps = {
  
};

const setup = (props = defaultProps) => render(<Toggle {...props} />);

describe('Toggle', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

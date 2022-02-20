import React from 'react';
import { ButtonOutline, ButtonOutlineProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ButtonOutlineProps = {
  
};

const setup = (props = defaultProps) => render(<ButtonOutline {...props} />);

describe('ButtonOutline', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

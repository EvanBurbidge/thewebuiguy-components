import React from 'react';
import { LinkedInput, LinkedInputProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: LinkedInputProps = {
  
};

const setup = (props = defaultProps) => render(<LinkedInput {...props} />);

describe('LinkedInput', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

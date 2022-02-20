import React from 'react';
import { InputGroup, InputGroupProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: InputGroupProps = {
  
};

const setup = (props = defaultProps) => render(<InputGroup {...props} />);

describe('InputGroup', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

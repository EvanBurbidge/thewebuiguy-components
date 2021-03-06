import React from 'react';
import { Input, InputProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: InputProps = {
  id: 'input',
  onChange: () => { }
};

const setup = (props = defaultProps) => render(<Input {...props} />);

describe('Input', () => {
  it('renders', () => {
    setup();
    screen.getByTestId('input');
  });
});

import React from 'react';
import { SearchInput } from '..';
import { InputProps } from '../../Input';
import { render, screen } from '@testing-library/react';

const defaultProps: InputProps = {
  id: 'test',
};

const setup = (props = defaultProps) => render(<SearchInput {...props} />);

describe('SearchInput', () => {
  it('renders', () => {
    setup();
    screen.getByTestId('test');
  });
});

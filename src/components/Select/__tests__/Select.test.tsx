import React from 'react';
import { Select, SelectProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: SelectProps = {
  id: 'select',
  value: 'test',
  onChange: () => { },
  options: [{ value: 'test', label: 'test' }, { value: 'test one', label: 'test one' }, { value: 'test two', label: 'test two' }]
};

// const setup = (props = defaultProps) => render(<Select {...props} />);

describe('Select', () => {
  xit('renders', () => {
  });
});

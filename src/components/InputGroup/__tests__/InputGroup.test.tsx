import React from 'react';
import { InputGroup, InputGroupProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: InputGroupProps = {
  id: "test",
  label: "label",
  subtitle: "subtitle",
  inputElement: <p>input</p>
};

const setup = (props = defaultProps) => render(<InputGroup {...props} />);

describe('InputGroup', () => {
  xit('renders', () => {
    setup();
    screen.getByText('label');
    screen.getByText('subtitle');
  });
});

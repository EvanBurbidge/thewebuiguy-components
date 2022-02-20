import React from 'react';
import { Pill, PillProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: PillProps = {
  text: "string",
  color: "red",
  bgColor: "white"
};

const setup = (props = defaultProps) => render(<Pill {...props} />);

describe('Pill', () => {
  it('renders', () => {
    setup();
    screen.getByText('string');
  });
});

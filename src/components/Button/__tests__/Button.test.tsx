import React from 'react';
import { Button, ButtonProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ButtonProps = {
  id: "button",
  onClick: () => { },
  children: <p>test</p>
};

const setup = (props = defaultProps) => render(<Button {...props} />);

describe('Button', () => {
  it('renders', () => {
    setup();
    screen.getByText('test')
  });
});

import React from 'react';
import { Checkbox, CheckboxProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: CheckboxProps = {
  value: false,
  id: 'checkbox',
  onClick: () => { },
  label: 'This is a label',
  subtitle: 'this is a subtitle',
};

const setup = (props = defaultProps) => render(<Checkbox {...props} />);

describe('Checkbox', () => {
  it('renders', () => {
    setup();
    screen.getByText('This is a label');
    screen.getByText('this is a subtitle');
  });
});

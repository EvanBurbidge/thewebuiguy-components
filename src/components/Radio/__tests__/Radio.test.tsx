import React from 'react';
import { Radio, RadioProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: RadioProps = {
  value: false,
  id: 'radio',
  onClick: () => { },
  label: 'This is a label',
  subtitle: 'this is a subtitle',
};

const setup = (props = defaultProps) => render(<Radio {...props} />);

describe('Radio', () => {
  it('renders', () => {
    setup();
    screen.getByText('This is a label');
    screen.getByText('this is a subtitle');
  });
});

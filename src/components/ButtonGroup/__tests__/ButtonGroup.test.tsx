import React from 'react';
import { ButtonGroup, ButtonGroupProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ButtonGroupProps = {
  type: 'primary',
  buttonConfig: [
    {
      isFirst: true,
      id: 'years',
      text: 'years',
      action: () => console.log('howdy'),
    },
    {
      id: 'months',
      text: 'months',
      action: () => console.log('howdy 2'),
    },
    {
      id: 'days',
      text: 'days',
      isLast: true,
      action: () => console.log('howdy day'),
    },
  ]
};

const setup = (props = defaultProps) => render(<ButtonGroup {...props} />);

describe('ButtonGroup', () => {
  it('renders', () => {
    setup();
    expect(screen.getByText('years'));
    expect(screen.getByText('months'));
    expect(screen.getByText('days'));
  });
});

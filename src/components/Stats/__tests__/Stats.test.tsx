import React from 'react';
import { Stats, StatsProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: StatsProps = {
  stats: [
    { name: 'Total Subscribers', stat: '71,897' },
    { name: 'Avg. Open Rate', stat: '58.16%' },
    { name: 'Avg. Click Rate', stat: '24.57%' },
  ]
};

const setup = (props = defaultProps) => render(<Stats {...props} />);

describe('Stats', () => {
  it('renders', () => {
    setup();
    screen.getByText('Total Subscribers');
    screen.getByText('71,897');
  });
});

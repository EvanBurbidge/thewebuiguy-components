import React from 'react';
import { StatWithChange, StatWithChangeProps } from '..';
import { render, screen } from '@testing-library/react';

const stats = [
  { name: 'Total Subscribers', stat: '71,897', previousStat: '70,946', change: '12%', changeType: 'increase' },
  { name: 'Avg. Open Rate', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
  { name: 'Avg. Click Rate', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]

const defaultProps: StatWithChangeProps = {
  stats
};

const setup = (props = defaultProps) => render(<StatWithChange {...props} />);

describe('StatWithChange', () => {
  it('renders', () => {
    setup();
    screen.getByText('Total Subscribers');
    screen.getByText('71,897');
    screen.getByText('12%');
  });
});

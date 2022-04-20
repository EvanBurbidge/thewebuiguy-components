import React from 'react';
import { ActivityFeed, ActivityFeedProps } from '..';
import { render, screen } from '@testing-library/react';

/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    id: 0,
    name: 'Lindsay Walton',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
  // More people...
]
const activityItems = [
  { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', branch: 'master', time: '1h' },
]

const defaultProps: ActivityFeedProps = {
  activities: activityItems, 
};

const setup = (props = defaultProps) => render(<ActivityFeed {...props} />);

describe('ActivityFeed', () => {
  it('renders', () => {
    setup();
    screen.getByText('Deployed Workcation (2d89f0c8 in master)');
  });
});

import React from 'react';


import { ActivityFeed } from './ActivityFeed'
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
const activities = [
  { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', branch: 'master', time: '1h' },
  { id: 2, person: people[0], project: 'Workcation', commit: '2d89f0c8', branch: 'master', time: '2h' },
  { id: 3, person: people[0], project: 'Workcation', commit: '2d89f0c8', branch: 'master', time: '3h' },
]

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/ActivityFeed',
  component: ActivityFeed,
};


export const Primary = {
  args: {
    activities
  }
};

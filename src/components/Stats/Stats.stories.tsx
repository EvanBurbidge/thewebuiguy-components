import React from 'react';


import { Stats } from './Stats'

const statsProp = [
  { name: 'Total Subscribers', stat: '71,897' },
  { name: 'Avg. Open Rate', stat: '58.16%' },
  { name: 'Avg. Click Rate', stat: '24.57%' },
]

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Stats',
  component: Stats,
};

export const Primary = {
  args: {
    stats: statsProp
  }
};

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StatWithChange } from './StatWithChange'

const stats = [
  { name: 'Total Subscribers', stat: '71,897', previousStat: '70,946', change: '12%', changeType: 'increase' },
  { name: 'Avg. Open Rate', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
  { name: 'Avg. Click Rate', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/StatWithChange',
  component: StatWithChange,
} as ComponentMeta<typeof StatWithChange>;

const Template: ComponentStory<typeof StatWithChange> = (args) => <StatWithChange {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  stats,
};

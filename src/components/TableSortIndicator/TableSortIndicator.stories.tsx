import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableSortIndicator } from './TableSortIndicator'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/TableSortIndicator',
  component: TableSortIndicator,
} as ComponentMeta<typeof TableSortIndicator>;

const Template: ComponentStory<typeof TableSortIndicator> = (args) => <TableSortIndicator {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

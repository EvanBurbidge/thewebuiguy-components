import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableSortPill } from './TableSortPill'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/TableSortPill',
  component: TableSortPill,
} as ComponentMeta<typeof TableSortPill>;

const Template: ComponentStory<typeof TableSortPill> = (args) => <TableSortPill {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  sortingName: "Title"
};

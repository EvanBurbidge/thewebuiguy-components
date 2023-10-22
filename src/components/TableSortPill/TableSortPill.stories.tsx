import React from 'react';


import { TableSortPill } from './TableSortPill'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/TableSortPill',
  component: TableSortPill,
};

const Template: any = (args: any) => <TableSortPill {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  sortingName: "Title"
};

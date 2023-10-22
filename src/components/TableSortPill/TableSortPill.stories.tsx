import React from 'react';


import { TableSortPill } from './TableSortPill'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/TableSortPill',
  component: TableSortPill,
};

export const Primary = {
  args: {
    sortingName: "Title"
  }
};

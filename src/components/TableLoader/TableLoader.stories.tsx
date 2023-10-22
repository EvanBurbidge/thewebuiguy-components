import React from 'react';


import { TableLoader } from './TableLoader'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/TableLoader',
  component: TableLoader,
};

export const Primary = {
  args: {
    columns: ["", "", "", "", ""]
  }
};

import React from 'react';


import { TableLoader } from './TableLoader'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/TableLoader',
  component: TableLoader,
};

const Template: any = (args: any) => <TableLoader {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  columns: ["", "", "", "", ""]
};

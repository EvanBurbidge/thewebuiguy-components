import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableLoader } from './TableLoader'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/TableLoader',
  component: TableLoader,
} as ComponentMeta<typeof TableLoader>;

const Template: ComponentStory<typeof TableLoader> = (args) => <TableLoader {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  columns: ["", "", "", "", ""]
};

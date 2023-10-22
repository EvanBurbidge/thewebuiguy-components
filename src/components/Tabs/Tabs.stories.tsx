import React from 'react';

import { Tabs } from '../Tabs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Tabs',
  component: Tabs,
};

const Template: any = (args: any) => <Tabs {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  tabs: [
    { label: "tab 1", isActive: false },
    { label: "tab 2", isActive: true },
  ],
  onClick: () => { },
};

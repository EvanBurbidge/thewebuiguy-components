import React from 'react';


import { LinkedInput } from './LinkedInput'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/LinkedInput',
  component: LinkedInput,
};

const Template: any = (args: any) => <LinkedInput {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

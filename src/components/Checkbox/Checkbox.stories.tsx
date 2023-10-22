import React from 'react';


import { Checkbox } from './Checkbox'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Checkbox',
  component: Checkbox,
};

const Template: any = (args: any) => <Checkbox {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  value: false,
  id: 'checkbox',
  onClick: () => { },
  label: 'This is a label',
  subtitle: 'this is a subtitle',
};

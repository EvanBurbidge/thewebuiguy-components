import React from 'react';


import { Toggle } from './Toggle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Toggle',
  component: Toggle,
};

const Template: any = (args: any) => <Toggle {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  defaultEnabled: false,
  onChange: () => { }
};

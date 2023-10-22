import React from 'react';


import { TextArea } from './TextArea'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/TextArea',
  component: TextArea,
};

const Template: any = (args: any) => <TextArea {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: "textarea",
  onChange: () => { },
};

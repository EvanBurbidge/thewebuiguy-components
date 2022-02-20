import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from './Radio'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  value: false,
  id: 'radio-element',
  onClick: () => { },
  label: 'This is a label',
  subtitle: 'this is a subtitle',
};

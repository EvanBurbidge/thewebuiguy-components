import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pill } from './Pill'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Pill',
  component: Pill,
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: "string",
  color: "red",
  bgColor: "white"
};

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonOutline } from './ButtonOutline'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/ButtonOutline',
  component: ButtonOutline,
  argTypes: {
    type: {
      control: { type: "select", options: ["primary", "secondary", "success", "error"], defaultValue: "primary" },
    },
  }
} as ComponentMeta<typeof ButtonOutline>;

const Template: ComponentStory<typeof ButtonOutline> = (args) => <ButtonOutline {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: "primary-button",
  children: "Primary button",
  type: 'primary',
};

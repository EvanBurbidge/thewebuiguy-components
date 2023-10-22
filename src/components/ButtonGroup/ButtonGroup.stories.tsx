import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    type: {
      control: { type: "select", options: ["primary", "secondary", "success", "error"], defaultValue: "primary" },
    },
  }
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;

const buttonConfig = [
  {
    isFirst: true,
    id: 'years',
    text: 'years',
    action: () => console.log('howdy'),
  },
  {
    id: 'months',
    text: 'months',
    action: () => console.log('howdy 2'),
  },
  {
    id: 'days',
    text: 'days',
    isLast: true,
    action: () => console.log('howdy day'),
  },
]

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  buttonConfig,
  type: 'primary',
};

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <div className="flex justify-end width-100">
    <Dropdown {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Label for dropdown",
  actions: [{ label: "test", callback: () => { } }]
};

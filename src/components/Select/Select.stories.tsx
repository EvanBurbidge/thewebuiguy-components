import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: 'select',
  value: 'test',
  onChange: () => { },
  options: [{ value: 'test', label: 'test' }, { value: 'test one', label: 'test one' }, { value: 'test two', label: 'test two' }]
};

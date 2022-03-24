import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkedInput } from './LinkedInput'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/LinkedInput',
  component: LinkedInput,
} as ComponentMeta<typeof LinkedInput>;

const Template: ComponentStory<typeof LinkedInput> = (args) => <LinkedInput {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

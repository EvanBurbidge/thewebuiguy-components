import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeadingMetaData } from './HeadingMetaData'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/HeadingMetaData',
  component: HeadingMetaData,
} as ComponentMeta<typeof HeadingMetaData>;

const Template: ComponentStory<typeof HeadingMetaData> = (args) => <HeadingMetaData {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

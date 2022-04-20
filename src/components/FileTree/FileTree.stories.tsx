import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileTree } from './FileTree'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/FileTree',
  component: FileTree,
} as ComponentMeta<typeof FileTree>;

const Template: ComponentStory<typeof FileTree> = (args) => <FileTree {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

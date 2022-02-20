import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SectionTitle } from './SectionTitle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/SectionTitle',
  component: SectionTitle,
} as ComponentMeta<typeof SectionTitle>;

const Template: ComponentStory<typeof SectionTitle> = (args) => <SectionTitle {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "test title"
};

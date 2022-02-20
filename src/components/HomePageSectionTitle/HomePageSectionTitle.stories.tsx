import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomePageSectionTitle } from './HomePageSectionTitle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/HomePageSectionTitle',
  component: HomePageSectionTitle,
} as ComponentMeta<typeof HomePageSectionTitle>;

const Template: ComponentStory<typeof HomePageSectionTitle> = (args) => <HomePageSectionTitle {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Home section title",
  subtitle: "Home section subtitle",
};

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NoData } from './NoData'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/NoData',
  component: NoData,
} as ComponentMeta<typeof NoData>;

const Template: ComponentStory<typeof NoData> = (args) => <NoData {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "oh no",
  subtitle: "seems theres n odata",
  cta: "Get started",
  handleCtaClick: () => { }
};

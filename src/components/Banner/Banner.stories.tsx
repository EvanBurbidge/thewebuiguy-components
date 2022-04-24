import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Banner } from './Banner'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Banner',
  component: Banner,
  argTypes: {
    bannerType: {
      control: { type: "select", options: ["floatingFooter", "stickyFooter", "headerBanner"], defaultValue: "floatingFooter" },
    }
  }
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "We have some exciting news",
  longTitle: "We now have floating banners",
  closeText: "Dismiss",
  cta: "Learn about it",
  closeAction: () => { },
  ctaAction: () => { },
};

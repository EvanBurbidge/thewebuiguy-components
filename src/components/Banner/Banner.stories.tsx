import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Banner } from './Banner'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Banner',
  component: Banner,
  argTypes: {
    bannerType: {
      control: { type: "radio", options: ["floatingFooter", "stickyFooter", "stickyHeader"] },
    }
  }
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
  title: "We have some exciting news",
  longTitle: "We now have floating banners",
  closeText: "Dismiss",
  cta: "Learn about it",
  closeAction: () => {
    console.log("noooope")
  },
  ctaAction: () => {
    console.log("noooope")
  },
  bannerType: "stickyHeader",
};

import React from 'react';


import { Banner } from './Banner'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Banner',
  component: Banner,
  argTypes: {
    bannerType: {
      control: { type: "radio", options: ["floatingFooter", "stickyFooter", "stickyHeader"] },
    },
    type: {
      control: { type: "select", options: ["primary", "secondary", "success", "error"], defaultValue: "primary" },
    },
  }
};

export const Primary = {
  args: {
    type: "primary",
    bannerType: "stickyHeader",
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
  }
};

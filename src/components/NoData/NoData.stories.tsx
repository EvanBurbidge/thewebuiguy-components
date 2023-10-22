import React from 'react';


import { NoData } from './NoData'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/NoData',
  component: NoData,
};

export const Primary = {
  args: {
    title: "oh no",
    subtitle: "seems theres n odata",
    cta: "Get started",
    handleCtaClick: () => { }
  }
};

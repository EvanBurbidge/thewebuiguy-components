import React from 'react';


import { HomePageSectionTitle } from './HomePageSectionTitle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/HomePageSectionTitle',
  component: HomePageSectionTitle,
};

export const Primary = {
  args: {
    title: "Home section title",
    subtitle: "Home section subtitle",
  }
};

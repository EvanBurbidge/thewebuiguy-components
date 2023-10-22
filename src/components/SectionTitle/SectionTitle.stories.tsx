import React from 'react';


import { SectionTitle } from './SectionTitle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/SectionTitle',
  component: SectionTitle,
};

export const Primary = {
  args: {
    title: "test title"
  }
};

import React from 'react';


import { EmptyState } from './EmptyState'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/EmptyState',
  component: EmptyState,
};

export const Primary = {
  args: {
    title: "No Projects",
    subtitle: "Let's import some projects to get started",
    cta: "Import",
    ctaCallback: () => { },
    hideCta: false,
  }
};

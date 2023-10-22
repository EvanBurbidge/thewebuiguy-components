import React from 'react';


import { EmptyState } from './EmptyState'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/EmptyState',
  component: EmptyState,
};

const Template: any = (args: any) => <EmptyState {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "No Projects",
  subtitle: "Let's import some projects to get started",
  cta: "Import",
  ctaCallback: () => { },
  hideCta: false,
};

import React from 'react';


import { SectionTitle } from './SectionTitle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/SectionTitle',
  component: SectionTitle,
};

const Template: any = (args: any) => <SectionTitle {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "test title"
};

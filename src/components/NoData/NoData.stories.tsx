import React from 'react';


import { NoData } from './NoData'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/NoData',
  component: NoData,
};

const Template: any = (args: any) => <NoData {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "oh no",
  subtitle: "seems theres n odata",
  cta: "Get started",
  handleCtaClick: () => { }
};

import React from 'react';
import { AccountDetailsLayout } from './AccountDetailsLayout'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/AccountDetailsLayout',
  component: AccountDetailsLayout,
};

const Template: any = (args: any) => <AccountDetailsLayout {...args}> test with child </AccountDetailsLayout>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Some title",
  subtitle: "Some subtitle",
};

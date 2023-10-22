import React from 'react';
import { AccountDetailsLayout } from './AccountDetailsLayout'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/AccountDetailsLayout',
  component: AccountDetailsLayout,
};

export const Primary = {
  args: {
    title: "Some title",
    subtitle: "Some subtitle",
  }
};

import React from 'react';


import { Avatar } from './Avatar'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: { type: "select", options: ["xs", "sm", "md", "lg", "xl"], defaultValue: "md" },
    },
  }
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    size: "md"
  }
};

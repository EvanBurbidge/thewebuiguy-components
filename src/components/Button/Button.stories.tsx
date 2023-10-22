import React from 'react';


import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      control: { type: "select", options: ["primary", "secondary", "success", "error"], defaultValue: "primary" },
    },
  }
};


export const Primary = {
  args: {
    id: "primary-button",
    onClick: () => { },
    children: "Primary button",
    type: 'primary',
  }
};

import React from 'react';


import { Pill } from './Pill'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Pill',
  component: Pill,
  argTypes: {
    bgColor: {
      control: { type: "select", options: ["primary", "secondary", "success", "error"], defaultValue: "primary" },
    },
  }
};
export const Primary = {
  args: {
    text: "string",
    color: "white",
    bgColor: "primary"
  }
};

import React from 'react';

import { ButtonOutline } from './ButtonOutline'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/ButtonOutline',
  component: ButtonOutline,
  argTypes: {
    type: {
      control: { type: "select", options: ["primary", "secondary", "success", "error"], defaultValue: "primary" },
    },
  }
};

export const Primary = {
  args: {
    id: "primary-button",
    children: "Primary button",
    type: 'primary',

  }
};

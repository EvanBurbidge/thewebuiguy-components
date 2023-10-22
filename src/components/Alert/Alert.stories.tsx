import React from 'react';


import { Alert } from './Alert'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Alert',
  component: Alert,
  argTypes: {
    type: {
      control: { type: "select", options: ["primary", "secondary", "success", "error", "warning"], defaultValue: "primary" },
    },
  }
};


export const Primary = {
  args: {
    title: "This is a title",
    subtitle: "This is a subtitle",
    children: () => <p>Testing </p>,
    handleDismiss: () => { },
    type: "primary"
  }
};

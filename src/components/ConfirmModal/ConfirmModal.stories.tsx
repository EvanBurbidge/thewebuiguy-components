import React from 'react';


import { ConfirmModal } from './ConfirmModal'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/ConfirmModal',
  component: ConfirmModal,
  argTypes: {
    type: {
      control: { type: "select", options: ["primary", "secondary", "success", "error", "warning"], defaultValue: "primary" },
    },
  }
};

export const Primary = {
  args: {
    open: true,
    cancelAction: () => { },
    confirmAction: () => { },
    cancelText: "No way",
    confirmText: "Maybe",
    Content: "Do you want to do the thing",
    // type: "primary",
    title: "do you want the thing"
  }
};

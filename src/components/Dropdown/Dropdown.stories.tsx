import React from 'react';
import { Dropdown } from './Dropdown'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Dropdown',
  component: Dropdown,
};


export const Primary = {
  args: {
    label: "Label for dropdown",
    actions: [{ label: "test", callback: () => { } }]
  }
};

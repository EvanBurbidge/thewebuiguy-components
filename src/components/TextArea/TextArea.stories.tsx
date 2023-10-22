import React from 'react';


import { TextArea } from './TextArea'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/TextArea',
  component: TextArea,
};

export const Primary = {
  args: {
    id: "textarea",
    onChange: () => { },
  }
};

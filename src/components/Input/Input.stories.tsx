import React from 'react';


import { Input } from './Input'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Input',
  component: Input,
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    id: "input",
    onChange: () => { }
  }
};

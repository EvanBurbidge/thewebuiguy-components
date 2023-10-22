import React from 'react';


import { Radio } from './Radio'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Radio',
  component: Radio,
};

export const Primary = {
  args: {
    value: false,
    id: 'radio-element',
    onClick: () => { },
    label: 'This is a label',
    subtitle: 'this is a subtitle',
  }
};

import React from 'react';


import { Checkbox } from './Checkbox'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Checkbox',
  component: Checkbox,
};

export const Primary = {
  args: {
    value: false,
    id: 'checkbox',
    onClick: () => { },
    label: 'This is a label',
    subtitle: 'this is a subtitle',
  }
};

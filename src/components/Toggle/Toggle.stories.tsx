import React from 'react';


import { Toggle } from './Toggle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Toggle',
  component: Toggle,
};

export const Primary = {
  args: {
    defaultEnabled: false,
    onChange: () => { }
  }
};

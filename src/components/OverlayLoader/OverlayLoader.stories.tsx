import React from 'react';


import { OverlayLoader } from './OverlayLoader'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/OverlayLoader',
  component: OverlayLoader,
};

export const Primary = {
  args: {
    setOpen: () => { }
  }
};

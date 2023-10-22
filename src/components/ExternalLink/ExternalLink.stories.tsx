import React from 'react';


import { ExternalLink } from './ExternalLink'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/ExternalLink',
  component: ExternalLink,
};


// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    id: "link",
    href: "https://thewebuiguy.com"
  }
};


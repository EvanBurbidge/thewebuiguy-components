import React from 'react';


import { Breadcrumbs } from './Breadcrumbs'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Breadcrumbs',
  component: Breadcrumbs,
};

export const Primary = {
  args: {
    breadcrumbs: [
      {
        text: "First",
        isActive: false,
        href: 'https://thewebuiguy-components.vercel.com',
      },
      {
        text: "Second",
        isActive: true,
        href: 'https://thewebuiguy-components.vercel.com',
      },
      {
        text: "Third",
        isActive: false,
        href: 'https://thewebuiguy-components.vercel.com',
      }
    ]
  }
};

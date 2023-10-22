import React from 'react';


import { SearchInput } from './SearchInput'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/SearchInput',
  component: SearchInput,
};

export const Primary = {
  args: {
    id: "input"
  }
};

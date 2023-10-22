import React from 'react';


import { Select } from './Select'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Select',
  component: Select,
};

export const Primary = {
  args: {
    id: 'select',
    value: 'test',
    onChange: () => { },
    options: [{ value: 'test', label: 'test' }, { value: 'test one', label: 'test one' }, { value: 'test two', label: 'test two' }]
  }
};

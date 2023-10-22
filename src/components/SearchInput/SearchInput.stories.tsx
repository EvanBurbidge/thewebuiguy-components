import React from 'react';


import { SearchInput } from './SearchInput'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/SearchInput',
  component: SearchInput,
};

const Template: any = (args: any) => <SearchInput {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: "input"
};

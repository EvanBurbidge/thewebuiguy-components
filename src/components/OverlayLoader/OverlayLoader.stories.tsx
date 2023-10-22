import React from 'react';


import { OverlayLoader } from './OverlayLoader'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/OverlayLoader',
  component: OverlayLoader,
};

const Template: any = (args: any) => <OverlayLoader {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  setOpen: () => { }
};

import React from 'react';


import { FourOhFour } from './FourOhFour'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/FourOhFour',
  component: FourOhFour,
};

const Template: any = (args: any) => <FourOhFour {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

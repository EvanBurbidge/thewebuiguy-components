import React from 'react';


import { ExternalLink } from './ExternalLink'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/ExternalLink',
  component: ExternalLink,
};

const Template: any = (args: any) => <ExternalLink {...args}>Link</ExternalLink>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: "link",
  href: "https://thewebuiguy.com"
};


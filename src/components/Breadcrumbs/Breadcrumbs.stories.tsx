import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
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
};

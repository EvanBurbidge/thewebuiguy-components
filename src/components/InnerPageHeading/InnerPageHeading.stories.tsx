import React from 'react';
import { CalendarIcon } from '@heroicons/react/solid'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InnerPageHeading } from './InnerPageHeading'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/InnerPageHeading',
  component: InnerPageHeading,
} as ComponentMeta<typeof InnerPageHeading>;

const Template: ComponentStory<typeof InnerPageHeading> = (args) => <InnerPageHeading {...args} />;

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
  ],
  metaData: [
    { text: "Salary", Icon: <CalendarIcon className="w-4 h-4" /> }
  ],
  title: "Some page title"
};

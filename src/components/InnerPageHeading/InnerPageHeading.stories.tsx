import React from 'react';
import { CalendarIcon, CurrencyEuroIcon } from '@heroicons/react/solid'
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
    { text: "20/12/2022", Icon: CalendarIcon },
    { text: "100 - 120k", Icon: CurrencyEuroIcon },
  ],
  title: "Some page title"
};

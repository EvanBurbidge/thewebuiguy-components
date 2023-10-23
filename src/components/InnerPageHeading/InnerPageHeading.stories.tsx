import React from 'react';
import { CalendarIcon, CurrencyEuroIcon } from '@heroicons/react/24/solid'

import { InnerPageHeading } from './InnerPageHeading'
import { Button, ButtonOutline } from '..';



const Actions = () => (
  <div className="flex">
    <ButtonOutline id="secondary" onClick={() => { }}>Secondary</ButtonOutline>
    <Button id="secondary" onClick={() => { }} classNames="ml-3">Primary</Button>
  </div>
)
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/InnerPageHeading',
  component: InnerPageHeading,
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
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
    ],
    metaData: [
      { text: "20/12/2022", Icon: CalendarIcon },
      { text: "100 - 120k", Icon: CurrencyEuroIcon },
    ],
    title: "Some page title",
    Actions: <Actions />
  }
};

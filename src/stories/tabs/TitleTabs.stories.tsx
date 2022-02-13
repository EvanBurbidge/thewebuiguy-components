import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TitleTabs from '@components/tabs/TitleTabs';

export default {
  title: "TheWebUiGuy/TitleTabs",
  component: TitleTabs,
} as ComponentMeta<typeof TitleTabs>;

const Template: ComponentStory<typeof TitleTabs> = (args: any) => <TitleTabs {...args} />

const tabs = [
  {
    label: "Tab 1",
    isActive: false,
  },
  {
    label: "Tab 2",
    isActive: true,
  },
]

export const Tabs = Template.bind({});
Tabs.args = {
  tabs,
  onClick: (t) => console.log(t)
}

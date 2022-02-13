import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomePageSectionTitle from '@components/titles/HomePageSectionTitle';

export default {
  title: "TheWebUiGuy/HomePageSectionTitle",
  component: HomePageSectionTitle,
} as ComponentMeta<typeof HomePageSectionTitle>;

const Template: ComponentStory<typeof HomePageSectionTitle> = (args: any) => <HomePageSectionTitle {...args} />


export const PlainTitle = Template.bind({});
PlainTitle.args = {
  title: "Some page",
  subtitle: "with a subtitle to lets do a subtitle"
}


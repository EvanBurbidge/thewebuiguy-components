import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SectionTitle from '@components/titles/SectionTitle';

export default {
  title: "TheWebUiGuy/SectionTitle",
  component: SectionTitle,
} as ComponentMeta<typeof SectionTitle>;

const Template: ComponentStory<typeof SectionTitle> = (args: any) => <SectionTitle {...args} />


export const Title = Template.bind({});
Title.args = {
  title: "Some Section"
}

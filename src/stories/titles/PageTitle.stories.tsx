import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@components/Button';
import { ButtonOutline } from '@components/ButtonOutline';
import PageTitle from '@components/titles/PageTitle';

export default {
  title: "TheWebUiGuy/PageTitle",
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args: any) => <PageTitle {...args} />


export const PlainTitle = Template.bind({});
PlainTitle.args = {
  title: "Some page"
}

export const TitleWithPrimary = Template.bind({});

TitleWithPrimary.args = {
  title: "Some page with args",
  Primary: <Button id="test" onClick={() => { }}>Primary</Button>,
  Secondary: <ButtonOutline id="test-outline" onClick={() => { }}>Secondary</ButtonOutline>,
  Dropdown: <Button id="dropdown" onClick={() => { }}>DROPDOWN</Button>,
}

